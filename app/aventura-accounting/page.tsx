import type { Metadata } from 'next'
import LocationPageContent from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'Aventura Accounting & Fractional CFO Services',
  description: 'Full-service accounting and fractional CFO services for businesses in Aventura, FL. Healthcare specialists. Books closed by the 7th. 24-hour response guarantee.',
  alternates: {
    canonical: 'https://www.benefique.com/aventura-accounting',
  },
  openGraph: {
    title: 'Aventura Accounting & Fractional CFO Services | Benefique',
    description: 'Full-service accounting and fractional CFO services for businesses in Aventura, FL.',
    url: 'https://www.benefique.com/aventura-accounting',
  },
}

export default function AventuraAccountingPage() {
  return (
    <LocationPageContent
      city="Aventura"
      nearby={['North Miami Beach', 'Sunny Isles', 'Hallandale', 'Miami']}
      description="Accounting and CFO services for Aventura businesses — medical practices, professional services, and hospitality."
    />
  )
}
