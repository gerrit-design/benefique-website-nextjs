import type { Metadata } from 'next'
import IndustryPageContent from '@/components/IndustryPage'

export const metadata: Metadata = {
  title: 'Marine Services Accounting | Fractional CFO Services',
  description: 'Specialized accounting and fractional CFO services for marine service companies. Project-based revenue, seasonal cash flow, and subcontractor management.',
  alternates: {
    canonical: 'https://www.benefique.com/industries/marine-services',
  },
  openGraph: {
    title: 'Marine Services Accounting | Benefique',
    description: 'Specialized accounting and fractional CFO services for marine service companies.',
    url: 'https://www.benefique.com/industries/marine-services',
  },
}

export default function MarineServicesPage() {
  return (
    <IndustryPageContent
      industry="Marine Services"
      icon="⚓"
      challenges={[
        'Project-based revenue recognition',
        'Seasonal cash flow fluctuations',
        'Large equipment and dock costs',
        'Subcontractor management',
        'Parts inventory tracking',
        'Multi-vessel or multi-location operations',
      ]}
      testimonial={{
        quote: 'We went from chaos to clarity. Now I know exactly where we stand financially at any moment.',
        name: 'Kobus',
        business: 'Marine Services',
      }}
    />
  )
}
