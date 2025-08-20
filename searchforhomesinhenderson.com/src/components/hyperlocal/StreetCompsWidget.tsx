'use client'

import { useState, useEffect } from 'react'
import {
  streetCompsService,
  walkabilityService,
  marketIntelligenceService,
  HENDERSON_HYPERLOCAL_DATA,
  HENDERSON_SCHOOL_DATA,
} from '@/services/hyperlocalService'
import type { PropertyData } from '@/services/hyperlocalService'
import type {
  WalkabilityScore,
  SchoolZone,
  MicroMarketPricing,
  PredictiveMarketTrends,
} from '@/types/hyperlocal'

interface StreetCompsWidgetProps {
  address: string
  neighborhood: keyof typeof HENDERSON_HYPERLOCAL_DATA.neighborhoods
  className?: string
}

export default function StreetCompsWidget({
  address,
  neighborhood,
  className = '',
}: StreetCompsWidgetProps) {
  const [comps, setComps] = useState<PropertyData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [walkabilityScore, setWalkabilityScore] =
    useState<WalkabilityScore | null>(null)
  const [schoolZones, setSchoolZones] = useState<SchoolZone[]>([])
  const [marketTrends, setMarketTrends] = useState<{
    pricePerSqft: number
    daysOnMarket: number
    priceChange: number
  } | null>(null)
  const [microMarketPricing, setMicroMarketPricing] =
    useState<MicroMarketPricing | null>(null)
  const [predictiveTrends, setPredictiveTrends] =
    useState<PredictiveMarketTrends | null>(null)

  useEffect(() => {
    async function loadStreetComps() {
      try {
        setLoading(true)
        setError(null)

        const neighborhoodScope =
          HENDERSON_HYPERLOCAL_DATA.neighborhoods[neighborhood]
        const streetComps = await streetCompsService.getStreetComps(address, {
          ...neighborhoodScope,
          radiusMeters: 500, // Street-level scope
          preferSameStreet: true,
        })

        setComps(streetComps)

        // Get enhanced walkability score
        const walkScore = await walkabilityService.getWalkabilityScore(
          address,
          neighborhoodScope
        )
        setWalkabilityScore(walkScore)

        // Get school zone data
        const schools = HENDERSON_SCHOOL_DATA[neighborhood] || []
        setSchoolZones(schools)

        // Get market trends
        const trends = await streetCompsService.getLocalMarketTrends(neighborhoodScope)

        setMarketTrends(trends)

        // Get advanced market intelligence
        const pricing = await marketIntelligenceService.getMicroMarketPricing(
          address,
          neighborhoodScope
        )
        setMicroMarketPricing(pricing)

        const trends2 = await marketIntelligenceService.getPredictiveTrends(
          address,
          neighborhoodScope
        )
        setPredictiveTrends(trends2)
      } catch (err) {
        setError('Failed to load street comps')
        console.error('Error loading street comps:', err)
      } finally {
        setLoading(false)
      }
    }

    if (address && neighborhood) {
      loadStreetComps()
    }
  }, [address, neighborhood])

  if (loading) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4" />
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="h-4 bg-gray-200 rounded w-4/6" />
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div
        className={`bg-red-50 border border-red-200 rounded-lg p-6 ${className}`}
      >
        <div className="text-red-800">
          <h3 className="font-semibold mb-2">Unable to Load Street Comps</h3>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    )
  }

  const avgPrice =
    comps.length > 0
      ? comps.reduce((sum, comp) => sum + comp.salePrice, 0) / comps.length
      : 0

  const avgPricePerSqft =
    comps.length > 0
      ? comps.reduce((sum, comp) => sum + comp.salePrice / comp.sqft, 0) /
        comps.length
      : 0

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Street-Level Market Analysis
        </h3>
        <p className="text-gray-600 text-sm">
          Recent sales within 500m of {address} •{' '}
          {neighborhood.replace(/([A-Z])/g, ' $1')}
        </p>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{comps.length}</div>
          <div className="text-xs text-gray-600">Recent Sales</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">
            ${(avgPrice / 1000).toFixed(0)}K
          </div>
          <div className="text-xs text-gray-600">Avg Sale Price</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">
            ${avgPricePerSqft.toFixed(0)}
          </div>
          <div className="text-xs text-gray-600">Price/Sq Ft</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600">
            {walkabilityScore?.overall || 0}
          </div>
          <div className="text-xs text-gray-600">Walk Score</div>
        </div>
      </div>

      {/* Micro-Market Pricing Analysis */}
      {microMarketPricing && (
        <div className="bg-purple-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-purple-900 mb-3">
            Micro-Market Pricing Analysis
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded p-3">
              <div className="font-medium text-purple-700 mb-2">
                Block Level (500m)
              </div>
              <div className="space-y-1 text-xs">
                <div>
                  Avg Price: $
                  {microMarketPricing.blockLevel.averagePrice.toLocaleString()}
                </div>
                <div>
                  Price/Sq Ft: ${microMarketPricing.blockLevel.pricePerSqft}
                </div>
                <div>
                  Variation: {microMarketPricing.blockLevel.priceVariation}%
                </div>
                <div>Comps: {microMarketPricing.blockLevel.compCount}</div>
              </div>
            </div>
            <div className="bg-white rounded p-3">
              <div className="font-medium text-purple-700 mb-2">
                Street Level
              </div>
              <div className="space-y-1 text-xs">
                <div>
                  Avg Price: $
                  {microMarketPricing.streetLevel.averagePrice.toLocaleString()}
                </div>
                <div>
                  Price/Sq Ft: ${microMarketPricing.streetLevel.pricePerSqft}
                </div>
                <div>
                  Street Premium: +
                  {microMarketPricing.streetLevel.streetPremium}%
                </div>
                <div>Comps: {microMarketPricing.streetLevel.compCount}</div>
              </div>
            </div>
            <div className="bg-white rounded p-3">
              <div className="font-medium text-purple-700 mb-2">
                Neighborhood
              </div>
              <div className="space-y-1 text-xs">
                <div>
                  Trend:{' '}
                  <span
                    className={`font-medium ${
                      microMarketPricing.neighborhoodLevel.marketTrend ===
                      'rising'
                        ? 'text-green-600'
                        : microMarketPricing.neighborhoodLevel.marketTrend ===
                            'declining'
                          ? 'text-red-600'
                          : 'text-blue-600'
                    }`}
                  >
                    {microMarketPricing.neighborhoodLevel.marketTrend}
                  </span>
                </div>
                <div>
                  Days on Market:{' '}
                  {microMarketPricing.neighborhoodLevel.daysOnMarket}
                </div>
                <div>
                  Inventory:{' '}
                  <span
                    className={`font-medium ${
                      microMarketPricing.neighborhoodLevel.inventoryLevel ===
                      'low'
                        ? 'text-red-600'
                        : microMarketPricing.neighborhoodLevel
                              .inventoryLevel === 'high'
                          ? 'text-green-600'
                          : 'text-yellow-600'
                    }`}
                  >
                    {microMarketPricing.neighborhoodLevel.inventoryLevel}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Seasonal Adjustments */}
          <div className="mt-3 pt-3 border-t border-purple-200">
            <div className="text-xs text-purple-800">
              <div className="font-medium mb-2">Seasonal Adjustments:</div>
              <div className="grid grid-cols-4 gap-2">
                <div className="text-center">
                  <div className="font-medium">Spring</div>
                  <div
                    className={
                      microMarketPricing.seasonalAdjustments.spring > 0
                        ? 'text-green-600'
                        : 'text-gray-600'
                    }
                  >
                    {microMarketPricing.seasonalAdjustments.spring > 0
                      ? '+'
                      : ''}
                    {microMarketPricing.seasonalAdjustments.spring}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-medium">Summer</div>
                  <div
                    className={
                      microMarketPricing.seasonalAdjustments.summer > 0
                        ? 'text-green-600'
                        : 'text-gray-600'
                    }
                  >
                    {microMarketPricing.seasonalAdjustments.summer > 0
                      ? '+'
                      : ''}
                    {microMarketPricing.seasonalAdjustments.summer}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-medium">Fall</div>
                  <div
                    className={
                      microMarketPricing.seasonalAdjustments.fall > 0
                        ? 'text-green-600'
                        : 'text-gray-600'
                    }
                  >
                    {microMarketPricing.seasonalAdjustments.fall > 0 ? '+' : ''}
                    {microMarketPricing.seasonalAdjustments.fall}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-medium">Winter</div>
                  <div
                    className={
                      microMarketPricing.seasonalAdjustments.winter > 0
                        ? 'text-green-600'
                        : 'text-red-600'
                    }
                  >
                    {microMarketPricing.seasonalAdjustments.winter > 0
                      ? '+'
                      : ''}
                    {microMarketPricing.seasonalAdjustments.winter}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Predictive Market Trends */}
      {predictiveTrends && (
        <div className="bg-indigo-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-indigo-900 mb-3">
            Predictive Market Trends (ML-Powered)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded p-3">
              <div className="font-medium text-indigo-700 mb-2">
                Short Term (30-90 days)
              </div>
              <div className="space-y-1 text-xs">
                <div>
                  30 days: +{predictiveTrends.shortTerm.next30Days.priceChange}%
                  ({predictiveTrends.shortTerm.next30Days.confidence}%
                  confidence)
                </div>
                <div>
                  90 days: +{predictiveTrends.shortTerm.next90Days.priceChange}%
                  ({predictiveTrends.shortTerm.next90Days.confidence}%
                  confidence)
                </div>
              </div>
            </div>
            <div className="bg-white rounded p-3">
              <div className="font-medium text-indigo-700 mb-2">
                Medium Term (6-12 months)
              </div>
              <div className="space-y-1 text-xs">
                <div>
                  6 months: +
                  {predictiveTrends.mediumTerm.next6Months.priceChange}% (
                  {predictiveTrends.mediumTerm.next6Months.confidence}%
                  confidence)
                </div>
                <div>
                  12 months: +
                  {predictiveTrends.mediumTerm.next12Months.priceChange}% (
                  {predictiveTrends.mediumTerm.next12Months.confidence}%
                  confidence)
                </div>
                <div>
                  Market:{' '}
                  <span
                    className={`font-medium ${
                      predictiveTrends.mediumTerm.next12Months
                        .marketConditions === 'seller'
                        ? 'text-red-600'
                        : predictiveTrends.mediumTerm.next12Months
                              .marketConditions === 'buyer'
                          ? 'text-green-600'
                          : 'text-blue-600'
                    }`}
                  >
                    {predictiveTrends.mediumTerm.next12Months.marketConditions}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded p-3">
              <div className="font-medium text-indigo-700 mb-2">
                Long Term (2 years)
              </div>
              <div className="space-y-1 text-xs">
                <div>
                  2 years: +{predictiveTrends.longTerm.next2Years.priceChange}%
                  ({predictiveTrends.longTerm.next2Years.confidence}%
                  confidence)
                </div>
                <div>
                  Expected Return:{' '}
                  {predictiveTrends.opportunities.expectedReturn}%
                </div>
                <div>
                  Timing:{' '}
                  <span className="font-medium text-indigo-600">
                    {predictiveTrends.opportunities.timing}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Factors */}
          <div className="mt-3 pt-3 border-t border-indigo-200">
            <div className="text-xs text-indigo-800">
              <div className="font-medium mb-2">Key Market Factors:</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <div className="font-medium text-red-600">High Risk:</div>
                  <div className="text-xs">
                    {predictiveTrends.riskFactors.high.slice(0, 2).join(', ')}
                  </div>
                </div>
                <div>
                  <div className="font-medium text-green-600">
                    Opportunities:
                  </div>
                  <div className="text-xs">
                    {predictiveTrends.opportunities.strategy
                      .slice(0, 2)
                      .join(', ')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Walkability Score */}
      {walkabilityScore && (
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-blue-900 mb-3">
            Advanced Walkability Analysis
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <div className="bg-white rounded p-2">
              <div className="font-medium text-blue-700">Shopping</div>
              <div className="text-xs text-gray-600">
                {walkabilityScore.categories.shopping.score}/40 •{' '}
                {walkabilityScore.categories.shopping.distance}m
              </div>
            </div>
            <div className="bg-white rounded p-2">
              <div className="font-medium text-green-700">Dining</div>
              <div className="text-xs text-gray-600">
                {walkabilityScore.categories.dining.score}/30 •{' '}
                {walkabilityScore.categories.dining.distance}m
              </div>
            </div>
            <div className="bg-white rounded p-2">
              <div className="font-medium text-purple-700">Parks</div>
              <div className="text-xs text-gray-600">
                {walkabilityScore.categories.parks.score}/20 •{' '}
                {walkabilityScore.categories.parks.distance}m
              </div>
            </div>
            <div className="bg-white rounded p-2">
              <div className="font-medium text-orange-700">Schools</div>
              <div className="text-xs text-gray-600">
                {walkabilityScore.categories.schools.score}/100 •{' '}
                {walkabilityScore.categories.schools.distance}m
              </div>
            </div>
            <div className="bg-white rounded p-2">
              <div className="font-medium text-red-700">Transit</div>
              <div className="text-xs text-gray-600">
                {walkabilityScore.categories.transit.score}/100 •{' '}
                {walkabilityScore.categories.transit.distance}m
              </div>
            </div>
            <div className="bg-white rounded p-2">
              <div className="font-medium text-indigo-700">Healthcare</div>
              <div className="text-xs text-gray-600">
                {walkabilityScore.categories.healthcare.score}/10 •{' '}
                {walkabilityScore.categories.healthcare.distance}m
              </div>
            </div>
          </div>

          {/* Walkability Insights */}
          <div className="mt-3 pt-3 border-t border-blue-200">
            <div className="text-xs text-blue-800">
              <div className="font-medium mb-1">Key Insights:</div>
              {walkabilityScore.insights.slice(0, 2).map((insight) => (
                <div
                  key={`insight-${insight.slice(0, 20)}`}
                  className="flex items-start"
                >
                  <span className="text-blue-600 mr-1">•</span>
                  <span>{insight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* School Zone Information */}
      {schoolZones.length > 0 && (
        <div className="bg-green-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-green-900 mb-3">
            School Zone Analysis
          </h4>
          <div className="space-y-3">
            {schoolZones.map((school) => (
              <div
                key={`school-${school.name}`}
                className="bg-white rounded p-3"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-green-800">
                      {school.name}
                    </div>
                    <div className="text-xs text-gray-600">
                      {school.type} • {school.district} • Rating:{' '}
                      {school.rating}/10
                    </div>
                    <div className="text-xs text-gray-500">
                      {school.specialPrograms.slice(0, 2).join(', ')}
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <div className="font-medium text-green-700">
                      {school.walkTime} min walk
                    </div>
                    <div className="text-gray-500">
                      {school.driveTime} min drive
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Market Trends */}
      {marketTrends && (
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-blue-900 mb-2">
            Local Market Trends
          </h4>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-blue-700">Price/Sq Ft:</span>
              <span className="ml-2 font-medium">
                ${marketTrends.pricePerSqft}
              </span>
            </div>
            <div>
              <span className="text-blue-700">Days on Market:</span>
              <span className="ml-2 font-medium">
                {marketTrends.daysOnMarket}
              </span>
            </div>
            <div>
              <span className="text-blue-700">Price Change:</span>
              <span
                className={`ml-2 font-medium ${marketTrends.priceChange >= 0 ? 'text-green-600' : 'text-red-600'}`}
              >
                {marketTrends.priceChange >= 0 ? '+' : ''}
                {marketTrends.priceChange}%
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Street Comps */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">
          Recent Sales Nearby
        </h4>
        {comps.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No recent sales found in this area.
          </p>
        ) : (
          <div className="space-y-3">
            {comps.map((comp) => (
              <div
                key={comp.id}
                className="border border-gray-200 rounded-lg p-3"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-gray-900">
                      {comp.address}
                    </div>
                    <div className="text-sm text-gray-600">
                      {comp.bedrooms} bed, {comp.bathrooms} bath •{' '}
                      {comp.sqft.toLocaleString()} sq ft
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">
                      ${comp.salePrice.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      {comp.distance}m away •{' '}
                      {new Date(comp.saleDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Local Insights */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">Local Insights</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="font-medium text-gray-900 mb-1">Walkability</div>
            <div className="text-gray-600">
              {walkabilityScore?.overall || 0 >= 80
                ? 'Excellent'
                : walkabilityScore?.overall || 0 >= 60
                  ? 'Good'
                  : walkabilityScore?.overall || 0 >= 40
                    ? 'Fair'
                    : 'Poor'}{' '}
              walking access to amenities
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="font-medium text-gray-900 mb-1">
              Market Activity
            </div>
            <div className="text-gray-600">
              {comps.length} recent sales indicate{' '}
              {comps.length >= 3 ? 'active' : 'moderate'} market activity
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
