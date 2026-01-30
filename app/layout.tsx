import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.benefique.com'),
  title: {
    default: 'Benefique Tax & Accounting | Full-Service Accounting & Fractional CFO | South Florida',
    template: '%s | Benefique Tax & Accounting'
  },
  description: 'Full-service accounting, fractional CFO services, and tax planning for healthcare practices and service businesses in South Florida. Books closed by the 7th. 24-hour response guarantee.',
  keywords: ['accounting', 'bookkeeping', 'fractional CFO', 'tax planning', 'South Florida', 'Davie', 'healthcare accounting', 'small business accounting'],
  authors: [{ name: 'Benefique Capital LLC' }],
  creator: 'Benefique Capital LLC',
  publisher: 'Benefique Capital LLC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.benefique.com',
    siteName: 'Benefique Tax & Accounting',
    title: 'Benefique Tax & Accounting | Full-Service Accounting & Fractional CFO',
    description: 'Full-service accounting, fractional CFO services, and tax planning for healthcare practices and service businesses in South Florida.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Benefique Tax & Accounting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benefique Tax & Accounting | Full-Service Accounting & Fractional CFO',
    description: 'Full-service accounting, fractional CFO services, and tax planning for healthcare practices and service businesses in South Florida.',
    images: ['/og-image.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <Nav />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
