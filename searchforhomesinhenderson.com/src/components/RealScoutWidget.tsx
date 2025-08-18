'use client'

import { useEffect, useState } from 'react'

interface RealScoutWidgetProps {
  agentEncodedId?: string
  sortOrder?: string
  listingStatus?: string
  propertyTypes?: string
  priceMin?: number
  priceMax?: number
}

export function RealScoutWidget({
  agentEncodedId = 'QWdlbnQtMjI1MDUw',
  sortOrder = 'STATUS_AND_SIGNIFICANT_CHANGE',
  listingStatus = 'For Sale',
  propertyTypes = 'SFR,MF',
  priceMin = 500000,
  priceMax = 750000,
}: RealScoutWidgetProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src*="realscout-web-components"]'
    )
    
    if (existingScript) {
      setIsLoaded(true)
      return
    }

    const script = document.createElement('script')
    script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'
    script.type = 'module'
    script.async = true

    script.onload = () => {
      setIsLoaded(true)
      setError(null)
    }

    script.onerror = () => {
      setError('Failed to load RealScout widget')
      setIsLoaded(false)
    }

    document.head.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-6">
        <p className="text-red-800 font-medium">Failed to load property listings</p>
        <p className="text-red-600 text-sm mt-2">
          Please try refreshing the page or contact support if the problem persists.
        </p>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center rounded-lg border bg-gray-50 p-12">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
          <p className="text-sm text-gray-600">Loading property listings...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div
        dangerouslySetInnerHTML={{
          __html: `<realscout-office-listings
            agent-encoded-id="${agentEncodedId}"
            sort-order="${sortOrder}"
            listing-status="${listingStatus}"
            property-types="${propertyTypes}"
            price-min="${priceMin.toString()}"
            price-max="${priceMax.toString()}"
          ></realscout-office-listings>`
        }}
      />
    </div>
  )
}
