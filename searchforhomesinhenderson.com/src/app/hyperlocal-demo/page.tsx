import type { Metadata } from 'next'
import StreetCompsWidget from '@/components/hyperlocal/StreetCompsWidget'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Hyperlocal Real Estate Demo | Henderson Homes',
  description:
    'Experience the future of hyperlocal real estate with AI-powered market intelligence, street-level comps, and predictive analytics.',
}

export default function HyperlocalDemoPage() {
  return (
    <>
      {/* RealScout Widget Script and Styles */}
      <Script 
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js" 
        type="module"
        strategy="beforeInteractive"
      />
      <style jsx global>{`
        realscout-office-listings {
          --rs-listing-divider-color: rgb(101, 141, 172);
          --rs-listing-background-color: #ffffff;
          --rs-listing-border-radius: 12px;
          --rs-listing-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --rs-listing-padding: 20px;
          --rs-listing-margin: 16px 0;
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          background: #ffffff;
        }
        
        realscout-office-listings::part(listing-item) {
          border-radius: 8px;
          margin-bottom: 16px;
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        
        realscout-office-listings::part(listing-item):hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
      `}</style>
      
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
                  <h3 className="text-lg font-semibold text-blue-800">
                    Henderson Market
                  </h3>
                  <span className="text-2xl">📈</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Avg. Price:</span>
                    <span className="font-semibold text-blue-800">
                      $485,000
                    </span>
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
                  <h3 className="text-lg font-semibold text-green-800">
                    Green Valley
                  </h3>
                  <span className="text-2xl">🏘️</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-green-700">Avg. Price:</span>
                    <span className="font-semibold text-green-800">
                      $520,000
                    </span>
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
                  <h3 className="text-lg font-semibold text-purple-800">
                    Anthem
                  </h3>
                  <span className="text-2xl">🌄</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-purple-700">Avg. Price:</span>
                    <span className="font-semibold text-purple-800">
                      $480,000
                    </span>
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

            {/* Live RealScout Listings */}
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
                🏠 Live Henderson Property Listings
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Browse real-time listings from our MLS database. These are actual properties currently for sale in Henderson.
              </p>
              <div className="max-w-6xl mx-auto space-y-8">
                {/* Primary Listings - Mid-range homes */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                    Mid-Range Homes ($500k - $750k)
                  </h4>
                  <realscout-office-listings 
                    agent-encoded-id="QWdlbnQtMjI1MDUw" 
                    sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
                    listing-status="For Sale" 
                    property-types="SFR,MF" 
                    price-min="500000" 
                    price-max="750000"
                  />
                </div>
                
                {/* Secondary Listings - Higher-end homes */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                    Premium Homes ($750k+)
                  </h4>
                  <realscout-office-listings 
                    agent-encoded-id="QWdlbnQtMjI1MDUw" 
                    sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
                    listing-status="For Sale" 
                    property-types="SFR,MF" 
                    price-min="750000" 
                    price-max="2000000"
                  />
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
                  <h4 className="text-lg font-semibold mb-4">
                    Current Market Conditions
                  </h4>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Inventory levels: 23% below average</li>
                    <li>• Price appreciation: +8.5% year-over-year</li>
                    <li>• Days on market: 23 (down from 45 last year)</li>
                    <li>• Buyer demand: Strong in all price ranges</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">
                    Neighborhood Highlights
                  </h4>
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

      {/* Why Choose Henderson Homes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Henderson Homes?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Local Expertise
                </h3>
                <p className="text-gray-600">
                  Deep knowledge of Henderson neighborhoods, schools, and market trends. 
                  We know every street and can guide you to the perfect location.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">
                  Advanced Technology
                </h3>
                <p className="text-gray-600">
                  Access to real-time market data, property valuations, and neighborhood insights. 
                  Make informed decisions with the latest information.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-purple-600">
                  Personalized Service
                </h3>
                <p className="text-gray-600">
                  Dedicated support throughout your home-buying journey. 
                  From first search to closing, we're here for you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of families who've found their perfect home in Henderson with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/search" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Start Your Search
              </a>
              <a 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                Get Expert Help
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
