import type {
  HendersonHyperlocalData,
  GeoScope,
  StreetComps,
} from '@/types/hyperlocal'

// Property data interface
export interface PropertyData {
  id: string
  address: string
  salePrice: number
  saleDate: string
  sqft: number
  bedrooms: number
  bathrooms: number
  latitude: number
  longitude: number
  distance?: number
}

// Henderson hyperlocal data configuration
export const HENDERSON_HYPERLOCAL_DATA: HendersonHyperlocalData = {
  neighborhoods: {
    greenValley: {
      center: [36.0711, -115.0673],
      radiusMeters: 2000,
      preferSameStreet: true,
    },
    anthem: {
      center: [36.0897, -115.0589],
      radiusMeters: 1500,
      preferSameStreet: true,
    },
    sevenHills: {
      center: [36.0822, -115.0514],
      radiusMeters: 1200,
      preferSameStreet: true,
    },
    whitneyRanch: {
      center: [36.0639, -115.0847],
      radiusMeters: 1800,
      preferSameStreet: true,
    },
    stephanieRanch: {
      center: [36.0567, -115.0923],
      radiusMeters: 1600,
      preferSameStreet: true,
    },
  },
  schoolDistricts: {
    ccsd: {
      center: [36.0711, -115.0673],
      radiusMeters: 5000,
    },
    private: [
      {
        center: [36.0711, -115.0673], // Faith Lutheran
        radiusMeters: 3000,
      },
      {
        center: [36.0897, -115.0589], // The Meadows School
        radiusMeters: 4000,
      },
    ],
  },
  amenities: {
    shopping: [
      {
        center: [36.0711, -115.0673], // The District
        radiusMeters: 500,
      },
      {
        center: [36.0639, -115.0847], // Target area
        radiusMeters: 800,
      },
    ],
    dining: [
      {
        center: [36.0711, -115.0673], // The District restaurants
        radiusMeters: 500,
      },
    ],
    parks: [
      {
        center: [36.0711, -115.0673], // Green Valley Ranch
        radiusMeters: 1000,
      },
    ],
    golf: [
      {
        center: [36.0711, -115.0673], // Legacy Golf Club
        radiusMeters: 800,
      },
    ],
  },
}

// Calculate distance between two points using Haversine formula
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371e3 // Earth's radius in meters
  const φ1 = (lat1 * Math.PI) / 180
  const φ2 = (lat2 * Math.PI) / 180
  const Δφ = ((lat2 - lat1) * Math.PI) / 180
  const Δλ = ((lon2 - lon1) * Math.PI) / 180

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c
}

// Check if a point is within a geographic scope
export function isWithinScope(
  point: [number, number],
  scope: GeoScope
): boolean {
  const [lat, lng] = point
  const [centerLat, centerLng] = scope.center
  const distance = calculateDistance(lat, lng, centerLat, centerLng)
  return distance <= scope.radiusMeters
}

// Get properties within a specific scope
export async function getPropertiesInScope(
  scope: GeoScope,
  propertyData: PropertyData[]
): Promise<PropertyData[]> {
  return propertyData.filter((property) => {
    if (!property.latitude || !property.longitude) return false
    return isWithinScope([property.latitude, property.longitude], scope)
  })
}

// Street-level market comps service
export class StreetCompsService {
  private cache: Map<string, { data: PropertyData[]; timestamp: number }> =
    new Map()
  private cacheTTL = 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds

  async getStreetComps(
    address: string,
    scope: StreetComps['geoScope']
  ): Promise<PropertyData[]> {
    const cacheKey = `street-comps-${address}-${scope.radiusMeters}`
    const cached = this.cache.get(cacheKey)

    if (cached && Date.now() - cached.timestamp < this.cacheTTL) {
      return cached.data
    }

    try {
      // TODO: Integrate with FUB API for real property data
      const comps = await this.fetchStreetCompsFromFUB(address, scope)

      this.cache.set(cacheKey, {
        data: comps,
        timestamp: Date.now(),
      })

      return comps
    } catch (error) {
      console.error('Error fetching street comps:', error)
      return []
    }
  }

  private async fetchStreetCompsFromFUB(
    address: string,
    scope: StreetComps['geoScope']
  ): Promise<PropertyData[]> {
    // TODO: Implement FUB API integration
    // This would fetch properties from Follow Up Boss
    // and filter by geographic scope

    // Mock data for now
    return [
      {
        id: '1',
        address: '123 Main St',
        salePrice: 750000,
        saleDate: '2024-01-15',
        sqft: 2500,
        bedrooms: 4,
        bathrooms: 3,
        latitude: scope.center[0] + 0.001,
        longitude: scope.center[1] + 0.001,
        distance: 150, // meters
      },
      {
        id: '2',
        address: '456 Main St',
        salePrice: 780000,
        saleDate: '2024-02-01',
        sqft: 2600,
        bedrooms: 4,
        bathrooms: 3.5,
        latitude: scope.center[0] + 0.002,
        longitude: scope.center[1] + 0.002,
        distance: 300, // meters
      },
    ]
  }

  // Get walkability score for an address
  getWalkabilityScore(address: string, scope: GeoScope): number {
    // TODO: Integrate with walkability APIs
    // For now, return a score based on proximity to amenities
    const amenities = HENDERSON_HYPERLOCAL_DATA.amenities
    let score = 50 // Base score

    // Boost score based on nearby amenities
    if (scope.radiusMeters <= 500) score += 30
    if (scope.radiusMeters <= 1000) score += 20

    return Math.min(score, 100)
  }

  // Get local market trends
  getLocalMarketTrends(scope: GeoScope): {
    pricePerSqft: number
    daysOnMarket: number
    priceChange: number
  } {
    // TODO: Calculate from real FUB data
    return {
      pricePerSqft: 300,
      daysOnMarket: 18,
      priceChange: 2.5, // percentage
    }
  }
}

// Export singleton instance
export const streetCompsService = new StreetCompsService()
