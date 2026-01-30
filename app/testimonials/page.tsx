import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Client Testimonials | What Our Clients Say',
  description: 'Read testimonials from healthcare practices and service businesses who work with Benefique. Radiology, dental, veterinary, marine services, and more.',
  alternates: {
    canonical: 'https://www.benefique.com/testimonials',
  },
  openGraph: {
    title: 'Client Testimonials | Benefique Tax & Accounting',
    description: 'Read testimonials from healthcare practices and service businesses who work with Benefique.',
    url: 'https://www.benefique.com/testimonials',
  },
}

interface Testimonial {
  name: string
  industry: string
  quote: string
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition">
      <div className="text-benefique-orange text-4xl mb-4">&quot;</div>
      <p className="text-gray-700 mb-6 leading-relaxed">{t.quote}</p>
      <div className="border-t border-gray-100 pt-4">
        <div className="font-semibold text-benefique-navy">{t.name}</div>
        <div className="text-sm text-gray-500">{t.industry}</div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const healthcareTestimonials: Testimonial[] = [
    { name: 'Mark', industry: 'Multi-Location Radiology', quote: 'Benefique gives us visibility across all our locations. We finally know which centers are performing and which need attention.' },
    { name: 'Daryl', industry: 'Diagnostic Imaging', quote: 'They showed us the levers we could pull to improve profitability. Not just reports—actionable insights.' },
    { name: 'Humberto', industry: 'Radiology Operations', quote: 'The monthly CFO dashboard changed how we run the business. We make decisions based on data now, not gut feel.' },
    { name: 'Flavio', industry: 'Remote Radiology', quote: 'As a remote practice, having a team that truly understands healthcare billing was crucial. Benefique delivers.' },
    { name: 'Brandon', industry: 'Veterinary Practice', quote: 'They handle everything—books, taxes, payroll. I can focus on my patients instead of spreadsheets.' },
    { name: 'Eddie', industry: 'Dental Brokerage', quote: 'Complex multi-entity structure, and they keep it all organized. Tax planning alone has saved us significantly.' },
  ]

  const servicesTestimonials: Testimonial[] = [
    { name: 'Jamel', industry: 'IT Services', quote: 'Fast, responsive, and actually understands tech businesses. The monthly close is always on time.' },
    { name: 'Kobus', industry: 'Marine Services', quote: 'We went from chaos to clarity. Now I know exactly where we stand financially at any moment.' },
    { name: 'Natasha', industry: 'Restaurant Group', quote: "Multiple locations, different concepts, one clear financial picture. That's what Benefique built for us." },
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-benefique-orange/10 text-benefique-orange px-3 py-1 rounded-full text-sm font-medium mb-6">
            <span>⭐</span> Client Success Stories
          </div>
          <h1 className="text-4xl font-bold text-benefique-navy mb-4">What Our Clients Say</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            We specialize in <strong>healthcare practices</strong> and <strong>service-based businesses</strong>. 
            Here&apos;s what they say about working with us.
          </p>
        </div>
      </section>

      {/* Healthcare Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🏥</span>
            <div>
              <h2 className="text-2xl font-bold text-benefique-navy">Healthcare Practices</h2>
              <p className="text-gray-600">Radiology, dental, veterinary, and medical practices</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthcareTestimonials.map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🏢</span>
            <div>
              <h2 className="text-2xl font-bold text-benefique-navy">Service-Based Businesses</h2>
              <p className="text-gray-600">IT, marine, hospitality, and professional services</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesTestimonials.map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>
      </section>

      {/* See Our Reports CTA */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-benefique-navy mb-4">See the reports our clients love</h3>
          <p className="text-gray-600 mb-6">
            Our CFO dashboards and Benefique Financial Times™ give owners clarity they&apos;ve never had before.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 bg-white text-benefique-navy border-2 border-benefique-navy px-6 py-3 rounded-lg font-semibold hover:bg-benefique-navy hover:text-white transition"
          >
            📊 View Sample Reports
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-benefique-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to join them?</h2>
          <p className="text-blue-100 mb-8">
            Let&apos;s talk about your business and see how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-benefique-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Apply to Work With Us
          </Link>
        </div>
      </section>
    </div>
  )
}
