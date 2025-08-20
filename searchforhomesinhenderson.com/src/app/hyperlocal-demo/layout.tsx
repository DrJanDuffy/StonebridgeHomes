import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hyperlocal Real Estate Demo | Henderson Homes',
  description:
    'Experience the future of hyperlocal real estate with AI-powered market intelligence, street-level comps, and predictive analytics.',
}

export default function HyperlocalDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
