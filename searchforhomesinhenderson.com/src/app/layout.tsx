import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Find Your Dream Home in Henderson, Nevada | Premier Real Estate',
    template: '%s | Henderson Homes'
  },
  description: 'Discover exceptional properties in Henderson\'s premier residential communities. Expert local guidance and comprehensive market knowledge. Top-rated schools and master-planned living.',
  keywords: 'Henderson Nevada homes, real estate Henderson NV, homes for sale Henderson, Green Valley homes, Anthem community, Henderson real estate agent',
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
    description: 'Premier real estate in Henderson\'s best communities',
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
  name: 'Henderson Homes',
  url: 'https://searchforhomesinhenderson.com',
  description: 'Premier real estate services in Henderson, Nevada specializing in Green Valley, Anthem, Stephanie Ranch, and Whitney Ranch communities',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Henderson',
    addressRegion: 'Nevada',
    addressCountry: 'US',
    postalCode: '89052'
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Henderson',
      containedInPlace: {
        '@type': 'State', 
        name: 'Nevada'
      }
    }
  ],
  serviceType: ['Home Buying', 'Home Selling', 'Market Analysis', 'Investment Properties', 'Relocation Services'],
  priceRange: '$400,000 - $1,200,000',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Real Estate Services',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Home Buying Services',
        description: 'Expert buyer representation with market analysis, negotiation, and closing support'
      },
      {
        '@type': 'Service',
        name: 'Home Selling Services', 
        description: 'Professional marketing, staging consultation, and pricing strategy for maximum value'
      },
      {
        '@type': 'Service',
        name: 'Market Analysis',
        description: 'Comprehensive property valuations and Henderson market trend reports'
      }
    ]
  }
}

const neighborhoodSchema = {
  '@context': 'https://schema.org',
  '@type': 'Place',
  name: 'Henderson Nevada Neighborhoods',
  description: 'Premier residential communities in Henderson, Nevada',
  containsPlace: [
    {
      '@type': 'Neighborhood',
      name: 'Green Valley',
      description: 'Luxury master-planned community with championship golf and upscale shopping',
      priceRange: '$750,000 - $1,200,000'
    },
    {
      '@type': 'Neighborhood', 
      name: 'Anthem',
      description: 'Hillside community with stunning views and resort-style amenities',
      priceRange: '$650,000 - $950,000'
    },
    {
      '@type': 'Neighborhood',
      name: 'Stephanie Ranch', 
      description: 'Family-friendly with excellent schools and recreational facilities',
      priceRange: '$450,000 - $650,000'
    },
    {
      '@type': 'Neighborhood',
      name: 'Whitney Ranch',
      description: 'Established community with mature landscaping and affordability', 
      priceRange: '$400,000 - $600,000'
    }
  ]
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
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
        <header className="border-b border-gray-200 bg-white py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">
                Henderson Homes
              </h1>
              <div className="hidden space-x-6 md:flex">
                <a href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
                <a href="/search" className="text-gray-600 hover:text-gray-900">
                  Advanced Search
                </a>
                <a href="/blog" className="text-gray-600 hover:text-gray-900">
                  Market Insights
                </a>
                <a
                  href="/home-value"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Home Value
                </a>
                <a
                  href="/neighborhoods"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Neighborhoods
                </a>
                <a
                  href="/contact"
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
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>&copy; 2024 Henderson Homes. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
