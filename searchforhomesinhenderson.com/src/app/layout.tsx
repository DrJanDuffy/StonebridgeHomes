import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Henderson Homes - Premier Real Estate in Henderson, Nevada',
    template: '%s | Henderson Homes',
  },
  description:
    'Find your dream home in Henderson, Nevada with our expert real estate services. Browse luxury homes, condos, and investment properties with local market expertise.',
  keywords: [
    'Henderson homes',
    'Nevada real estate',
    'Henderson properties',
    'luxury homes Henderson',
    'homes for sale Henderson',
    'real estate agent Henderson',
    'home values Henderson',
    'property search Nevada',
  ],
  authors: [{ name: 'Henderson Homes Team' }],
  creator: 'Henderson Homes',
  publisher: 'Henderson Homes',
  metadataBase: new URL('https://searchforhomesinhenderson.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://searchforhomesinhenderson.com',
    title: 'Henderson Homes - Premier Real Estate',
    description: 'Find your dream home in Henderson, Nevada',
    siteName: 'Henderson Homes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henderson Homes - Premier Real Estate',
    description: 'Find your dream home in Henderson, Nevada',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://searchforhomesinhenderson.com',
  },
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
          id={`structured-data-${Date.now()}`}
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Henderson Homes",
            "url": "https://searchforhomesinhenderson.com",
            "description": "Premier real estate services in Henderson, Nevada",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Henderson",
              "addressRegion": "Nevada",
              "addressCountry": "US"
            },
            "serviceArea": {
              "@type": "City",
              "name": "Henderson",
              "containedInPlace": {
                "@type": "State",
                "name": "Nevada"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Real Estate Services",
              "itemListElement": [
                {
                  "@type": "Service",
                  "name": "Home Buying Services",
                  "description": "Expert buyer representation with market analysis"
                },
                {
                  "@type": "Service", 
                  "name": "Home Selling Services",
                  "description": "Professional marketing and pricing strategy"
                },
                {
                  "@type": "Service",
                  "name": "Property Valuation",
                  "description": "Comprehensive home value estimates and market analysis"
                }
              ]
            }
          })}
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
