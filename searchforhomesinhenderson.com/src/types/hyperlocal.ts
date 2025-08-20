// Core hyperlocal types for Henderson real estate platform

export interface GeoScope {
  center: [number, number] // [lat, lng]
  radiusMeters: number
  preferSameStreet?: boolean
}

export interface LocalData {
  source: 'FUB' | 'MLS' | 'Custom'
  refreshInterval: number // seconds
  fields: string[] // FUB field IDs
}

export interface HyperlocalComponent {
  geoScope: GeoScope
  localData: LocalData
  priority: 0 | 1 | 2 | 3
  complexity: 'O(1)' | 'O(log n)' | 'O(n)' | 'O(n²)'
}

// Street-level market comps interface
export interface StreetComps extends HyperlocalComponent {
  geoScope: GeoScope & {
    radiusMeters: 500
    preferSameStreet: true
  }
  localData: LocalData & {
    source: 'FUB'
    refreshInterval: 86400 // daily
    fields: [
      'listing_id',
      'sale_price',
      'sale_date',
      'sqft',
      'bedrooms',
      'bathrooms',
    ]
  }
}

// Enhanced walkability scoring interface
export interface WalkabilityScore {
  overall: number // 0-100
  categories: {
    shopping: { score: number; nearby: string[]; distance: number }
    dining: { score: number; nearby: string[]; distance: number }
    parks: { score: number; nearby: string[]; distance: number }
    schools: { score: number; nearby: string[]; distance: number }
    transit: { score: number; nearby: string[]; distance: number }
    healthcare: { score: number; nearby: string[]; distance: number }
  }
  insights: string[]
  recommendations: string[]
}

// School zone interface with real data
export interface SchoolZone {
  name: string
  type: 'elementary' | 'middle' | 'high' | 'private'
  district: 'CCSD' | 'Private'
  rating: number // 1-10
  enrollment: number
  boundary: [number, number][]
  distance: number // meters from property
  walkTime: number // minutes
  driveTime: number // minutes
  specialPrograms: string[]
  testScores: {
    math: number
    reading: number
    science: number
  }
}

// Local knowledge encoding
export interface LocalKnowledge {
  schoolZones: SchoolZone[]
  floodPlains: Array<{
    name: string
    boundary: [number, number][]
    risk: 'low' | 'medium' | 'high'
  }>
  walkabilityScores: Record<string, WalkabilityScore>
  noiseLevels: Record<
    string,
    { level: 'low' | 'medium' | 'high'; source: string; decibels: number }
  >
  localInsights: string[]
  marketTrends: {
    pricePerSqft: { current: number; trend: number; forecast: number }
    daysOnMarket: { current: number; trend: number; forecast: number }
    inventory: { current: number; trend: number; forecast: number }
  }
}

// Offline strategy
export interface OfflineStrategy {
  cachePriority: 'critical' | 'important' | 'nice-to-have'
  syncStrategy: 'immediate' | 'deferred' | 'manual'
  conflictResolution: 'FUB-wins' | 'merge' | 'manual'
}

// Temporal constraints
export interface TemporalScope {
  marketDataAge: number // max days old
  seasonalAdjustments: boolean
  trendWindow: number // days for trend calculation
}

// Henderson-specific hyperlocal data
export interface HendersonHyperlocalData {
  neighborhoods: {
    greenValley: GeoScope
    anthem: GeoScope
    sevenHills: GeoScope
    whitneyRanch: GeoScope
    stephanieRanch: GeoScope
  }
  schoolDistricts: {
    ccsd: GeoScope // Clark County School District
    private: GeoScope[]
  }
  amenities: {
    shopping: GeoScope[]
    dining: GeoScope[]
    parks: GeoScope[]
    golf: GeoScope[]
    healthcare: GeoScope[]
    transit: GeoScope[]
  }
}
