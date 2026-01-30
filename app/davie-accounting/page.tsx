import type { Metadata } from 'next'
import LocationPageContent from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'Davie Accounting & Fractional CFO Services',
  description: 'Full-service accounting and fractional CFO services for businesses in Davie, FL. Healthcare specialists. Books closed by the 7th. 24-hour response guarantee.',
  alternates: {
    canonical: 'https://www.benefique.com/davie-accounting',
  },
  openGraph: {
    title: 'Davie Accounting & Fractional CFO Services | Benefique',
    description: 'Full-service accounting and fractional CFO services for businesses in Davie, FL.',
    url: 'https://www.benefique.com/davie-accounting',
  },
}

export default function DavieAccountingPage() {
  return (
    <LocationPageContent
      city="Davie"
      nearby={['Plantation', 'Weston', 'Fort Lauderdale', 'Hollywood']}
      description="Benefique is headquartered in Davie, FL — providing accounting and CFO services to local healthcare practices and service businesses."
    />
  )
}
