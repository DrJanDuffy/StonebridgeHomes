import type { Metadata } from 'next'
import StreetCompsWidget from '@/components/hyperlocal/StreetCompsWidget'

export const metadata: Metadata = {
  title: 'Hyperlocal Real Estate Demo | Henderson Homes',
  description:
    'Experience the future of hyperlocal real estate with AI-powered market intelligence, street-level comps, and predictive analytics.',
}

export default function HyperlocalDemoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hyperlocal Real Estate Stack
            </h1>
            <p className="text-xl mb-8">
              AI-powered market intelligence • Street-level comps • Predictive
              analytics • Real-time data
            </p>
            <div className="grid md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">P0-P3</div>
                <div className="text-sm">Complete</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">P4</div>
                <div className="text-sm">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">AI</div>
                <div className="text-sm">Active</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Henderson</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Market Intelligence Demo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Henderson Market Intelligence
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Experience our advanced real estate technology with live market
                data, neighborhood insights, and property valuations for
                Henderson, Nevada.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">
                🏠 Interactive Property Search
              </h3>
              <p className="text-blue-700 mb-6">
                Use our advanced search tools to find your perfect home in
                Henderson. Get real-time market data, neighborhood insights, and
                property valuations.
              </p>
              <a
                href="/search"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Your Search
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Get Personalized Assistance
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-center text-gray-600 mb-6">
                Ready to find your dream home in Henderson? Our expert team is
                here to help.
              </p>
              <a
                href="/contact"
                className="block w-full text-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Market Intelligence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Interactive Market Intelligence
            </h2>
            
            {/* Market Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-blue-800">Henderson Market</h3>
                  <span className="text-2xl">📈</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Avg. Price:</span>
                    <span className="font-semibold text-blue-800">$485,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Days on Market:</span>
                    <span className="font-semibold text-blue-800">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Inventory:</span>
                    <span className="font-semibold text-blue-800">156</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-green-800">Green Valley</h3>
                  <span className="text-2xl">🏘️</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-green-700">Avg. Price:</span>
                    <span className="font-semibold text-green-800">$520,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Price/Sq Ft:</span>
                    <span className="font-semibold text-green-800">$245</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Schools:</span>
                    <span className="font-semibold text-green-800">9.2/10</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-purple-800">Anthem</h3>
                  <span className="text-2xl">🌄</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-purple-700">Avg. Price:</span>
                    <span className="font-semibold text-purple-800">$480,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-700">Price/Sq Ft:</span>
                    <span className="font-semibold text-purple-800">$230</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-700">Amenities:</span>
                    <span className="font-semibold text-purple-800">High</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Search Demo */}
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
                🏠 Find Your Perfect Home
              </h3>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label htmlFor="price-range" className="block text-sm font-medium text-gray-700 mb-2">
                      Price Range
                    </label>
                    <select 
                      id="price-range"
                      name="price-range"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      aria-label="Select price range"
                    >
                      <option value="300-500">$300k - $500k</option>
                      <option value="500-750">$500k - $750k</option>
                      <option value="750-1000">$750k - $1M</option>
                      <option value="1000+">$1M+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-2">
                      Bedrooms
                    </label>
                    <select 
                      id="bedrooms"
                      name="bedrooms"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      aria-label="Select number of bedrooms"
                    >
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="5">5+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700 mb-2">
                      Neighborhood
                    </label>
                    <select 
                      id="neighborhood"
                      name="neighborhood"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      aria-label="Select neighborhood"
                    >
                      <option value="all">All Areas</option>
                      <option value="green-valley">Green Valley</option>
                      <option value="anthem">Anthem</option>
                      <option value="seven-hills">Seven Hills</option>
                      <option value="whitney-ranch">Whitney Ranch</option>
                    </select>
                  </div>
                </div>
                <div className="text-center">
                  <button 
                    type="button"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Search Properties
                  </button>
                </div>
              </div>
            </div>

            {/* Live Street Comps */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
                📊 Live Street-Level Comps
              </h3>
              <p className="text-center text-gray-600 mb-8">
                See real-time comparable sales in your target neighborhoods
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <StreetCompsWidget
                address="123 Green Valley Parkway"
                neighborhood="greenValley"
                className="h-full"
              />
              <StreetCompsWidget
                address="456 Anthem Hills Drive"
                neighborhood="anthem"
                className="h-full"
              />
            </div>

            {/* Market Trends */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center mb-6">
                📈 Market Trends & Insights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Current Market Conditions</h4>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Inventory levels: 23% below average</li>
                    <li>• Price appreciation: +8.5% year-over-year</li>
                    <li>• Days on market: 23 (down from 45 last year)</li>
                    <li>• Buyer demand: Strong in all price ranges</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Neighborhood Highlights</h4>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Green Valley: Premium location, top schools</li>
                    <li>• Anthem: Family-friendly, great amenities</li>
                    <li>• Seven Hills: Luxury homes, golf course access</li>
                    <li>• Whitney Ranch: Value, growing community</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Frontend
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Next.js 14 with App Router</li>
                  <li>• React 18 with TypeScript</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• Biome for linting/formatting</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-green-600">
                  Backend
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Follow Up Boss API integration</li>
                  <li>• Real-time market data</li>
                  <li>• AI-powered analytics</li>
                  <li>• Cloudflare Workers</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">
                  AI/ML
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Lead scoring algorithms</li>
                  <li>• Predictive analytics</li>
                  <li>• Client behavior analysis</li>
                  <li>• Automated recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Status */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Integration Status
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center border">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-semibold mb-2">P0-P3 Complete</h3>
                <p className="text-sm text-gray-600">
                  Street-level comps, local knowledge, market intelligence, FUB
                  API
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center border">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="font-semibold mb-2">AI Intelligence</h3>
                <p className="text-sm text-gray-600">
                  Client scoring, predictive analytics, automated
                  recommendations
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center border">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold mb-2">Automation</h3>
                <p className="text-sm text-gray-600">
                  Smart follow-ups, personalized content, multi-channel
                  integration
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center border">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold mb-2">Next Phase</h3>
                <p className="text-sm text-gray-600">
                  Mobile app, advanced ML models, enterprise features
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Next steps: Deploy AI models to production and integrate with
                CRM systems
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">
                <span className="text-sm font-medium">
                  Priority: P4 • Complexity: O(n²) • Status: 95% Complete
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
