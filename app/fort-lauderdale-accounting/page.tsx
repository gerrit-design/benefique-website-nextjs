import type { Metadata } from 'next'
import LocationPageContent from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'Fort Lauderdale Accounting & Fractional CFO Services',
  description: 'Full-service accounting and fractional CFO services for businesses in Fort Lauderdale, FL. Healthcare specialists. Books closed by the 7th. 24-hour response guarantee.',
  alternates: {
    canonical: 'https://www.benefique.com/fort-lauderdale-accounting',
  },
  openGraph: {
    title: 'Fort Lauderdale Accounting & Fractional CFO Services | Benefique',
    description: 'Full-service accounting and fractional CFO services for businesses in Fort Lauderdale, FL.',
    url: 'https://www.benefique.com/fort-lauderdale-accounting',
  },
}

export default function FortLauderdaleAccountingPage() {
  return (
    <LocationPageContent
      city="Fort Lauderdale"
      nearby={['Davie', 'Plantation', 'Hollywood', 'Oakland Park']}
      description="Fort Lauderdale's trusted accounting firm for healthcare practices, marine services, and professional services."
    />
  )
}
