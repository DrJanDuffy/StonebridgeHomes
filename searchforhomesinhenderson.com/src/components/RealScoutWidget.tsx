"use client"

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
  agentEncodedId?: string
  sortOrder?: string
  listingStatus?: string
  propertyTypes?: string
  priceMin?: number
  priceMax?: number
  className?: string
  title?: string
  description?: string
}

export function RealScoutWidget({
  agentEncodedId = process.env.NEXT_PUBLIC_RESCOUT_AGENT_ID!,
  sortOrder = "STATUS_AND_SIGNIFICANT_CHANGE",
  listingStatus = "For Sale",
  propertyTypes = "SFR,MF",
  priceMin = 500000,
  priceMax = 750000,
  className = "",
  title,
  description
}: RealScoutWidgetProps) {
  return (
    <div className={`w-full ${className}`}>
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
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
