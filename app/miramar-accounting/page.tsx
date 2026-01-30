import type { Metadata } from 'next'
import LocationPageContent from '@/components/LocationPage'

export const metadata: Metadata = {
  title: 'Miramar Accounting & Fractional CFO Services',
  description: 'Full-service accounting and fractional CFO services for businesses in Miramar, FL. Healthcare specialists. Books closed by the 7th. 24-hour response guarantee.',
  alternates: {
    canonical: 'https://www.benefique.com/miramar-accounting',
  },
  openGraph: {
    title: 'Miramar Accounting & Fractional CFO Services | Benefique',
    description: 'Full-service accounting and fractional CFO services for businesses in Miramar, FL.',
    url: 'https://www.benefique.com/miramar-accounting',
  },
}

export default function MiramarAccountingPage() {
  return (
    <LocationPageContent
      city="Miramar"
      nearby={['Hollywood', 'Pembroke Pines', 'Weston', 'Miami Gardens']}
      description="Real-time accounting and tax planning for Miramar businesses — healthcare, marine services, and more."
    />
  )
}
