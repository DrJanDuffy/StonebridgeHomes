import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Henderson Homes - Premier Real Estate in Henderson, Nevada',
    template: '%s | Henderson Homes'
  },
  description: 'Find your dream home in Henderson, Nevada with our expert real estate services. Browse luxury homes, condos, and investment properties with local market expertise.',
  keywords: ['Henderson homes', 'Nevada real estate', 'Henderson properties', 'luxury homes', 'real estate agent', 'home values', 'property search'],
  authors: [{ name: 'Henderson Homes Team' }],
  creator: 'Henderson Homes',
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
  },
  alternates: {
    canonical: 'https://searchforhomesinhenderson.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          // Add integrity when RealScout publishes SRI hash
          // integrity="sha384-..."
        />
      </head>
      <body className={inter.className}>
        <header className="bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Henderson Homes</h1>
              <div className="hidden md:flex space-x-6">
                <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
                <a href="/search" className="text-gray-600 hover:text-gray-900">Advanced Search</a>
                <a href="/home-value" className="text-gray-600 hover:text-gray-900">Home Value</a>
                <a href="/neighborhoods" className="text-gray-600 hover:text-gray-900">Neighborhoods</a>
                <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
              </div>
            </nav>
          </div>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-50 border-t border-gray-200 py-8">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>&copy; 2024 Henderson Homes. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
