import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Real-Time Accounting Services | Books Current Every Day',
  description: 'Real-time accounting means your books are always current — not 30, 60, or 90 days behind. Books closed by the 7th, decision-ready dashboards, 24-hour response times.',
  alternates: {
    canonical: 'https://www.benefique.com/services/real-time-accounting',
  },
  openGraph: {
    title: 'Real-Time Accounting Services | Benefique',
    description: 'Real-time accounting means your books are always current — not 30, 60, or 90 days behind.',
    url: 'https://www.benefique.com/services/real-time-accounting',
  },
}

export default function RealTimeAccountingPage() {
  const faqs = [
    {
      q: 'What is real-time accounting?',
      a: 'Real-time accounting means your books are updated continuously throughout the month, not just at year-end. You always know your exact financial position — cash, revenue, expenses, profitability — without waiting or asking.'
    },
    {
      q: 'How is this different from traditional bookkeeping?',
      a: 'Traditional bookkeeping often runs 30-90 days behind. Real-time accounting keeps you current. Books are closed by the 7th of each month, with a review call by the 10th. You make decisions based on current data, not history.'
    },
    {
      q: 'What technology do you use for real-time accounting?',
      a: 'We use cloud-based accounting platforms (QuickBooks Online, Xero) with bank feeds, automated categorization, and custom dashboards. You can see your numbers anytime from any device.'
    },
    {
      q: 'Is real-time accounting more expensive?',
      a: 'Our full-service accounting includes real-time capabilities at no extra cost. You get bookkeeping, payroll, tax preparation, and dashboards — a complete accounting department for one predictable monthly fee.'
    },
    {
      q: 'How quickly can you get my books current?',
      a: 'Most clients are fully onboarded and current within 30-60 days. We handle the cleanup and catch-up work, then maintain real-time accuracy going forward.'
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-benefique-orange/10 text-benefique-orange px-3 py-1 rounded-full text-sm font-medium mb-6">
            <span>⚡</span> Core Service
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-benefique-navy leading-tight mb-6">
            Real-Time Accounting<br />for South Florida Businesses
          </h1>
          
          {/* Direct Answer Block */}
          <div className="bg-gray-50 border-l-4 border-benefique-orange p-6 rounded-r-xl mb-8 max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Real-time accounting</strong> means your books are always current — not 30, 60, or 90 days behind. 
              At Benefique, we close books by the 7th of every month, provide decision-ready dashboards, and guarantee 
              24-hour response times. Know your numbers today, not next quarter.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <Link
              href="/contact"
              className="bg-benefique-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition inline-flex items-center gap-2"
            >
              Get Real-Time Books <span>→</span>
            </Link>
            <Link
              href="/demo"
              className="border-2 border-benefique-navy text-benefique-navy px-6 py-3 rounded-lg font-semibold hover:bg-benefique-navy hover:text-white transition"
            >
              See Sample Dashboards
            </Link>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-red-600 mb-6">❌ The Old Way</h2>
              <ul className="space-y-4">
                {[
                  'Books are 2-3 months behind',
                  "No idea if you're actually profitable",
                  'Tax time is a scramble',
                  'Cash flow surprises',
                  'Decisions based on gut, not data',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="text-red-500">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-600 mb-6">✓ The Benefique Way</h2>
              <ul className="space-y-4">
                {[
                  'Books closed by the 7th every month',
                  'Real-time profitability visibility',
                  'Tax-ready any day of the year',
                  'Cash flow forecasting & alerts',
                  'Decisions backed by current data',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-benefique-navy text-center mb-12">What&apos;s Included</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📚', title: 'Full Bookkeeping', desc: 'All transactions categorized, bank accounts reconciled, credit cards matched — every month.' },
              { icon: '💰', title: 'Payroll Processing', desc: 'Employees and contractors paid on time, all filings handled, year-end W-2s and 1099s included.' },
              { icon: '📋', title: 'AP Management', desc: 'Bills tracked, approved, and paid. No missed payments, no late fees.' },
              { icon: '📊', title: 'Monthly Close by 7th', desc: 'Complete financial statements ready by the 7th business day. Review call by the 10th.' },
              { icon: '📱', title: 'Real-Time Dashboard', desc: 'See cash, revenue, expenses, and KPIs anytime from your phone or computer.' },
              { icon: '🎯', title: 'Tax Preparation', desc: 'Business and personal tax returns included. Quarterly estimates. Year-round planning.' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-benefique-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-benefique-navy text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-benefique-navy hover:text-benefique-orange transition list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-4 text-gray-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-benefique-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Real-Time Financial Clarity?</h2>
          <p className="text-blue-100 mb-8">
            Stop flying blind. Get books that are always current and dashboards that answer your questions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-benefique-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
