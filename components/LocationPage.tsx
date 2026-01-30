import Link from 'next/link'

interface LocationPageProps {
  city: string
  nearby: string[]
  description: string
}

export default function LocationPageContent({ city, nearby, description }: LocationPageProps) {
  const faqs = [
    {
      q: `What accounting services does Benefique offer in ${city}?`,
      a: `Benefique provides full-service accounting, fractional CFO services, bookkeeping, payroll processing, tax planning, and real-time financial reporting for businesses in ${city} and throughout South Florida.`
    },
    {
      q: `How quickly can Benefique close my books each month?`,
      a: `We close books by the 7th business day of each month, with a review call by the 10th. This gives you timely financial data to make informed decisions.`
    },
    {
      q: `Does Benefique work with healthcare practices in ${city}?`,
      a: `Yes! We specialize in healthcare practices including radiology centers, dental practices, veterinary clinics, and medical offices throughout ${city} and Broward County.`
    },
    {
      q: `What industries does Benefique serve in ${city}?`,
      a: `We focus on healthcare practices (radiology, dental, veterinary) and service-based businesses including marine services, IT companies, restaurants, and professional services firms in ${city}.`
    },
    {
      q: `How is Benefique different from other accountants in ${city}?`,
      a: `We provide real-time accounting with 24-hour response times, decision-ready dashboards, and proactive tax planning — not just year-end compliance. We're a complete accounting department, not just a bookkeeper.`
    }
  ]

  return (
    <div>
      {/* Hero with Direct Answer Block */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-benefique-orange/10 text-benefique-orange px-3 py-1 rounded-full text-sm font-medium mb-6">
            <span>📍</span> {city}, Florida
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-benefique-navy leading-tight mb-6">
            {city} Accounting &<br />Fractional CFO Services
          </h1>
          
          {/* Direct Answer Block for AI/Featured Snippets */}
          <div className="bg-gray-50 border-l-4 border-benefique-orange p-6 rounded-r-xl mb-8 max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Benefique Tax & Accounting</strong> provides full-service accounting and fractional CFO services 
              for businesses in {city}, FL. We specialize in healthcare practices and service-based businesses, 
              offering real-time books, monthly closes by the 7th, and 24-hour response times.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <Link
              href="/contact"
              className="bg-benefique-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition inline-flex items-center gap-2"
            >
              Get a Free Consultation <span>→</span>
            </Link>
            <Link
              href="/services"
              className="border-2 border-benefique-navy text-benefique-navy px-6 py-3 rounded-lg font-semibold hover:bg-benefique-navy hover:text-white transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-gray-50 py-6 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              '✓ Books Closed by the 7th',
              '✓ 24-Hour Response Time',
              '✓ Healthcare Specialists',
              '✓ Real-Time Dashboards'
            ].map((item, i) => (
              <span key={i} className="text-gray-700 font-medium">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Location */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-benefique-navy text-center mb-4">
            Accounting Services in {city}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {description || `Comprehensive financial services for ${city} businesses — from startups to established practices.`}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📊', title: 'Fractional CFO', desc: `Strategic financial leadership for ${city} businesses. Monthly dashboards, cash flow forecasting, and growth planning.`, link: '/services/fractional-cfo' },
              { icon: '📚', title: 'Full-Service Accounting', desc: 'Bookkeeping, payroll, AP management, and monthly closes — a complete accounting department.', link: '/services/real-time-accounting' },
              { icon: '🎯', title: 'Tax Planning', desc: `Proactive tax strategies for ${city} businesses. R&D credits, entity optimization, and year-round planning.`, link: '/services' },
              { icon: '🏥', title: 'Healthcare Accounting', desc: 'Specialized services for radiology, dental, veterinary, and medical practices.', link: '/industries/radiology' },
              { icon: '⚓', title: 'Marine Services', desc: 'Financial management for marine and industrial service companies.', link: '/industries/marine-services' },
              { icon: '📱', title: 'Real-Time Dashboards', desc: 'See your numbers anytime. Decision-ready reports updated continuously.', link: '/demo' },
            ].map((service) => (
              <Link key={service.title} href={service.link} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-benefique-orange/30 transition group">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold text-benefique-navy mb-2 group-hover:text-benefique-orange transition">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-benefique-navy text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Common questions about accounting services in {city}
          </p>
          
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

      {/* Nearby Areas */}
      {nearby && nearby.length > 0 && (
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-lg font-bold text-benefique-navy mb-4 text-center">Also Serving Nearby Areas</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {nearby.map((area) => (
                <Link
                  key={area}
                  href={`/${area.toLowerCase().replace(/\s+/g, '-')}-accounting`}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-benefique-orange/10 hover:text-benefique-orange transition"
                >
                  {area}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-benefique-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started in {city}?</h2>
          <p className="text-blue-100 mb-8">
            Schedule a free consultation to see how we can help your {city} business grow.
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
