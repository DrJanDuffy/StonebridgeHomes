import { RealScoutWidget } from '@/components/RealScoutWidget'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Your Dream Home in{' '}
              <span className="text-blue-600">Henderson</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover exceptional properties in Henderson, Nevada&apos;s premier residential community. 
              Your perfect home awaits with our expert guidance and comprehensive market knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Browse Listings
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Expert Help
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="h-12 w-12 text-blue-600 mx-auto mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
              <p className="text-gray-600">Access to Henderson&apos;s most sought-after neighborhoods.</p>
            </div>
            <div className="text-center p-6">
              <div className="h-12 w-12 text-blue-600 mx-auto mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
              <p className="text-gray-600">Real-time market data and trends for informed decisions.</p>
            </div>
            <div className="text-center p-6">
              <div className="h-12 w-12 text-blue-600 mx-auto mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Expert Service</h3>
              <p className="text-gray-600">Dedicated support throughout your home journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated selection of premium homes in Henderson&apos;s most desirable neighborhoods.
            </p>
          </div>
          
          <RealScoutWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR,MF"
            priceMin={500000}
            priceMax={750000}
          />
        </div>
      </section>
    </div>
  )
}
