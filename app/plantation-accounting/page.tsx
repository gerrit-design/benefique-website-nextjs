import type { Metadata } from 'next'
import LocationPageContent from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'Plantation Accounting & Fractional CFO Services',
  description: 'Full-service accounting and fractional CFO services for businesses in Plantation, FL. Healthcare specialists. Books closed by the 7th. 24-hour response guarantee.',
  alternates: {
    canonical: 'https://www.benefique.com/plantation-accounting',
  },
  openGraph: {
    title: 'Plantation Accounting & Fractional CFO Services | Benefique',
    description: 'Full-service accounting and fractional CFO services for businesses in Plantation, FL.',
    url: 'https://www.benefique.com/plantation-accounting',
  },
}

export default function PlantationAccountingPage() {
  return (
    <LocationPageContent
      city="Plantation"
      nearby={['Davie', 'Fort Lauderdale', 'Weston', 'Sunrise']}
      description="Full-service accounting for Plantation businesses — from medical practices to professional services firms."
    />
  )
}
