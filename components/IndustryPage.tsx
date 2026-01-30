import Link from 'next/link'

interface IndustryPageProps {
  industry: string
  icon: string
  challenges: string[]
  testimonial: {
    quote: string
    name: string
    business: string
  }
}

export default function IndustryPageContent({ industry, icon, challenges, testimonial }: IndustryPageProps) {
  const faqs = [
    {
      q: `What accounting services does Benefique offer for ${industry}?`,
      a: `Benefique provides full-service accounting, fractional CFO services, bookkeeping, payroll, tax planning, and industry-specific financial reporting for ${industry} businesses throughout South Florida.`
    },
    {
      q: `Does Benefique understand the unique needs of ${industry}?`,
      a: `Yes! We specialize in ${industry} and understand the specific challenges including ${challenges?.slice(0, 2).join(', ') || 'complex billing, cash flow management, and compliance requirements'}.`
    },
    {
      q: `How can a fractional CFO help my ${industry} business?`,
      a: `A fractional CFO provides strategic financial leadership — cash flow forecasting, profitability analysis, KPI dashboards, and growth planning — at a fraction of the cost of a full-time CFO.`
    },
    {
      q: `What makes Benefique different for ${industry}?`,
      a: `We offer real-time accounting (not year-old history), books closed by the 7th, 24-hour response times, and decision-ready dashboards specifically designed for ${industry} operations.`
    }
  ]

  const services = [
    { title: 'Fractional CFO', desc: 'Strategic financial leadership with industry-specific KPIs and dashboards' },
    { title: 'Full-Service Bookkeeping', desc: 'Accurate books closed by the 7th of every month' },
    { title: 'Payroll & HR Support', desc: 'Payroll processing, benefits tracking, and compliance' },
    { title: 'Tax Planning & Preparation', desc: 'Proactive strategies to minimize tax burden' },
    { title: 'Cash Flow Management', desc: 'Forecasting and optimization for healthy cash positions' },
    { title: 'Financial Reporting', desc: 'Decision-ready dashboards and owner-friendly reports' },
  ]

  return (
    <div>
      {/* Hero with Direct Answer Block */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-benefique-orange/10 text-benefique-orange px-3 py-1 rounded-full text-sm font-medium mb-6">
            <span>{icon || '🏢'}</span> {industry}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-benefique-navy leading-tight mb-6">
            {industry} Accounting &<br />Fractional CFO Services
          </h1>
          
          {/* Direct Answer Block for AI/Featured Snippets */}
          <div className="bg-gray-50 border-l-4 border-benefique-orange p-6 rounded-r-xl mb-8 max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Benefique Tax & Accounting</strong> specializes in accounting and fractional CFO services 
              for {industry} businesses in South Florida. We provide real-time financial reporting, 
              monthly closes by the 7th, and industry-specific KPI dashboards to help you grow.
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
              href="/demo"
              className="border-2 border-benefique-navy text-benefique-navy px-6 py-3 rounded-lg font-semibold hover:bg-benefique-navy hover:text-white transition"
            >
              See Sample Reports
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      {challenges && challenges.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-benefique-navy text-center mb-4">
              {industry} Financial Challenges We Solve
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Running a {industry.toLowerCase()} business comes with unique financial complexities. We get it.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="w-10 h-10 bg-benefique-orange/10 rounded-lg flex items-center justify-center text-benefique-orange font-bold mb-4">
                    {i + 1}
                  </div>
                  <p className="text-gray-700">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services for Industry */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-benefique-navy text-center mb-4">
            Our Services for {industry}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored for {industry.toLowerCase()} operations
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, i) => (
              <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
                <div className="text-benefique-orange text-2xl">✓</div>
                <div>
                  <h3 className="font-bold text-benefique-navy mb-1">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {testimonial && (
        <section className="py-16 bg-benefique-navy text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="text-5xl text-benefique-orange mb-6">&quot;</div>
            <blockquote className="text-2xl font-light mb-6 leading-relaxed">
              {testimonial.quote}
            </blockquote>
            <div className="text-blue-200">
              <span className="font-semibold text-white">{testimonial.name}</span>
              {testimonial.business && <span> — {testimonial.business}</span>}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-benefique-navy text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Common questions about accounting for {industry.toLowerCase()}
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

      {/* Related Industries */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-lg font-bold text-benefique-navy mb-4 text-center">Other Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Radiology & Imaging', path: '/industries/radiology' },
              { name: 'Dental Practices', path: '/industries/dental' },
              { name: 'Veterinary Clinics', path: '/industries/veterinary' },
              { name: 'Marine Services', path: '/industries/marine-services' },
            ].filter(ind => ind.name !== industry).map((ind) => (
              <Link
                key={ind.name}
                href={ind.path}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-benefique-orange/10 hover:text-benefique-orange transition"
              >
                {ind.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-benefique-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your {industry} Business?</h2>
          <p className="text-blue-100 mb-8">
            Schedule a free consultation to see how we can help.
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
