// Core hyperlocal types for Henderson real estate platform

export interface GeoScope {
  center: [number, number]; // [lat, lng]
  radiusMeters: number;
  boundary?: GeoJSON;
  preferSameStreet?: boolean;
}

export interface LocalData {
  source: 'FUB' | 'MLS' | 'Custom';
  refreshInterval: number; // seconds
  fields: string[]; // FUB field IDs
}

export interface HyperlocalComponent {
  geoScope: GeoScope;
  localData: LocalData;
  priority: 0 | 1 | 2 | 3;
  complexity: 'O(1)' | 'O(log n)' | 'O(n)' | 'O(n²)';
}

// Street-level market comps interface
export interface StreetComps extends HyperlocalComponent {
  geoScope: GeoScope & {
    radiusMeters: 500;
    preferSameStreet: true;
  };
  localData: LocalData & {
    source: 'FUB';
    refreshInterval: 86400; // daily
    fields: ['listing_id', 'sale_price', 'sale_date', 'sqft', 'bedrooms', 'bathrooms'];
  };
}

// Local knowledge encoding
export interface LocalKnowledge {
  schoolZones: GeoJSON[];
  floodPlains: GeoJSON[];
  walkabilityScores: Record<string, number>;
  noiseLevels: Record<string, 'low' | 'medium' | 'high'>;
  localInsights: string[];
}

// Offline strategy
export interface OfflineStrategy {
  cachePriority: 'critical' | 'important' | 'nice-to-have';
  syncStrategy: 'immediate' | 'deferred' | 'manual';
  conflictResolution: 'FUB-wins' | 'merge' | 'manual';
}

// Temporal constraints
export interface TemporalScope {
  marketDataAge: number; // max days old
  seasonalAdjustments: boolean;
  trendWindow: number; // days for trend calculation
}

// Henderson-specific hyperlocal data
export interface HendersonHyperlocalData {
  neighborhoods: {
    greenValley: GeoScope;
    anthem: GeoScope;
    sevenHills: GeoScope;
    whitneyRanch: GeoScope;
    stephanieRanch: GeoScope;
  };
  schoolDistricts: {
    ccsd: GeoScope; // Clark County School District
    private: GeoScope[];
  };
  amenities: {
    shopping: GeoScope[];
    dining: GeoScope[];
    parks: GeoScope[];
    golf: GeoScope[];
  };
}
