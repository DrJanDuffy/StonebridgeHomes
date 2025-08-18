import type { Metadata } from 'next'
import { RealScoutWidget } from '@/components/RealScoutWidget'

export const metadata: Metadata = {
  title: 'Advanced Property Search - Find Homes in Henderson, Nevada',
  description: 'Use our advanced search tools to find the perfect home in Henderson, NV. Filter by price, bedrooms, bathrooms, property type, and neighborhood to discover your ideal property.',
  keywords: ['Henderson property search', 'Nevada home search', 'advanced real estate search', 'Henderson homes for sale', 'property finder Henderson'],
  openGraph: {
    title: 'Advanced Property Search - Henderson Homes',
    description: 'Find your perfect home in Henderson with our advanced search tools',
    url: 'https://searchforhomesinhenderson.com/search',
  },
  alternates: {
    canonical: 'https://searchforhomesinhenderson.com/search',
  },
}

export default function AdvancedSearchPage() {
  return (
    <>
      <style jsx global>{`
        :root {
          --rs-primary-color: #2563eb;
          --rs-secondary-color: #1e40af;
          --rs-accent-color: #3b82f6;
          --rs-text-color: #1f2937;
          --rs-border-color: #e5e7eb;
          --rs-background-color: #ffffff;
        }
      `}</style>
      
      <div className="container mx-auto px-4 py-8">
        {/* SEO-Optimized Header Structure */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Advanced Property Search in Henderson, Nevada
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Discover your dream home with our comprehensive search tools. Filter through hundreds of 
            properties in Henderson's most desirable neighborhoods with precision and ease.
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
                Search by price range, bedrooms, bathrooms, square footage, lot size, and property type
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Real-Time Updates
              </h3>
              <p className="text-gray-600">
                Access the latest MLS listings with real-time price changes and availability
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Neighborhood Insights
              </h3>
              <p className="text-gray-600">
                Explore Henderson communities with school ratings, amenities, and local market data
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
              propertyTypes="SFR,MF,CON,TWH"
              priceMin={300000}
              priceMax={2000000}
              className="w-full"
            />
          </div>
        </section>

        {/* Henderson Neighborhoods Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Popular Henderson Neighborhoods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Green Valley</h3>
              <p className="text-gray-600 text-sm">Luxury homes, top-rated schools, upscale shopping</p>
            </div>
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Anthem</h3>
              <p className="text-gray-600 text-sm">Master-planned community with golf courses</p>
            </div>
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Stephanie Ranch</h3>
              <p className="text-gray-600 text-sm">Family-friendly with parks and recreation</p>
            </div>
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Whitney Ranch</h3>
              <p className="text-gray-600 text-sm">Affordable homes with community amenities</p>
            </div>
          </div>
        </section>

        {/* Search Tips */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Henderson Home Search Tips
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Best Time to Search
                </h3>
                <p className="text-gray-600 mb-4">
                  Spring and fall offer the most inventory, while winter may provide better pricing opportunities.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  School Districts
                </h3>
                <p className="text-gray-600">
                  Henderson is served by Clark County School District with highly-rated elementary, middle, and high schools.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Market Insights
                </h3>
                <p className="text-gray-600 mb-4">
                  Henderson's median home price ranges from $400K-$800K depending on neighborhood and property type.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Getting Pre-Approved
                </h3>
                <p className="text-gray-600">
                  Secure financing pre-approval to strengthen your offers in Henderson's competitive market.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
