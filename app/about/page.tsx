import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Our Philosophy & Approach',
  description: 'Learn about Benefique Tax & Accounting. Based in Davie, FL, we provide real-time accounting and fractional CFO services for healthcare and service businesses.',
  alternates: {
    canonical: 'https://www.benefique.com/about',
  },
  openGraph: {
    title: 'About Us | Benefique Tax & Accounting',
    description: 'Learn about Benefique Tax & Accounting. Based in Davie, FL, we provide real-time accounting and fractional CFO services.',
    url: 'https://www.benefique.com/about',
  },
}

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-benefique-orange/10 text-benefique-orange px-3 py-1 rounded-full text-sm font-medium mb-6">
            <span>👋</span> About Us
          </div>
          <h1 className="text-4xl font-bold text-benefique-navy mb-4">About Benefique</h1>
          <p className="text-xl text-gray-600">History matters, but preparation wins.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          {/* Philosophy */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-benefique-navy mb-4">Our Philosophy</h2>
            <p className="text-gray-600 mb-4">
              Most accounting firms look backward. They tell you what happened last year, last quarter, 
              last month. That&apos;s history. Important, but not enough.
            </p>
            <p className="text-gray-600 mb-4">
              At Benefique, we believe financial data should drive decisions, not just document them. 
              Real-time books. Monthly closes by the 7th. Dashboards that answer questions before you ask them.
            </p>
            <p className="text-gray-600">
              We specialize in <Link href="/testimonials" className="text-benefique-orange hover:underline font-medium">healthcare and service-based SMBs</Link> because 
              we understand the unique challenges—complex billing, multi-location operations, seasonal fluctuations, regulatory requirements.
            </p>
          </div>

          {/* What Makes Us Different */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-benefique-navy mb-6">What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Books Closed by the 7th', desc: 'Your books are closed by the 7th, review call by the 10th. No waiting.' },
                { title: '24-Hour Response', desc: 'Questions get answers within one business day. Always.' },
                { title: 'Decision-Ready Dashboards', desc: 'Not just numbers—insights you can act on immediately.' },
                { title: 'Proactive Planning', desc: 'We find opportunities before they become emergencies.' },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-benefique-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decision-Ready Dashboards Section */}
          <div className="bg-gradient-to-br from-benefique-navy to-slate-800 rounded-2xl p-8 mb-8 text-white">
            <h2 className="text-2xl font-bold mb-4">📊 Decision-Ready Dashboards</h2>
            <p className="text-blue-100 mb-6">
              Every Fractional CFO client receives custom financial reports that make complex data simple. 
              See your business health at a glance, understand trends, and know exactly what actions to take.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 rounded-xl p-5 hover:bg-white/20 transition">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="font-bold text-lg mb-2">CFO Report</h3>
                <p className="text-blue-100 text-sm mb-3">
                  Visual dashboard showing cash health, revenue trends, profitability metrics, and debt coverage. 
                  Everything you need to know in one view.
                </p>
                <Link href="/demo" className="text-benefique-orange font-semibold text-sm hover:underline">
                  View Sample →
                </Link>
              </div>
              
              <div className="bg-white/10 rounded-xl p-5 hover:bg-white/20 transition">
                <div className="text-2xl mb-2">📰</div>
                <h3 className="font-bold text-lg mb-2">The Benefique Financial Times™</h3>
                <p className="text-blue-100 text-sm mb-3">
                  A newspaper-style report that tells your financial story. Lead articles, trend analysis, 
                  and action items written in owner terms.
                </p>
                <Link href="/demo" className="text-benefique-orange font-semibold text-sm hover:underline">
                  View Sample →
                </Link>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 bg-benefique-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                See All Sample Reports
              </Link>
            </div>
          </div>

          {/* Who We Serve */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-benefique-navy mb-4">Who We Serve</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-benefique-navy mb-2 flex items-center gap-2">
                  <span>🏥</span> Healthcare Practices
                </h3>
                <ul className="text-gray-600 text-sm space-y-1 ml-6">
                  <li>• Radiology & diagnostic imaging</li>
                  <li>• Dental practices & DSOs</li>
                  <li>• Veterinary clinics</li>
                  <li>• Medical practices</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-benefique-navy mb-2 flex items-center gap-2">
                  <span>🏢</span> Service-Based Businesses
                </h3>
                <ul className="text-gray-600 text-sm space-y-1 ml-6">
                  <li>• IT & technology services</li>
                  <li>• Marine & industrial services</li>
                  <li>• Restaurant & hospitality groups</li>
                  <li>• Professional services firms</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link href="/testimonials" className="text-benefique-orange font-semibold hover:underline">
                Read what our clients say →
              </Link>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-benefique-navy mb-4">Location</h2>
            <p className="text-gray-600 mb-4">
              Based in <strong>Davie, Florida</strong>, we serve clients throughout South Florida and beyond. 
              Our technology-forward approach means location is never a barrier to great service.
            </p>
            <Link href="/contact" className="text-benefique-orange font-semibold hover:underline">
              Get in touch →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-benefique-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to see what we can do for you?</h2>
          <p className="text-blue-100 mb-8">
            Let&apos;s talk about your business and see if we&apos;re the right fit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 bg-white text-benefique-navy px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              📊 View Sample Reports
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-benefique-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Apply to Work With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
