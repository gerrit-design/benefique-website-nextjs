import type { Metadata } from 'next'
import IndustryPageContent from '@/components/IndustryPage'

export const metadata: Metadata = {
  title: 'Dental Practices Accounting | Fractional CFO Services',
  description: 'Specialized accounting and fractional CFO services for dental practices and DSOs. Insurance tracking, multi-provider compensation, and practice acquisition support.',
  alternates: {
    canonical: 'https://www.benefique.com/industries/dental',
  },
  openGraph: {
    title: 'Dental Practices Accounting | Benefique',
    description: 'Specialized accounting and fractional CFO services for dental practices and DSOs.',
    url: 'https://www.benefique.com/industries/dental',
  },
}

export default function DentalPage() {
  return (
    <IndustryPageContent
      industry="Dental Practices"
      icon="🦷"
      challenges={[
        'Insurance vs. cash pay revenue tracking',
        'Multi-provider compensation models',
        'Equipment purchases and financing',
        'Associate and hygienist productivity',
        'Practice acquisition accounting',
        'DSO financial reporting requirements',
      ]}
      testimonial={{
        quote: 'Complex multi-entity structure, and they keep it all organized. Tax planning alone has saved us significantly.',
        name: 'Eddie',
        business: 'Dental Brokerage',
      }}
    />
  )
}
