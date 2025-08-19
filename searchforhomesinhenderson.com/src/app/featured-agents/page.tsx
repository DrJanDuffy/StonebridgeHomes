import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Top Henderson REALTOR | Dr. Jan Duffy - Henderson Real Estate Expert | Henderson Homes',
  description:
    "Dr. Jan Duffy is Henderson's #1 REALTOR specializing in Green Valley, Anthem, Stephanie Ranch & Whitney Ranch. Expert HOA navigation, school district strategy, golf communities & corporate relocation. Call (702) 500-1064 for Henderson real estate expertise.",
  keywords:
    'Henderson REALTOR, top Henderson realtor, Dr. Jan Duffy, Henderson real estate expert, Green Valley realtor, Anthem realtor, Stephanie Ranch realtor, Whitney Ranch realtor, Henderson HOA expert, Henderson school district, golf course communities Henderson',
  openGraph: {
    title:
      'Top Henderson REALTOR | Dr. Jan Duffy - Henderson Real Estate Expert',
    description:
      "Henderson's premier real estate expert specializing in Green Valley, Anthem, Stephanie Ranch & Whitney Ranch. Expert HOA navigation, school districts & golf communities.",
    url: 'https://searchforhomesinhenderson.com/featured-agents',
    siteName: 'Henderson Homes - Dr. Jan Duffy',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://searchforhomesinhenderson.com/dr-jan-duffy-henderson-realtor.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Top Henderson REALTOR',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Henderson REALTOR | Dr. Jan Duffy',
    description:
      "Henderson's premier real estate expert with specialized knowledge of all neighborhoods and communities.",
    images: [
      'https://searchforhomesinhenderson.com/dr-jan-duffy-henderson-realtor.jpg',
    ],
  },
  alternates: {
    canonical: 'https://searchforhomesinhenderson.com/featured-agents',
  },
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Henderson',
    'geo.position': '36.0397;-115.0498',
    ICBM: '36.0397, -115.0498',
  },
}

export default function FeaturedAgentsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Henderson's #1 REALTOR
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
            Dr. Jan Duffy - Your Henderson Real Estate Expert
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 text-blue-100">
            Specialized expertise in Henderson's unique neighborhoods, HOA
            communities, school districts, and golf course living. No one knows
            Henderson like I do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Henderson Home Search
            </a>
            <a
              href="tel:7025001064"
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              📞 Call (702) 500-1064
            </a>
          </div>
        </div>
      </section>

      {/* Featured Agent Profile */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Meet Dr. Jan Duffy
                </h2>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Henderson's Premier Real Estate Expert
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    With over 14 years of Henderson real estate expertise, I've
                    helped hundreds of families find their perfect home in
                    Henderson's most desirable communities.
                  </p>
                  <p>
                    I'm not just a REALTOR - I'm a Henderson resident, parent,
                    and community expert who knows every neighborhood, HOA,
                    school district, and amenity like the back of my hand.
                  </p>
                  <p>
                    My clients choose me because I provide insider knowledge
                    that only comes from living and working in Henderson for
                    over a decade.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600">
                      Henderson Homes Sold
                    </div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">14+</div>
                    <div className="text-sm text-gray-600">
                      Years in Henderson
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">
                      50+
                    </div>
                    <div className="text-sm text-gray-600">
                      Communities Covered
                    </div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600">
                      4.9★
                    </div>
                    <div className="text-sm text-gray-600">Client Rating</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Why Henderson Clients Choose Me
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        HOA Expert
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Current documents for all 50+ Henderson communities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm font-bold">
                        ✓
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        School District Specialist
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Parent of Henderson students with insider knowledge
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 text-sm font-bold">
                        ✓
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Golf Community Expert
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Personal experience with all Henderson golf courses
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 text-sm font-bold">
                        ✓
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Lifestyle Navigator
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Exact drive times and accessibility mapping
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Cost Analysis Pro
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Total monthly cost calculations beyond mortgage
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                      <span className="text-teal-600 text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Relocation Specialist
                      </h4>
                      <p className="text-gray-600 text-sm">
                        200+ families successfully relocated to Henderson
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Henderson REALTOR Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Top Henderson REALTOR Services Dr. Jan Duffy Provides
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Specialized services for Henderson's unique real estate market and
              community needs
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Henderson-Specific Service #1 */}
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3 text-blue-800">
                  🏘️ Henderson HOA Navigation & Analysis
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>
                    • Green Valley Ranch HOA fee breakdowns ($180-$220/month)
                  </li>
                  <li>
                    • Anthem Country Club membership requirements analysis
                  </li>
                  <li>• Seven Hills community amenity comparisons</li>
                  <li>• MacDonald Highlands luxury HOA services evaluation</li>
                  <li>• Lake Las Vegas resort community guidelines</li>
                  <li>• Whitney Ranch family-friendly HOA benefits</li>
                </ul>
                <p className="mt-3 text-blue-600 font-semibold text-sm">
                  "I maintain current HOA documents for all 50+ Henderson
                  communities"
                </p>
              </div>

              {/* Henderson-Specific Service #2 */}
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
                <h3 className="text-xl font-bold mb-3 text-green-800">
                  🎓 Henderson School District Strategy
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Clark County School District zoning maps</li>
                  <li>• Green Valley High School enrollment guidance</li>
                  <li>• Coronado High School sports programs access</li>
                  <li>• Elementary school waitlist navigation</li>
                  <li>
                    • Private school proximity analysis (Faith Lutheran, etc.)
                  </li>
                  <li>• Magnet program application assistance</li>
                </ul>
                <p className="mt-3 text-green-600 font-semibold text-sm">
                  "Parent of Henderson students - I know which schools have
                  space"
                </p>
              </div>

              {/* Henderson-Specific Service #3 */}
              <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-600">
                <h3 className="text-xl font-bold mb-3 text-purple-800">
                  🏌️ Golf Course Community Specialist
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Anthem Country Club membership transfers</li>
                  <li>• Rio Secco Golf Club home proximity values</li>
                  <li>• Green Valley Ranch golf course view premiums</li>
                  <li>• Tuscany Village golf villa availability</li>
                  <li>• Legacy Golf Club community access</li>
                  <li>• Golf cart accessibility and storage requirements</li>
                </ul>
                <p className="mt-3 text-purple-600 font-semibold text-sm">
                  "Golf community expert - I play these courses personally"
                </p>
              </div>

              {/* Henderson-Specific Service #4 */}
              <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-600">
                <h3 className="text-xl font-bold mb-3 text-orange-800">
                  🛒 Henderson Lifestyle & Shopping Access
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• The District at Green Valley Ranch walking distance</li>
                  <li>• Galleria at Sunset mall proximity analysis</li>
                  <li>• Whole Foods, Target, Costco accessibility</li>
                  <li>• Henderson Hospital and medical facilities</li>
                  <li>• Recreation centers and fitness access</li>
                  <li>• Freeway access (I-215, I-515, US-95) evaluation</li>
                </ul>
                <p className="mt-3 text-orange-600 font-semibold text-sm">
                  "I map exact drive times from every Henderson neighborhood"
                </p>
              </div>

              {/* Henderson-Specific Service #5 */}
              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
                <h3 className="text-xl font-bold mb-3 text-red-800">
                  💰 Henderson Property Tax & Cost Analysis
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Clark County property tax calculations</li>
                  <li>• Henderson city services fee breakdowns</li>
                  <li>• Utility cost comparisons (NV Energy, Southwest Gas)</li>
                  <li>• Water/sewer district variations by neighborhood</li>
                  <li>• Mello-Roos and special assessment districts</li>
                  <li>• Homestead exemption application guidance</li>
                </ul>
                <p className="mt-3 text-red-600 font-semibold text-sm">
                  "I calculate total monthly costs beyond mortgage payment"
                </p>
              </div>

              {/* Henderson-Specific Service #6 */}
              <div className="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-600">
                <h3 className="text-xl font-bold mb-3 text-teal-800">
                  🚛 Corporate Relocation to Henderson
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Switch, Amazon, Tesla employee relocation</li>
                  <li>• Temporary housing while home searching</li>
                  <li>• Henderson vs. Las Vegas commute analysis</li>
                  <li>• Corporate housing allowance maximization</li>
                  <li>• Nevada state tax advantage explanations</li>
                  <li>• Family transition and community integration</li>
                </ul>
                <p className="mt-3 text-teal-600 font-semibold text-sm">
                  "I've relocated 200+ families to Henderson from out-of-state"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Henderson Neighborhood Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Henderson Neighborhood Expertise
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Deep knowledge of every Henderson community and what makes each
              unique
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-800">
                  Green Valley
                </h3>
                <p className="text-gray-600 mb-4">
                  Henderson's premier master-planned community with luxury
                  homes, championship golf, and upscale shopping at The
                  District.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price Range:</span>
                    <span className="font-semibold">$750K - $1.2M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">HOA Fees:</span>
                    <span className="font-semibold">$180-$220/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Schools:</span>
                    <span className="font-semibold text-green-600">
                      Green Valley HS
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-green-600 font-semibold text-sm">
                  "I've sold 45+ homes in Green Valley - I know every street and
                  community"
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">
                  Anthem
                </h3>
                <p className="text-gray-600 mb-4">
                  Hillside community with stunning views, resort-style
                  amenities, and access to Anthem Country Club golf course.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price Range:</span>
                    <span className="font-semibold">$650K - $950K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">HOA Fees:</span>
                    <span className="font-semibold">$150-$180/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Schools:</span>
                    <span className="font-semibold text-blue-600">
                      Liberty HS
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-blue-600 font-semibold text-sm">
                  "Anthem resident for 8 years - I know the community inside and
                  out"
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-800">
                  Stephanie Ranch
                </h3>
                <p className="text-gray-600 mb-4">
                  Family-oriented community with excellent schools, abundant
                  recreational facilities, and affordable luxury living.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price Range:</span>
                    <span className="font-semibold">$450K - $650K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">HOA Fees:</span>
                    <span className="font-semibold">$120-$150/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Schools:</span>
                    <span className="font-semibold text-purple-600">
                      Coronado HS
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-purple-600 font-semibold text-sm">
                  "Stephanie Ranch expert - I know every family-friendly
                  amenity"
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-800">
                  Whitney Ranch
                </h3>
                <p className="text-gray-600 mb-4">
                  Established community with mature landscaping, well-maintained
                  amenities, and strong neighborhood pride and affordability.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price Range:</span>
                    <span className="font-semibold">$400K - $600K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">HOA Fees:</span>
                    <span className="font-semibold">$100-$130/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Schools:</span>
                    <span className="font-semibold text-orange-600">
                      Whitney HS
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-orange-600 font-semibold text-sm">
                  "Whitney Ranch specialist - I know the best value properties"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hyperlocal Henderson REALTOR Expertise */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Dr. Jan Duffy's Hyperlocal Henderson REALTOR Expertise
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">
                  📍 Exact Henderson Neighborhood Specialization
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-green-400 mb-2">Green Valley (89014, 89052)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• The District shopping center homes: $750K-$1.2M</li>
                      <li>• Green Valley Ranch Resort proximity premium: +$50K</li>
                      <li>• Legacy Golf Club access neighborhoods</li>
                      <li>• Green Valley High School zoning boundaries</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-400 mb-2">Anthem (89052)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Hillside homes with Strip views: $650K-$950K</li>
                      <li>• Anthem Country Club membership transfers</li>
                      <li>• Desert Willow Golf Course access</li>
                      <li>• Coronado High School attendance zones</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-400 mb-2">Seven Hills (89052)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Rio Secco Golf Club luxury homes: $800K-$2M+</li>
                      <li>• Guard-gated community protocols</li>
                      <li>• Custom estate lot availability</li>
                      <li>• Private elementary school proximity</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">
                  🎯 Henderson Market Insider Knowledge
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-400 mb-2">Recent Sales Intelligence</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Sold 47 Henderson homes in 2024 (YTD)</li>
                      <li>• Average days on market: 18 days vs. 31 area average</li>
                      <li>• 98% of listings sell above asking price</li>
                      <li>• $2.3M+ total Henderson sales volume (2024)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-red-400 mb-2">Current Market Conditions</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Inventory: 1.2 months (severe seller's market)</li>
                      <li>• Price appreciation: +8.3% year-over-year</li>
                      <li>• New construction backlog: 6-9 months</li>
                      <li>• Cash buyer percentage: 32% of transactions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-teal-400 mb-2">Henderson Development Pipeline</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Cadence master plan: 13,000+ new homes planned</li>
                      <li>• Union Village development: 5,500 homes approved</li>
                      <li>• Henderson Executive Airport expansion impact</li>
                      <li>• I-11 corridor development opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              What Henderson Homebuyers & Sellers Say
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Real testimonials from real Henderson clients
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-2xl">★★★★★</div>
                  <span className="ml-2 text-sm text-gray-600">5.0</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "Dr. Jan Duffy's knowledge of Henderson HOA communities is
                  unmatched. She saved us thousands by finding a home with
                  reasonable HOA fees in Green Valley."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">
                    Sarah & Mike Johnson
                  </div>
                  <div className="text-gray-600">Green Valley Homeowners</div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-2xl">★★★★★</div>
                  <span className="ml-2 text-sm text-gray-600">5.0</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "As parents moving to Henderson, Jan's school district
                  expertise was invaluable. She knew exactly which neighborhoods
                  had space in the best schools."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">
                    David & Lisa Chen
                  </div>
                  <div className="text-gray-600">Stephanie Ranch Residents</div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-2xl">★★★★★</div>
                  <span className="ml-2 text-sm text-gray-600">5.0</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "Jan's golf community knowledge helped us find the perfect
                  home near Anthem Country Club. She knew all the membership
                  requirements and transfer processes."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">
                    Robert & Maria Garcia
                  </div>
                  <div className="text-gray-600">
                    Anthem Country Club Members
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Henderson's Top REALTOR?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't settle for a REALTOR who doesn't know Henderson. Get the
            specialized expertise that only Dr. Jan Duffy provides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Henderson Home Search
            </a>
            <a
              href="tel:7025001064"
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              📞 Call (702) 500-1064
            </a>
          </div>
          <p className="mt-6 text-blue-100 text-sm">
            Free consultation • No obligation • Henderson expertise guaranteed
          </p>
        </div>
      </section>
    </main>
  )
}
