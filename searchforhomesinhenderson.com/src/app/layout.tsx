import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Henderson Homes',
  description: 'Find your dream home in Henderson, Nevada',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
