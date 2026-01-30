import type { Metadata } from 'next'
import IndustryPageContent from '@/components/IndustryPage'

export const metadata: Metadata = {
  title: 'Radiology & Imaging Centers Accounting | Fractional CFO Services',
  description: 'Specialized accounting and fractional CFO services for radiology and imaging centers. Multi-location consolidation, insurance tracking, and real-time dashboards.',
  alternates: {
    canonical: 'https://www.benefique.com/industries/radiology',
  },
  openGraph: {
    title: 'Radiology & Imaging Centers Accounting | Benefique',
    description: 'Specialized accounting and fractional CFO services for radiology and imaging centers.',
    url: 'https://www.benefique.com/industries/radiology',
  },
}

export default function RadiologyPage() {
  return (
    <IndustryPageContent
      industry="Radiology & Imaging Centers"
      icon="🏥"
      challenges={[
        'Multi-location financial consolidation',
        'Complex insurance reimbursement tracking',
        'Equipment depreciation and financing',
        'Radiologist compensation structures',
        'HIPAA-compliant financial reporting',
        'Cash flow variability from insurance delays',
      ]}
      testimonial={{
        quote: 'Benefique gives us visibility across all our locations. We finally know which centers are performing and which need attention.',
        name: 'Mark',
        business: 'Multi-Location Radiology',
      }}
    />
  )
}
