import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Find Your Dream Home in Henderson, Nevada | Premier Real Estate',
    template: '%s | Henderson Homes',
  },
  description:
    "Discover exceptional properties in Henderson's premier residential communities. Expert local guidance and comprehensive market knowledge. Top-rated schools and master-planned living.",
  keywords:
    'Henderson Nevada homes, real estate Henderson NV, homes for sale Henderson, Green Valley homes, Anthem community, Henderson real estate agent',
  authors: [{ name: 'Henderson Homes Team' }],
  creator: 'Henderson Homes',
  publisher: 'Henderson Homes',
  robots: 'index, follow',
  metadataBase: new URL('https://searchforhomesinhenderson.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://searchforhomesinhenderson.com',
    siteName: 'Search for Homes in Henderson',
    title: 'Find Your Dream Home in Henderson, Nevada',
    description: "Premier real estate in Henderson's best communities",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henderson Homes - Premier Real Estate',
    description: 'Find your dream home in Henderson, Nevada',
  },
  alternates: {
    canonical: 'https://searchforhomesinhenderson.com',
  },
}

const realEstateSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': 'https://searchforhomesinhenderson.com/#realestateagent',
  name: 'Dr. Jan Duffy - Henderson Homes',
  alternateName: 'Henderson Homes',
  url: 'https://searchforhomesinhenderson.com',
  logo: 'https://searchforhomesinhenderson.com/logo.png',
  image: 'https://searchforhomesinhenderson.com/agent-photo.jpg',
  description:
    'Premier real estate services in Henderson, Nevada specializing in Green Valley, Anthem, Stephanie Ranch, and Whitney Ranch communities. Expert guidance from Dr. Jan Duffy.',
  founder: {
    '@type': 'Person',
    name: 'Dr. Jan Duffy',
    jobTitle: 'Real Estate Agent',
    telephone: '(702) 500-1064',
    email: 'info@hendersonhomes.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2470 Paseo Verde Parkway, Suite 135',
      addressLocality: 'Henderson',
      addressRegion: 'Nevada',
      addressCountry: 'US',
      postalCode: '89074',
    },
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2470 Paseo Verde Parkway, Suite 135',
    addressLocality: 'Henderson',
    addressRegion: 'Nevada',
    addressCountry: 'US',
    postalCode: '89074',
  },
  telephone: '(702) 500-1064',
  email: 'info@hendersonhomes.com',
  faxNumber: '(702) 500-1065',
  areaServed: [
    {
      '@type': 'City',
      name: 'Henderson',
      containedInPlace: {
        '@type': 'State',
        name: 'Nevada',
      },
    },
    {
      '@type': 'Neighborhood',
      name: 'Green Valley',
      containedInPlace: {
        '@type': 'City',
        name: 'Henderson',
      },
    },
    {
      '@type': 'Neighborhood',
      name: 'Anthem',
      containedInPlace: {
        '@type': 'City',
        name: 'Henderson',
      },
    },
    {
      '@type': 'Neighborhood',
      name: 'Stephanie Ranch',
      containedInPlace: {
        '@type': 'City',
        name: 'Henderson',
      },
    },
    {
      '@type': 'Neighborhood',
      name: 'Whitney Ranch',
      containedInPlace: {
        '@type': 'City',
        name: 'Henderson',
      },
    },
  ],
  serviceType: [
    'Home Buying',
    'Home Selling',
    'Market Analysis',
    'Investment Properties',
    'Relocation Services',
    'Property Management',
    'Real Estate Consultation',
  ],
  priceRange: '$400,000 - $1,200,000',
  paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Bank Transfer'],
  currenciesAccepted: 'USD',
  openingHours: 'Mo-Fr 09:00-18:00, Sa 10:00-16:00',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Real Estate Services',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Home Buying Services',
        description:
          'Expert buyer representation with market analysis, negotiation, and closing support',
        provider: {
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy',
        },
      },
      {
        '@type': 'Service',
        name: 'Home Selling Services',
        description:
          'Professional marketing, staging consultation, and pricing strategy for maximum value',
        provider: {
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy',
        },
      },
      {
        '@type': 'Service',
        name: 'Market Analysis',
        description:
          'Comprehensive property valuations and Henderson market trend reports',
        provider: {
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy',
        },
      },
      {
        '@type': 'Service',
        name: 'Investment Property Services',
        description:
          'Rental property analysis and investment strategy consultation',
        provider: {
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Sarah Johnson',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: 'Dr. Jan Duffy helped us find our dream home in Green Valley. Her expertise in the Henderson market is unmatched!',
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Michael Chen',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: 'Professional, knowledgeable, and always available. Dr. Duffy made our home buying experience seamless.',
    },
  ],
  knowsAbout: [
    'Henderson Real Estate Market',
    'Green Valley Properties',
    'Anthem Community',
    'Stephanie Ranch Homes',
    'Whitney Ranch Real Estate',
    'Nevada Property Law',
    'Real Estate Investment',
    'Property Valuation',
  ],
  award: [
    'Top 1% Real Estate Agent',
    'Best of Henderson Award',
    'Excellence in Customer Service',
    'Million Dollar Club Member',
  ],
  foundingDate: '2010',
  numberOfEmployees: '5',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Henderson Homes',
  },
}

const neighborhoodSchema = {
  '@context': 'https://schema.org',
  '@type': 'Place',
  '@id': 'https://searchforhomesinhenderson.com/#neighborhoods',
  name: 'Henderson Nevada Neighborhoods',
  description: 'Premier residential communities in Henderson, Nevada',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Henderson',
    addressRegion: 'Nevada',
    addressCountry: 'US',
  },
  containsPlace: [
    {
      '@type': 'Neighborhood',
      name: 'Green Valley',
      description:
        'Luxury master-planned community with championship golf and upscale shopping',
      priceRange: '$750,000 - $1,200,000',
      amenityFeature: [
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Golf Course',
          value: 'Anthem Country Club',
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Shopping',
          value: 'The District at Green Valley',
        },
      ],
    },
    {
      '@type': 'Neighborhood',
      name: 'Anthem',
      description:
        'Hillside community with stunning views and resort-style amenities',
      priceRange: '$650,000 - $950,000',
      amenityFeature: [
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Views',
          value: 'Mountain and Valley Views',
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Amenities',
          value: 'Resort-style Living',
        },
      ],
    },
    {
      '@type': 'Neighborhood',
      name: 'Stephanie Ranch',
      description:
        'Family-friendly with excellent schools and recreational facilities',
      priceRange: '$450,000 - $650,000',
      amenityFeature: [
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Schools',
          value: 'Top-rated Clark County Schools',
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Recreation',
          value: 'Whitney Mesa Recreation Area',
        },
      ],
    },
    {
      '@type': 'Neighborhood',
      name: 'Whitney Ranch',
      description:
        'Established community with mature landscaping and affordability',
      priceRange: '$400,000 - $600,000',
      amenityFeature: [
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Landscaping',
          value: 'Mature Trees and Gardens',
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Affordability',
          value: 'Best Value in Henderson',
        },
      ],
    },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://searchforhomesinhenderson.com/#localbusiness',
  name: 'Henderson Homes - Dr. Jan Duffy',
  alternateName: 'Henderson Homes',
  url: 'https://searchforhomesinhenderson.com',
  logo: 'https://searchforhomesinhenderson.com/logo.png',
  image: 'https://searchforhomesinhenderson.com/office.jpg',
  description: 'Premier real estate services in Henderson, Nevada. Expert guidance from Dr. Jan Duffy.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2470 Paseo Verde Parkway, Suite 135',
    addressLocality: 'Henderson',
    addressRegion: 'Nevada',
    addressCountry: 'US',
    postalCode: '89074',
  },
  telephone: '(702) 500-1064',
  email: 'info@hendersonhomes.com',
  faxNumber: '(702) 500-1065',
  openingHours: 'Mo-Fr 09:00-18:00, Sa 10:00-16:00',
  paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Bank Transfer'],
  currenciesAccepted: 'USD',
  priceRange: '$$',
  areaServed: {
    '@type': 'City',
    name: 'Henderson',
    containedInPlace: {
      '@type': 'State',
      name: 'Nevada',
    },
  },
  hasMap: 'https://maps.google.com/?q=2470+Paseo+Verde+Parkway+Suite+135+Henderson+NV+89074',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.0397,
    longitude: -115.0498,
  },
  sameAs: [
    'https://www.facebook.com/hendersonhomes',
    'https://www.linkedin.com/in/dr-jan-duffy',
    'https://www.instagram.com/hendersonhomes',
  ],
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* SEO Meta Tags */}
        <meta name="author" content="Dr. Jan Duffy" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Local Business Meta Tags */}
        <meta name="geo.region" content="US-NV" />
        <meta name="geo.placename" content="Henderson" />
        <meta name="geo.position" content="36.0397;-115.0498" />
        <meta name="ICBM" content="36.0397, -115.0498" />
        
        {/* Business Information */}
        <meta name="business:contact_data:street_address" content="2470 Paseo Verde Parkway, Suite 135" />
        <meta name="business:contact_data:locality" content="Henderson" />
        <meta name="business:contact_data:region" content="Nevada" />
        <meta name="business:contact_data:postal_code" content="89074" />
        <meta name="business:contact_data:country_name" content="United States" />
        <meta name="business:contact_data:phone_number" content="(702) 500-1064" />
        
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <style>{`
          realscout-office-listings {
            --rs-listing-divider-color: rgb(101, 141, 172);
            width: 100%;
          }
          
          realscout-simple-search {
            --rs-ss-font-primary-color: #726a6d;
            --rs-ss-searchbar-border-color: #1d6fbd;
            --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
            --rs-ss-widget-width: 500px !important;
          }
        `}</style>
      </head>
      <body className={inter.className}>
        <Script
          id={`real-estate-schema-${Date.now()}`}
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(realEstateSchema)}
        </Script>
        <Script
          id={`neighborhood-schema-${Date.now()}`}
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(neighborhoodSchema)}
        </Script>
        <Script
          id={`local-business-schema-${Date.now()}`}
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(localBusinessSchema)}
        </Script>
        <header className="border-b border-gray-200 bg-white py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <h1 className="text-2xl font-bold text-gray-900">
                  Henderson Homes
                </h1>
                <div className="flex items-center space-x-2 text-blue-600 font-semibold">
                  <span>📞</span>
                  <a
                    href="tel:7025001064"
                    className="hover:text-blue-800 transition-colors"
                  >
                    (702) 500-1064
                  </a>
                </div>
              </div>
              <div className="hidden space-x-6 md:flex">
                <a href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
                <a href="http://drjanduffy.realscout.com/onboarding" className="text-gray-600 hover:text-gray-900">
                  Advanced Search
                </a>
                <a href="/blog" className="text-gray-600 hover:text-gray-900">
                  Market Insights
                </a>
                <a
                  href="http://drjanduffy.realscout.com/onboarding"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Home Value
                </a>
                <a
                  href="http://drjanduffy.realscout.com/onboarding"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Neighborhoods
                </a>
                <a
                  href="http://drjanduffy.realscout.com/onboarding"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="border-t border-gray-200 bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Henderson Homes
                </h3>
                <p className="text-gray-600 text-sm">
                  Premier real estate services in Henderson, Nevada
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Office Location
                </h3>
                <address className="text-gray-600 text-sm not-italic">
                  2470 Paseo Verde Parkway
                  <br />
                  Suite 135
                  <br />
                  Henderson, NV 89074
                </address>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Contact
                </h3>
                <div className="space-y-2 text-gray-600 text-sm">
                  <p>
                    <span className="text-blue-600">📞</span> (702) 500-1064
                  </p>
                  <p>
                    <a
                      href="http://drjanduffy.realscout.com/onboarding"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Get in Touch
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center text-gray-600 border-t border-gray-200 pt-6">
              <p>&copy; 2024 Henderson Homes. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
