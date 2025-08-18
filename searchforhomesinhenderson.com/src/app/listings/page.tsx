import { RealScoutWidget } from '@/components/RealScoutWidget'

export default function ListingsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Property Listings</h1>
        <p className="text-gray-600 text-lg">
          Browse all available properties in Henderson, Nevada
        </p>
      </div>

      <RealScoutWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
        listingStatus="For Sale"
        propertyTypes="SFR,MF"
        priceMin={400000}
        priceMax={1000000}
      />
    </div>
  )
}
