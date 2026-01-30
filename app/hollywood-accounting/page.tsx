import type { Metadata } from 'next'
import LocationPageContent from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'Hollywood Accounting & Fractional CFO Services',
  description: 'Full-service accounting and fractional CFO services for businesses in Hollywood, FL. Healthcare specialists. Books closed by the 7th. 24-hour response guarantee.',
  alternates: {
    canonical: 'https://www.benefique.com/hollywood-accounting',
  },
  openGraph: {
    title: 'Hollywood Accounting & Fractional CFO Services | Benefique',
    description: 'Full-service accounting and fractional CFO services for businesses in Hollywood, FL.',
    url: 'https://www.benefique.com/hollywood-accounting',
  },
}

export default function HollywoodAccountingPage() {
  return (
    <LocationPageContent
      city="Hollywood"
      nearby={['Fort Lauderdale', 'Davie', 'Hallandale', 'Miramar']}
      description="Full-service accounting for Hollywood, FL businesses — from healthcare to marine and hospitality services."
    />
  )
}
