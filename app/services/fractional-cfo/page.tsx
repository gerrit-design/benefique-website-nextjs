import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fractional CFO Services | Strategic Financial Leadership',
  description: 'Get C-suite financial leadership at a fraction of the cost. CFO dashboards, cash flow forecasting, strategic planning, and the Benefique Financial Times™.',
  alternates: {
    canonical: 'https://www.benefique.com/services/fractional-cfo',
  },
  openGraph: {
    title: 'Fractional CFO Services | Benefique',
    description: 'Get C-suite financial leadership at a fraction of the cost.',
    url: 'https://www.benefique.com/services/fractional-cfo',
  },
}

export default function FractionalCFOPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-benefique-orange/10 text-benefique-orange px-3 py-1 rounded-full text-sm font-medium mb-6">
            <span>📊</span> Fractional CFO
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-benefique-navy leading-tight mb-6">
            Fractional CFO Services<br />for Growing Businesses
          </h1>
          
          <div className="bg-gray-50 border-l-4 border-benefique-orange p-6 rounded-r-xl mb-8 max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Fractional CFO services</strong> give you C-suite financial leadership without the C-suite price tag. 
              Get strategic planning, cash flow forecasting, custom dashboards, and proactive insights — 
              all designed to help you make better decisions and grow faster.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <Link
              href="/contact"
              className="bg-benefique-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition inline-flex items-center gap-2"
            >
              Get Started <span>→</span>
            </Link>
            <Link
              href="/demo"
              className="border-2 border-benefique-navy text-benefique-navy px-6 py-3 rounded-lg font-semibold hover:bg-benefique-navy hover:text-white transition"
            >
              See Sample Reports
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-benefique-navy text-center mb-4">What You Get</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Everything a full-time CFO would provide — strategic leadership, financial insights, and growth planning.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📅', title: 'Monthly Close by the 7th', desc: 'Complete financials ready by the 7th business day. Review call by the 10th.' },
              { icon: '📊', title: 'Custom CFO Dashboards', desc: 'Real-time metrics, KPIs, and insights tailored to your business and industry.' },
              { icon: '💰', title: 'Cash Flow Forecasting', desc: "Know what's coming. Plan for growth. Avoid surprises." },
              { icon: '📈', title: 'Strategic Planning', desc: 'Budgets, projections, and growth strategies backed by data.' },
              { icon: '🏦', title: 'Bank & Investor Relations', desc: 'Professional financial packages for lenders and investors.' },
              { icon: '📰', title: 'Benefique Financial Times™', desc: 'Weekly owner briefing that tells your financial story in plain English.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-benefique-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Benefique Financial Times */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-4xl mb-4">📰</div>
              <h2 className="text-3xl font-bold text-benefique-navy mb-4">The Benefique Financial Times™</h2>
              <p className="text-gray-600 mb-6">
                A newspaper-style CFO report about YOUR business — written in owner terms, not accountant-speak. 
                See your numbers clearly. Understand the story they tell. Make decisions confidently.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Lead articles explaining what happened and why',
                  'Financial tables with trend analysis',
                  'Clear action items and recommendations',
                  'Written weekly, delivered to your inbox',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-benefique-orange">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 text-benefique-orange font-semibold hover:underline"
              >
                See a sample report →
              </Link>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="text-center mb-4">
                <span className="text-6xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-benefique-navy text-center mb-2">
                Decision-Ready Dashboards
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Visual reports showing cash health, revenue trends, profitability, and more.
              </p>
              <Link
                href="/demo"
                className="block w-full bg-benefique-navy text-white py-3 rounded-lg font-semibold text-center hover:bg-slate-700 transition"
              >
                View Sample Reports
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-benefique-navy text-center mb-4">Who It&apos;s For</h2>
          <p className="text-gray-600 text-center mb-12">
            Fractional CFO services are ideal for businesses that have outgrown basic bookkeeping but aren&apos;t ready for a full-time CFO.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Revenue $1M-$20M', desc: "You've grown beyond DIY but a full-time CFO isn't in the budget." },
              { title: 'Multi-Location', desc: 'You need consolidated reporting across multiple entities or locations.' },
              { title: 'Growth Mode', desc: "You're planning expansion, acquisition, or seeking investment." },
              { title: 'Healthcare & Services', desc: 'You need someone who understands your industry.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-benefique-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-benefique-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Strategic Financial Leadership?</h2>
          <p className="text-blue-100 mb-8">
            Get the CFO-level insights you need to grow — without the CFO-level cost.
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
