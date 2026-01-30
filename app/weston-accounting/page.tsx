import type { Metadata } from 'next'
import LocationPageContent from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'Weston Accounting & Fractional CFO Services',
  description: 'Full-service accounting and fractional CFO services for businesses in Weston, FL. Healthcare specialists. Books closed by the 7th. 24-hour response guarantee.',
  alternates: {
    canonical: 'https://www.benefique.com/weston-accounting',
  },
  openGraph: {
    title: 'Weston Accounting & Fractional CFO Services | Benefique',
    description: 'Full-service accounting and fractional CFO services for businesses in Weston, FL.',
    url: 'https://www.benefique.com/weston-accounting',
  },
}

export default function WestonAccountingPage() {
  return (
    <LocationPageContent
      city="Weston"
      nearby={['Davie', 'Plantation', 'Miramar', 'Southwest Ranches']}
      description="Accounting and fractional CFO services for Weston's growing healthcare and service business community."
    />
  )
}
