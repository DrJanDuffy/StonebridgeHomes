import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Henderson Nevada Neighborhoods Guide - Best Communities & Areas',
  description:
    'Explore Henderson NV neighborhoods including Green Valley, Anthem, Stephanie Ranch, and Whitney Ranch. Find the perfect community with schools, amenities, and home prices.',
  keywords: [
    'Henderson neighborhoods',
    'Green Valley Henderson',
    'Anthem community',
    'Henderson communities',
    'best neighborhoods Henderson Nevada',
  ],
  openGraph: {
    title: 'Henderson Nevada Neighborhoods Guide',
    description:
      'Discover the best neighborhoods and communities in Henderson, Nevada',
    url: 'https://searchforhomesinhenderson.com/neighborhoods',
  },
  alternates: {
    canonical: 'https://searchforhomesinhenderson.com/neighborhoods',
  },
}

export default function NeighborhoodsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Henderson Nevada Neighborhoods
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Discover Henderson's premier communities, each offering unique
          amenities, top-rated schools, and distinctive lifestyle opportunities.
        </p>
      </header>

      {/* Featured Neighborhoods */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">
          Premier Henderson Communities
        </h2>

        <div className="space-y-12">
          {/* Green Valley */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Green Valley
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-4">
                    Henderson's premier master-planned community featuring
                    luxury homes, championship golf courses, and upscale
                    shopping at The District.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price Range:</span>
                      <span className="font-semibold">$750K - $1.2M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Home Types:</span>
                      <span className="font-semibold">
                        Single Family, Golf Course
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">School Rating:</span>
                      <span className="font-semibold text-green-600">8/10</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Community Features:
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Anthem Country Club & Golf Course</li>
                    <li>• Community Center with fitness facilities</li>
                    <li>• Multiple parks and playgrounds</li>
                    <li>• Tennis courts and sports fields</li>
                    <li>• Mountain hiking trails</li>
                    <li>• Family-friendly events year-round</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Stephanie Ranch */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stephanie Ranch
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-4">
                    Family-oriented community featuring affordable homes,
                    excellent schools, and abundant recreational facilities
                    perfect for growing families.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price Range:</span>
                      <span className="font-semibold">$450K - $650K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Home Types:</span>
                      <span className="font-semibold">
                        Single Family, Townhomes
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">School Rating:</span>
                      <span className="font-semibold text-green-600">8/10</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Community Features:
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Whitney Mesa Recreation Area</li>
                    <li>• Multiple community parks</li>
                    <li>• Youth sports leagues</li>
                    <li>• Shopping at The Galleries</li>
                    <li>• Easy freeway access</li>
                    <li>• Strong HOA community</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Whitney Ranch */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Whitney Ranch
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-4">
                    Established community offering affordable homes with mature
                    landscaping, well-maintained amenities, and strong
                    neighborhood pride.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price Range:</span>
                      <span className="font-semibold">$400K - $600K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Home Types:</span>
                      <span className="font-semibold">
                        Single Family, Condos
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">School Rating:</span>
                      <span className="font-semibold text-blue-600">7/10</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Community Features:
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Whitney Mesa Recreation Center</li>
                    <li>• Community pools and spas</li>
                    <li>• Tennis and basketball courts</li>
                    <li>• Mature trees and landscaping</li>
                    <li>• Close to shopping centers</li>
                    <li>• Affordable HOA fees</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle & Amenities */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">
          Henderson Lifestyle & Amenities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              📚 Education Excellence
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Henderson is served by Clark County School District with
              top-performing schools.
            </p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Green Valley High School</li>
              <li>• Coronado High School</li>
              <li>• Liberty High School</li>
              <li>• Multiple A-rated elementaries</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              🏌️ Recreation & Golf
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              World-class golf courses and recreation facilities throughout
              Henderson.
            </p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Legacy Golf Club</li>
              <li>• DragonRidge Country Club</li>
              <li>• Anthem Country Club</li>
              <li>• Lake Las Vegas Resort</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              🛍️ Shopping & Dining
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Premier shopping destinations and diverse dining options.
            </p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• The District at Green Valley</li>
              <li>• Galleria at Sunset</li>
              <li>• The Village at Lake Las Vegas</li>
              <li>• Sunset Station Casino</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Moving to Henderson Guide */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Moving to Henderson? Here's What You Need to Know
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Why Families Choose Henderson
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Consistently ranked as one of America's safest cities</li>
              <li>• Master-planned communities with HOA maintenance</li>
              <li>• 15 minutes from Las Vegas Strip entertainment</li>
              <li>• 300+ days of sunshine annually</li>
              <li>• Growing job market in healthcare and technology</li>
              <li>• Excellent municipal services and infrastructure</li>
              <li>• Family-friendly events and festivals year-round</li>
              <li>• Access to Red Rock Canyon and Lake Mead</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Henderson vs. Las Vegas Living
            </h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded border-l-4 border-green-500">
                <strong className="text-gray-900">Safety:</strong>
                <span className="text-gray-600">
                  {' '}
                  Henderson consistently ranks safer than Las Vegas with lower
                  crime rates
                </span>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                <strong className="text-gray-900">Schools:</strong>
                <span className="text-gray-600">
                  {' '}
                  Higher-rated schools with better student-teacher ratios
                </span>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                <strong className="text-gray-900">Community:</strong>
                <span className="text-gray-600">
                  {' '}
                  More suburban feel with planned communities and family
                  amenities
                </span>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-yellow-500">
                <strong className="text-gray-900">Convenience:</strong>
                <span className="text-gray-600">
                  {' '}
                  Close enough to enjoy Vegas entertainment without the urban
                  congestion
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
