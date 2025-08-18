import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Henderson Home Value Estimator - What is My Home Worth?',
  description: 'Get an instant home value estimate for your Henderson, Nevada property. Free online valuation tool with local market data and recent comparable sales.',
  keywords: ['Henderson home value', 'home worth Henderson', 'property value Nevada', 'home valuation Henderson', 'real estate appraisal'],
  openGraph: {
    title: 'Henderson Home Value Estimator - Free Property Valuation',
    description: 'Discover what your Henderson home is worth with our instant valuation tool',
    url: 'https://searchforhomesinhenderson.com/home-value',
  },
  alternates: {
    canonical: 'https://searchforhomesinhenderson.com/home-value',
  },
}

export default function HomeValuePage() {
  return (
    <>
      <style jsx global>{`
        :root {
          --rs-primary-color: #059669;
          --rs-secondary-color: #047857;
          --rs-accent-color: #10b981;
          --rs-text-color: #1f2937;
          --rs-border-color: #d1d5db;
          --rs-background-color: #f9fafb;
        }
      `}</style>
      
      <div className="container mx-auto px-4 py-8">
        {/* SEO-Optimized Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Henderson Home Value Estimator
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Discover your property's current market value with our comprehensive home valuation tool. 
            Get instant estimates based on recent sales, market trends, and neighborhood data.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            ✓ Free • Instant • Accurate Market Data
          </div>
        </header>

        {/* Value Factors Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Factors Affecting Your Henderson Home Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Property Features
              </h3>
              <p className="text-gray-600 text-sm">
                Square footage, bedrooms, bathrooms, lot size, and unique amenities
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Location & Neighborhood
              </h3>
              <p className="text-gray-600 text-sm">
                School districts, proximity to amenities, neighborhood desirability
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Market Conditions
              </h3>
              <p className="text-gray-600 text-sm">
                Current inventory, buyer demand, interest rates, seasonal trends
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Property Condition
              </h3>
              <p className="text-gray-600 text-sm">
                Age, updates, maintenance, curb appeal, energy efficiency
              </p>
            </div>
          </div>
        </section>

        {/* Home Value Calculator CTA */}
        <section className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Get Your Free Home Valuation
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Our advanced algorithm analyzes recent sales, market trends, and property characteristics 
              to provide an accurate estimate of your Henderson home's value.
            </p>
            <div className="bg-white rounded-lg p-6 max-w-md mx-auto shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Enter Your Address
              </h3>
              <input 
                type="text" 
                placeholder="123 Main St, Henderson, NV"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Get My Home Value
              </button>
              <p className="text-xs text-gray-500 mt-2">
                No registration required • Instant results
              </p>
            </div>
          </div>
        </section>

        {/* Henderson Market Insights */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Henderson Real Estate Market Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Current Market Trends
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Median Home Price</span>
                  <span className="font-semibold text-green-600">$625,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price per Sq Ft</span>
                  <span className="font-semibold">$285</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">YoY Price Change</span>
                  <span className="font-semibold text-green-600">+5.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Days on Market</span>
                  <span className="font-semibold">28 days</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Henderson Neighborhoods
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Green Valley</span>
                  <span className="font-semibold">$750K-$1.2M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Anthem</span>
                  <span className="font-semibold">$650K-$950K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Stephanie Ranch</span>
                  <span className="font-semibold">$450K-$650K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Whitney Ranch</span>
                  <span className="font-semibold">$400K-$600K</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Why Choose Henderson?
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Top-rated school districts</li>
                <li>• Family-friendly communities</li>
                <li>• Close to Las Vegas amenities</li>
                <li>• Year-round outdoor activities</li>
                <li>• Growing job market</li>
                <li>• Safe neighborhoods</li>
                <li>• Master-planned communities</li>
                <li>• Excellent healthcare facilities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Professional Appraisal CTA */}
        <section className="bg-gray-50 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Need a Professional Appraisal?
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              While our online estimator provides a great starting point, a professional appraisal 
              offers the most accurate valuation for selling, refinancing, or insurance purposes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  When You Need a Professional Appraisal:
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Selling your home</li>
                  <li>• Refinancing your mortgage</li>
                  <li>• Removing PMI insurance</li>
                  <li>• Estate planning</li>
                  <li>• Divorce proceedings</li>
                  <li>• Tax assessments</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Our Professional Services:
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Licensed appraisers</li>
                  <li>• Comprehensive market analysis</li>
                  <li>• Detailed property inspection</li>
                  <li>• Fast turnaround times</li>
                  <li>• Lender-approved reports</li>
                  <li>• Expert consultation</li>
                </ul>
              </div>
            </div>
            <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule Professional Appraisal
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
