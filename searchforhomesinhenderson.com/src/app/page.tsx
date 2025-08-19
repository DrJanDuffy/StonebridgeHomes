import type { Metadata } from 'next'
import { RealScoutWidget } from '@/components/RealScoutWidget'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Henderson Homes - Find Your Dream Home in Henderson, Nevada',
  description:
    'Discover exceptional homes in Henderson, Nevada with our expert real estate services. Browse luxury properties, get home valuations, and explore premier neighborhoods.',
  keywords: [
    'Henderson homes',
    'Nevada real estate',
    'Henderson properties',
    'luxury homes Henderson',
    'homes for sale Henderson',
  ],
  openGraph: {
    title: 'Henderson Homes - Premier Real Estate in Henderson, Nevada',
    description: 'Find your dream home in Henderson with expert local guidance',
    url: 'https://searchforhomesinhenderson.com',
  },
  alternates: {
    canonical: 'https://searchforhomesinhenderson.com',
  },
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section with SEO Structure */}
      <header className="text-center py-12 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Find Your Dream Home in{' '}
          <span className="text-blue-600">Henderson, Nevada</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover exceptional properties in Henderson's premier residential
          communities. Your perfect home awaits with our expert local guidance
          and comprehensive market knowledge.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Browse Henderson Listings
          </Button>
          <Button variant="outline" size="lg">
            Get Expert Consultation
          </Button>
        </div>
      </header>

      {/* Why Choose Henderson Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Why Henderson is Nevada's Premier Community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-4">Award-Winning City</h3>
            <p className="text-gray-600">
              Consistently ranked among America's safest and most livable cities
              with excellent municipal services.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-4">Top-Rated Schools</h3>
            <p className="text-gray-600">
              Access to Clark County's highest-performing schools with excellent
              student-teacher ratios.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold mb-4">
              Master-Planned Living
            </h3>
            <p className="text-gray-600">
              Beautiful communities with golf courses, parks, and resort-style
              amenities throughout the city.
            </p>
          </div>
        </div>
      </section>

      {/* Property Listings Section */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Henderson Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of homes in Henderson's most
            desirable neighborhoods including Green Valley, Anthem, and
            Stephanie Ranch.
          </p>
        </div>

        <RealScoutWidget
          agentEncodedId={process.env.NEXT_PUBLIC_RESCOUT_AGENT_ID}
          sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
          listingStatus="For Sale"
          propertyTypes="SFR,MF"
          priceMin={500000}
          priceMax={750000}
          className="rounded-lg shadow-lg"
          title="Current Listings in Henderson"
          description="Browse available properties with detailed information and photos"
        />
      </section>

      {/* Henderson Neighborhoods Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Explore Henderson Neighborhoods
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Green Valley
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Luxury master-planned community with championship golf and upscale
              shopping
            </p>
            <p className="text-sm font-semibold text-green-600">
              $750K - $1.2M
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Anthem</h3>
            <p className="text-gray-600 text-sm mb-3">
              Hillside community with stunning views and resort-style amenities
            </p>
            <p className="text-sm font-semibold text-blue-600">$650K - $950K</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Stephanie Ranch
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Family-friendly with excellent schools and recreational facilities
            </p>
            <p className="text-sm font-semibold text-purple-600">
              $450K - $650K
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Whitney Ranch
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Established community with mature landscaping and affordability
            </p>
            <p className="text-sm font-semibold text-orange-600">
              $400K - $600K
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Real Estate Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From finding your first home to building an investment portfolio,
            our Henderson experts provide full-service real estate solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">🏠 Home Buying</h3>
            <p className="text-gray-600 text-sm">
              Expert buyer representation with market analysis, negotiation, and
              closing support
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">💰 Home Selling</h3>
            <p className="text-gray-600 text-sm">
              Professional marketing, staging consultation, and pricing strategy
              for maximum value
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">📊 Market Analysis</h3>
            <p className="text-gray-600 text-sm">
              Comprehensive property valuations and Henderson market trend
              reports
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              🏢 Investment Properties
            </h3>
            <p className="text-gray-600 text-sm">
              Rental property analysis and investment strategy consultation
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              🚛 Relocation Services
            </h3>
            <p className="text-gray-600 text-sm">
              Complete assistance for families moving to Henderson from other
              states
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">🔍 Property Search</h3>
            <p className="text-gray-600 text-sm">
              Custom searches with advanced filtering and automated listing
              alerts
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
