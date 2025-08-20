// Secure configuration management
// This file centralizes all environment variable access

export const config = {
  // Follow Up Boss API
  followUpBoss: {
    apiKey: process.env.FOLLOW_UP_BOSS_API_KEY,
    apiUrl: 'https://api.followupboss.com/v1',
  },

  // RealScout API
  realScout: {
    apiKey: process.env.REALSCOUT_API_KEY,
    agentId: process.env.REALSCOUT_AGENT_ID,
  },

  // Security
  security: {
    jwtSecret: process.env.JWT_SECRET || 'fallback-secret-change-in-production',
    encryptionKey: process.env.ENCRYPTION_KEY,
    rateLimitMax: Number.parseInt(
      process.env.RATE_LIMIT_MAX_REQUESTS || '100',
      10
    ),
    rateLimitWindow: Number.parseInt(
      process.env.RATE_LIMIT_WINDOW_MS || '900000',
      10
    ),
  },

  // External Services
  external: {
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  },

  // Environment
  env: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',

  // Validation
  validate() {
    const required = ['FOLLOW_UP_BOSS_API_KEY']

    const missing = required.filter((key) => !process.env[key])

    if (missing.length > 0) {
      throw new Error(
        `Missing required environment variables: ${missing.join(', ')}`
      )
    }
  },
}

// Validate configuration on import
if (config.isProduction) {
  config.validate()
}
