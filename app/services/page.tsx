import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | Full-Service Accounting, Fractional CFO & Tax Planning',
  description: 'Comprehensive financial solutions: Fractional CFO services, full-service accounting, bookkeeping, payroll, and proactive tax planning for healthcare and service businesses.',
  alternates: {
    canonical: 'https://www.benefique.com/services',
  },
  openGraph: {
    title: 'Services | Benefique Tax & Accounting',
    description: 'Comprehensive financial solutions: Fractional CFO services, full-service accounting, bookkeeping, payroll, and proactive tax planning.',
    url: 'https://www.benefique.com/services',
  },
}

export default function Services() {
  return (
    <div>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-benefique-orange/10 text-benefique-orange px-3 py-1 rounded-full text-sm font-medium mb-6">
            <span>📋</span> Our Services
          </div>
          <h1 className="text-4xl font-bold text-benefique-navy mb-4">Everything Your Business Needs</h1>
          <p className="text-xl text-gray-600 max-w-2xl">Comprehensive financial solutions for healthcare and service-based businesses</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          {/* Fractional CFO */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">📊</div>
              <div>
                <h2 className="text-2xl font-bold text-benefique-navy">Fractional CFO Services</h2>
                <p className="text-gray-600">C-suite financial leadership at a fraction of the cost</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-3">
                {[
                  'Monthly financial closes by the 7th business day',
                  'Custom CFO dashboards with real-time metrics',
                  'Cash flow forecasting and management',
                  'Strategic planning and budgeting',
                  'Bank and investor relations support',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-benefique-orange">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-sm text-benefique-orange uppercase tracking-wide font-semibold mb-2">Featured</div>
                <h3 className="text-lg font-bold text-benefique-navy mb-2">The Benefique Financial Times™</h3>
                <p className="text-gray-600 text-sm">
                  A weekly CFO report about your business — written in owner terms, not accountant-speak. 
                  See your numbers clearly. Make decisions confidently.
                </p>
                <Link href="/demo" className="text-benefique-orange text-sm font-semibold hover:underline mt-2 inline-block">
                  See a sample report →
                </Link>
              </div>
            </div>
          </div>

          {/* Full-Service Accounting */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">📚</div>
              <div>
                <h2 className="text-2xl font-bold text-benefique-navy">Full-Service Accounting</h2>
                <p className="text-gray-600">Real-time books, not year-old history</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-3">
                {[
                  'Bookkeeping and transaction coding',
                  'Accounts payable management',
                  'Payroll processing and compliance',
                  'Bank and credit card reconciliations',
                  'Month-end and year-end close',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-benefique-orange">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-sm text-benefique-orange uppercase tracking-wide font-semibold mb-2">Our Promise</div>
                <h3 className="text-lg font-bold text-benefique-navy mb-2">24-Hour Response Time</h3>
                <p className="text-gray-600 text-sm">
                  Questions don&apos;t wait. Neither do we. Every client inquiry gets a response 
                  within one business day, guaranteed.
                </p>
              </div>
            </div>
          </div>

          {/* Tax Planning */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">🎯</div>
              <div>
                <h2 className="text-2xl font-bold text-benefique-navy">Proactive Tax Planning</h2>
                <p className="text-gray-600">Year-round strategies, not April surprises</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-3">
                {[
                  'Entity structure optimization',
                  'R&D tax credit identification',
                  'Retirement and benefit planning',
                  'State and local tax compliance',
                  'Quarterly estimates and projections',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-benefique-orange">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-sm text-benefique-orange uppercase tracking-wide font-semibold mb-2">Focus Areas</div>
                <h3 className="text-lg font-bold text-benefique-navy mb-2">Healthcare & Service SMBs</h3>
                <p className="text-gray-600 text-sm">
                  We specialize in healthcare practices, professional services, and service-based 
                  businesses. We understand your industry&apos;s unique challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-benefique-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-blue-100 mb-8">
            Let&apos;s talk about your business and see if we&apos;re the right fit.
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
