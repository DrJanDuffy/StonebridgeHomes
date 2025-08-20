import type { Metadata } from 'next'
import StreetCompsWidget from '@/components/hyperlocal/StreetCompsWidget'
import FUBIntegrationDemo from '@/components/hyperlocal/FUBIntegrationDemo'

export const metadata: Metadata = {
  title: 'Hyperlocal Real Estate Demo | Henderson Homes',
  description:
    'Experience our hyperlocal real estate technology with street-level market analysis, walkability scores, and local insights.',
  keywords:
    'hyperlocal real estate, Henderson market analysis, street-level comps, walkability scores',
}

export default function HyperlocalDemoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hyperlocal Real Estate Technology
            </h1>
            <p className="text-xl mb-8">
              Street-level market analysis • 500m radius precision • Local
              insights powered by 15+ years Henderson experience
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">500m</div>
                <div className="text-sm opacity-90">Precision Radius</div>
              </div>
              <div>
                <div className="text-3xl font-bold">&lt;100ms</div>
                <div className="text-sm opacity-90">Load Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold">7 Days</div>
                <div className="text-sm opacity-90">Cache TTL</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUB API Integration Demo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Follow Up Boss API Integration
            </h2>
            <div className="max-w-4xl mx-auto">
              <FUBIntegrationDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Demo Widgets */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Street-Level Market Analysis Demo
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Green Valley Demo */}
              <StreetCompsWidget
                address="123 Green Valley Parkway"
                neighborhood="greenValley"
                className="h-fit"
              />

              {/* Anthem Demo */}
              <StreetCompsWidget
                address="456 Anthem Hills Drive"
                neighborhood="anthem"
                className="h-fit"
              />
            </div>

            {/* Additional Demo Widgets */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
              <StreetCompsWidget
                address="789 Seven Hills Blvd"
                neighborhood="sevenHills"
                className="h-fit"
              />

              <StreetCompsWidget
                address="321 Whitney Ranch Way"
                neighborhood="whitneyRanch"
                className="h-fit"
              />

              <StreetCompsWidget
                address="654 Stephanie Ranch Rd"
                neighborhood="stephanieRanch"
                className="h-fit"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Hyperlocal Technology Stack
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Core Features
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    Street-level market comps (500m radius)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    Walkability scores & local amenities
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    Real-time market trends & pricing
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    Offline-capable with 7-day cache
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">
                  Performance Targets
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                    Initial load: &lt;100ms for 0.5mi² area
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                    Local search: &lt;50ms (client-side)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                    FUB sync: Incremental, &lt;500ms
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                    Geocoding precision: &lt;50m accuracy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Status */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Integration Status
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-semibold mb-2">Type System</h3>
                <p className="text-sm text-gray-600">
                  Core interfaces and type definitions
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-semibold mb-2">Data Service</h3>
                <p className="text-sm text-gray-600">
                  Hyperlocal data management & caching
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-semibold mb-2">FUB Integration</h3>
                <p className="text-sm text-gray-600">
                  Follow Up Boss API connected
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="font-semibold mb-2">ML Models</h3>
                <p className="text-sm text-gray-600">
                  Predictive analytics training
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Next steps: Train ML models on Henderson market data for
                predictive insights
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">
                <span className="text-sm font-medium">
                  Priority: P3 • Complexity: O(n) • Status: 85% Complete
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
