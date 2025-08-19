import type { Metadata } from 'next'
import { RealScoutWidget } from '@/components/RealScoutWidget'

export const metadata: Metadata = {
  title: 'Find Your Dream Home in Henderson, Nevada | Premier Real Estate',
  description:
    "Discover exceptional properties in Henderson's premier residential communities. Expert local guidance and comprehensive market knowledge. Top-rated schools and master-planned living.",
  keywords:
    'Henderson Nevada homes, real estate Henderson NV, homes for sale Henderson, Green Valley homes, Anthem community, Henderson real estate agent',
  openGraph: {
    title: 'Find Your Dream Home in Henderson, Nevada',
    description: "Premier real estate in Henderson's best communities",
    url: 'https://searchforhomesinhenderson.com',
    siteName: 'Search for Homes in Henderson',
    type: 'website',
  },
  alternates: {
    canonical: 'https://searchforhomesinhenderson.com',
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with H1 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Find Your Dream Home in{' '}
            <span className="text-white font-extrabold drop-shadow-lg">
              Henderson, Nevada
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto mb-8">
            Discover exceptional properties in Henderson's premier residential
            communities. Your perfect home awaits with our expert local guidance
            and comprehensive market knowledge.
          </p>
          <div className="text-center">
            <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
          </div>
        </div>
      </section>

      {/* Why Henderson Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Henderson is Nevada's Premier Community
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Award-Winning City
              </h3>
              <p className="text-gray-600">
                Consistently ranked among America's safest and most livable
                cities with excellent municipal services.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Top-Rated Schools
              </h3>
              <p className="text-gray-600">
                Access to Clark County's highest-performing schools with
                excellent student-teacher ratios.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Master-Planned Living
              </h3>
              <p className="text-gray-600">
                Beautiful communities with golf courses, parks, and resort-style
                amenities throughout the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Featured Henderson Properties
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore our carefully curated selection of homes in Henderson's most
            desirable neighborhoods including Green Valley, Anthem, and
            Stephanie Ranch.
          </p>

          <RealScoutWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR,MF"
            priceMin={500000}
            priceMax={750000}
            className="rounded-lg shadow-lg"
            title="Current Listings in Henderson"
            description="Browse available properties with detailed information and photos"
          />
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Explore Henderson Neighborhoods
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Green Valley
              </h3>
              <p className="text-gray-600 mb-2">
                Luxury master-planned community with championship golf and
                upscale shopping
              </p>
              <p className="text-sm font-semibold text-green-600">
                $750K - $1.2M
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Anthem
              </h3>
              <p className="text-gray-600 mb-2">
                Hillside community with stunning views and resort-style
                amenities
              </p>
              <p className="text-sm font-semibold text-blue-600">
                $650K - $950K
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Stephanie Ranch
              </h3>
              <p className="text-gray-600 mb-2">
                Family-friendly with excellent schools and recreational
                facilities
              </p>
              <p className="text-sm font-semibold text-purple-600">
                $450K - $650K
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Whitney Ranch
              </h3>
              <p className="text-gray-600 mb-2">
                Established community with mature landscaping and affordability
              </p>
              <p className="text-sm font-semibold text-orange-600">
                $400K - $600K
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Comprehensive Real Estate Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
            From finding your first home to building an investment portfolio,
            our Henderson experts provide full-service real estate solutions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                🏠 Home Buying
              </h3>
              <p className="text-gray-600">
                Expert buyer representation with market analysis, negotiation,
                and closing support
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                💰 Home Selling
              </h3>
              <p className="text-gray-600">
                Professional marketing, staging consultation, and pricing
                strategy for maximum value
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                📊 Market Analysis
              </h3>
              <p className="text-gray-600">
                Comprehensive property valuations and Henderson market trend
                reports
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                🏢 Investment Properties
              </h3>
              <p className="text-gray-600">
                Rental property analysis and investment strategy consultation
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                🚛 Relocation Services
              </h3>
              <p className="text-gray-600">
                Complete assistance for families moving to Henderson from other
                states
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                🔍 Property Search
              </h3>
              <p className="text-gray-600">
                Custom searches with advanced filtering and automated listing
                alerts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                What's the average home price in Henderson?
              </h3>
              <p className="text-gray-600">
                Henderson home prices range from $400K in Whitney Ranch to
                $1.2M+ in Green Valley, with most homes between $500K-$800K.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Which Henderson neighborhood is best for families?
              </h3>
              <p className="text-gray-600">
                Stephanie Ranch and Whitney Ranch offer excellent schools,
                family amenities, and more affordable pricing for growing
                families.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Need Immediate Assistance?
              </h3>
              <p className="text-gray-700 mb-4">
                Our Henderson real estate experts are available to answer your questions and provide personalized guidance.
              </p>
              <div className="flex items-center space-x-3 text-lg">
                <span className="text-blue-600">📞</span>
                <a href="tel:7025001064" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                  (702) 500-1064
                </a>
              </div>
              <div className="mt-4">
                <a
                  href="http://drjanduffy.realscout.com/onboarding"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Started Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
              Visit Our Henderson Office
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Henderson Homes Office
                  </h3>
                  <address className="text-gray-600 text-lg not-italic mb-4">
                    2470 Paseo Verde Parkway
                    <br />
                    Suite 135
                    <br />
                    Henderson, NV 89074
                  </address>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <strong>Hours:</strong> Mon-Fri: 9AM-6PM | Sat: 10AM-4PM
                    </p>
                    <p>
                      <strong>Phone:</strong> (702) 500-1064
                    </p>
                    <p>
                      <strong>Email:</strong> info@hendersonhomes.com
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">
                    Why Visit Our Office?
                  </h4>
                  <ul className="text-left text-gray-700 space-y-2">
                    <li>• Meet our expert team in person</li>
                    <li>• View current listings on large displays</li>
                    <li>• Get immediate market analysis</li>
                    <li>• Discuss your real estate goals</li>
                  </ul>
                </div>
              </div>
            </div>
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Schedule an Appointment
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Henderson Home?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our local experts are here to guide you through every step of your
            real estate journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Expert Help
            </a>
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Home Value
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
