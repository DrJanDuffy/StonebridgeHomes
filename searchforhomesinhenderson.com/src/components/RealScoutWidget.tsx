'use client'

import type React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'agent-encoded-id'?: string
          'sort-order'?: string
          'listing-status'?: string
          'property-types'?: string
          'price-min'?: string
          'price-max'?: string
        },
        HTMLElement
      >
    }
  }
}

interface RealScoutWidgetProps {
  readonly agentEncodedId?: string
  readonly sortOrder?: string
  readonly listingStatus?: string
  readonly propertyTypes?: string
  readonly priceMin?: number
  readonly priceMax?: number
  readonly className?: string
  readonly title?: string
  readonly description?: string
}

export function RealScoutWidget({
  agentEncodedId = process.env.NEXT_PUBLIC_RESCOUT_AGENT_ID,
  sortOrder = 'STATUS_AND_SIGNIFICANT_CHANGE',
  listingStatus = 'For Sale',
  propertyTypes = 'SFR,MF',
  priceMin = 500000,
  priceMax = 750000,
  className = '',
  title,
  description,
}: RealScoutWidgetProps) {
  if (!agentEncodedId) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4">
        <p className="text-red-600">Error: RealScout Agent ID not configured</p>
      </div>
    )
  }

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">{title}</h2>
          {description && <p className="text-gray-600">{description}</p>}
        </div>
      )}
      <realscout-office-listings
        agent-encoded-id={agentEncodedId}
        sort-order={sortOrder}
        listing-status={listingStatus}
        property-types={propertyTypes}
        price-min={priceMin.toString()}
        price-max={priceMax.toString()}
      />
    </div>
  )
}
