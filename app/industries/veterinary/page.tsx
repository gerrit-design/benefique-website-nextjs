import type { Metadata } from 'next'
import IndustryPageContent from '@/components/IndustryPage'

export const metadata: Metadata = {
  title: 'Veterinary Practices Accounting | Fractional CFO Services',
  description: 'Specialized accounting and fractional CFO services for veterinary clinics. Inventory management, multi-location accounting, and real-time financial dashboards.',
  alternates: {
    canonical: 'https://www.benefique.com/industries/veterinary',
  },
  openGraph: {
    title: 'Veterinary Practices Accounting | Benefique',
    description: 'Specialized accounting and fractional CFO services for veterinary clinics.',
    url: 'https://www.benefique.com/industries/veterinary',
  },
}

export default function VeterinaryPage() {
  return (
    <IndustryPageContent
      industry="Veterinary Practices"
      icon="🐾"
      challenges={[
        'Inventory management for pharmaceuticals',
        'Multi-location or mobile practice accounting',
        'Equipment and facility costs',
        'Staff scheduling and payroll complexity',
        'Client payment plans and collections',
        'Emergency vs. routine service profitability',
      ]}
      testimonial={{
        quote: 'They handle everything—books, taxes, payroll. I can focus on my patients instead of spreadsheets.',
        name: 'Brandon',
        business: 'Veterinary Practice',
      }}
    />
  )
}
