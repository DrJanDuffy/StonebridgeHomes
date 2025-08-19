import type { Metadata } from 'next'
import { RealScoutWidget } from '@/components/RealScoutWidget'

export const metadata: Metadata = {
  title: 'Advanced Property Search - Find Homes in Henderson, Nevada',
  description:
    'Use our advanced search tools to find the perfect home in Henderson, NV. Filter by price, bedrooms, bathrooms, property type, and neighborhood to discover your ideal property.',
  keywords: [
    'Henderson property search',
    'Nevada home search',
    'advanced real estate search',
    'Henderson homes for sale',
    'property finder Henderson',
  ],
  openGraph: {
    title: 'Advanced Property Search - Henderson Homes',
    description:
      'Find your perfect home in Henderson with our advanced search tools',
    url: 'https://searchforhomesinhenderson.com/search',
  },
  alternates: {
    canonical: 'https://searchforhomesinhenderson.com/search',
  },
}

export default function AdvancedSearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* SEO-Optimized Header Structure */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Advanced Property Search in Henderson, Nevada
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
          Discover your dream home with our comprehensive search tools. Filter
          through hundreds of properties in Henderson's most desirable
          neighborhoods with precision and ease.
        </p>
        <div className="text-sm text-gray-500">
          Search • Filter • Compare • Find Your Perfect Home
        </div>
      </header>

      {/* Search Benefits Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          Why Use Our Advanced Search?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Precise Filtering
            </h3>
            <p className="text-gray-600">
              Search by price range, bedrooms, bathrooms, square footage, lot
              size, and property type
            </p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Real-Time Updates
            </h3>
            <p className="text-gray-600">
              Access the latest MLS listings with real-time price changes and
              availability
            </p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Neighborhood Insights
            </h3>
            <p className="text-gray-600">
              Explore Henderson communities with school ratings, amenities, and
              local market data
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Search Widget */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          Search Henderson Properties
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <RealScoutWidget
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR,MF,CONDO"
            priceMin={300000}
            priceMax={1000000}
            className="w-full"
            title="Advanced Property Search"
            description="Use our comprehensive search tools to find your perfect Henderson home"
          />
        </div>
      </section>

      {/* Search Tips Section */}
      <section className="mb-12 bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          Expert Search Tips for Henderson
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Start Broad, Then Narrow
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Begin with your preferred neighborhoods</li>
              <li>• Set a realistic price range first</li>
              <li>• Add specific features gradually</li>
              <li>• Save searches for future reference</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Consider Market Timing
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Spring and fall typically have more inventory</li>
              <li>• New listings appear on Thursdays</li>
              <li>• Price reductions often happen on Mondays</li>
              <li>• Set up alerts for new properties</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Neighborhood Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          Popular Henderson Neighborhoods
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Green Valley
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Luxury master-planned community with golf courses and shopping
            </p>
            <p className="text-sm font-semibold text-green-600">
              $750K - $1.2M
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Anthem</h3>
            <p className="text-sm text-gray-600 mb-3">
              Hillside community with stunning views and amenities
            </p>
            <p className="text-sm font-semibold text-blue-600">$650K - $950K</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Stephanie Ranch
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Family-friendly with excellent schools
            </p>
            <p className="text-sm font-semibold text-purple-600">
              $450K - $650K
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Whitney Ranch
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Established community with mature landscaping
            </p>
            <p className="text-sm font-semibold text-orange-600">
              $400K - $600K
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Need Help Finding Your Perfect Home?
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Our Henderson real estate experts are here to help you navigate the
          market and find the home that's right for you and your family.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Expert Help
          </a>
          <a
            href="/home-value"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-colors"
          >
            Get Home Value
          </a>
        </div>
      </section>
    </div>
  )
}
