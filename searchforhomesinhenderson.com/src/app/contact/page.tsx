import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Henderson Homes - Real Estate Experts in Nevada',
  description: 'Contact our Henderson real estate team for buying, selling, or property valuation services. Local experts helping you navigate the Nevada housing market.',
  keywords: ['contact Henderson realtor', 'Nevada real estate agent', 'Henderson home buying', 'real estate consultation'],
  openGraph: {
    title: 'Contact Henderson Homes - Real Estate Experts',
    description: 'Get in touch with Henderson\'s premier real estate team',
    url: 'https://searchforhomesinhenderson.com/contact',
  },
  alternates: {
    canonical: 'https://searchforhomesinhenderson.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Contact Henderson Homes
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ready to find your dream home in Henderson? Our local experts are here to guide you 
          through every step of your real estate journey.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Get Started Today
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input 
                type="email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input 
                type="tel" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                I'm Interested In *
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Select an option</option>
                <option value="buying">Buying a Home</option>
                <option value="selling">Selling a Home</option>
                <option value="valuation">Home Valuation</option>
                <option value="investing">Investment Properties</option>
                <option value="consultation">Market Consultation</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea 
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your real estate goals..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="text-blue-600 mr-4">📞</div>
                <div>
                  <div className="font-semibold text-gray-900">Phone</div>
                  <div className="text-gray-600">(702) 555-HOMES</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-blue-600 mr-4">✉️</div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">info@hendersonhomes.com</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-blue-600 mr-4">📍</div>
                <div>
                  <div className="font-semibold text-gray-900">Office</div>
                  <div className="text-gray-600">123 Green Valley Pkwy<br />Henderson, NV 89052</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-blue-600 mr-4">🕒</div>
                <div>
                  <div className="font-semibold text-gray-900">Hours</div>
                  <div className="text-gray-600">
                    Mon-Fri: 8AM-7PM<br />
                    Sat-Sun: 9AM-5PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Why Choose Henderson Homes?
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>✓ 15+ years of Henderson market expertise</li>
              <li>✓ Top 1% of Nevada real estate agents</li>
              <li>✓ 500+ successful transactions</li>
              <li>✓ Comprehensive market analysis</li>
              <li>✓ Professional photography & marketing</li>
              <li>✓ Negotiation expertise</li>
              <li>✓ Local neighborhood specialists</li>
              <li>✓ Available 7 days a week</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
