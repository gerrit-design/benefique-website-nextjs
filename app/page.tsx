import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Benefique Tax & Accounting | Full-Service Accounting & Fractional CFO | South Florida',
  description: 'Stop drowning in your own books. Full-service accounting for businesses that want to grow — books, taxes, payroll, reporting. Books closed by the 7th. Serving South Florida.',
  alternates: {
    canonical: 'https://www.benefique.com',
  },
  openGraph: {
    title: 'Benefique Tax & Accounting | Full-Service Accounting & Fractional CFO',
    description: 'Stop drowning in your own books. Full-service accounting for businesses that want to grow — books, taxes, payroll, reporting. Books closed by the 7th.',
    url: 'https://www.benefique.com',
  },
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-benefique-orange/10 text-benefique-orange px-3 py-1 rounded-full text-sm font-medium mb-6">
              <span>📍</span> Serving South Florida
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-benefique-navy leading-tight mb-6">
              Stop Drowning in<br />Your Own Books
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Full-service accounting for businesses that want to grow — not drown in spreadsheets.
            </p>
            <p className="text-gray-600 mb-8">
              You didn&apos;t go into business to become an accountant. We take over your entire accounting 
              function — books, taxes, payroll, reporting — so you can focus on what actually makes you money.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <Link
                href="/contact"
                className="bg-benefique-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition inline-flex items-center gap-2"
              >
                See If We&apos;re a Fit <span>→</span>
              </Link>
              <Link
                href="/services"
                className="border-2 border-benefique-navy text-benefique-navy px-6 py-3 rounded-lg font-semibold hover:bg-benefique-navy hover:text-white transition"
              >
                See What&apos;s Included
              </Link>
            </div>
            
            <p className="text-sm text-gray-500">
              No obligation. We&apos;ll tell you honestly if we&apos;re the right fit.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            Why businesses choose Benefique
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              'Books closed by the 7th, review call by the 10th',
              '24-hour response guarantee',
              'Healthcare & service business specialists',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-benefique-orange/10 text-benefique-orange px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-benefique-orange rounded-full"></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sound Familiar? */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-benefique-navy mb-4">Sound Familiar?</h2>
          <p className="text-gray-600 mb-10">Most business owners we talk to are dealing with at least one of these:</p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              { emoji: '😩', text: "You're doing your own books nights and weekends — and still behind" },
              { emoji: '😤', text: 'Your bookkeeper keeps making mistakes you have to fix' },
              { emoji: '🤷', text: "You don't actually know if you're profitable until tax time" },
              { emoji: '💸', text: "The business is showing a profit — but where's the cash?" },
              { emoji: '😰', text: 'Tax season is a scramble every single year' },
              { emoji: '📊', text: "You've outgrown DIY but aren't sure what \"real\" accounting looks like" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide text-center mb-2">What You Get</p>
          <h2 className="text-3xl font-bold text-benefique-navy text-center mb-4">A Complete Accounting Department</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Not just a bookkeeper. Not just a tax preparer. A full team handling everything — so you never have to think about it.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📚', title: 'Full Bookkeeping', desc: 'Bank reconciliation, credit cards, all transactions categorized accurately — every month, without fail.' },
              { icon: '📅', title: 'Monthly Close by the 7th', desc: 'Books closed by the 7th, review call by the 10th. You always know where you stand.' },
              { icon: '💰', title: 'Payroll Processing', desc: 'Employee and contractor payroll handled. On time, every time, with all the filings done.' },
              { icon: '📋', title: 'AP Management', desc: 'Bills tracked, approved, and paid on schedule. No more missed payments or late fees.' },
              { icon: '📊', title: 'Financial Reporting', desc: 'P&L, Balance Sheet, Cash Flow — clean, accurate, and actually useful for decisions.' },
              { icon: '🎯', title: 'Tax Preparation & Planning', desc: 'Not just filing — proactive planning throughout the year to minimize what you owe.' },
              { icon: '📱', title: 'Real-Time Dashboard', desc: 'See your numbers anytime you want. No waiting. No asking. Just log in and know.' },
              { icon: '📞', title: 'Monthly Review Call', desc: 'Walk through your numbers together. Ask questions. Get advice. Stay informed.' },
              { icon: '✅', title: 'Sales Tax & 1099s', desc: 'All compliance handled. Sales tax filed. 1099s sent. No surprises, no penalties.' },
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold text-benefique-navy mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-benefique-navy font-semibold mt-10">
            This is what a real accounting department looks like.
          </p>
          <div className="text-center mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-benefique-orange font-semibold hover:underline"
            >
              See If We&apos;re a Fit <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-benefique-navy text-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm font-semibold text-orange-300 uppercase tracking-wide text-center mb-2">How It Works</p>
          <h2 className="text-3xl font-bold text-center mb-4">Simple Process. No Runaround.</h2>
          <p className="text-blue-100 text-center mb-12 max-w-2xl mx-auto">
            We make it easy to get started. No lengthy sales pitches. No pressure. Just a straightforward conversation to see if we&apos;re the right fit.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Quick Application', desc: "Fill out the short form below. Takes 60 seconds. Tells us about your business and what you're dealing with." },
              { num: '2', title: 'Discovery Call', desc: "We'll schedule a 20-minute call. You'll tell us about your situation. We'll tell you honestly if we can help — and how." },
              { num: '3', title: 'Custom Proposal', desc: "If we're a fit, you'll get a clear proposal with exactly what's included. No surprises. No hidden fees. Decide on your timeline." },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 bg-benefique-orange rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-blue-100 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Application */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-benefique-navy mb-6">Let&apos;s See If We&apos;re the Right Fit</h2>
              <p className="text-gray-600 mb-6">
                We&apos;re not the cheapest option — and we&apos;re not trying to be. We work with established businesses 
                that want reliable, proactive accounting without the headaches.
              </p>
              
              <ul className="space-y-3">
                {[
                  'Full-service accounting — books, payroll, taxes, all handled',
                  'Books closed by the 7th, review call by the 10th',
                  'Proactive tax planning — not just compliance, actual savings',
                  'Real-time dashboards — see your numbers anytime, no asking',
                  'One team, one relationship — no handoffs, no runaround',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-benefique-orange">●</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-benefique-navy mb-2">Quick Application</h3>
              <p className="text-gray-600 text-sm mb-6">Takes 60 seconds. We&apos;ll reach out within 24 hours.</p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-benefique-orange focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-benefique-orange focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                  <input
                    type="text"
                    placeholder="Acme Medical Group"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-benefique-orange focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Annual Revenue</label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-benefique-orange focus:border-transparent text-gray-600">
                    <option>Select range...</option>
                    <option>Under $500K</option>
                    <option>$500K - $1M</option>
                    <option>$1M - $5M</option>
                    <option>$5M - $10M</option>
                    <option>$10M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Accounting Situation</label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-benefique-orange focus:border-transparent text-gray-600">
                    <option>Select one...</option>
                    <option>Doing it myself</option>
                    <option>Have a bookkeeper</option>
                    <option>Have an accountant/CPA</option>
                    <option>Nothing in place</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Biggest Financial Headache Right Now?</label>
                  <textarea
                    rows={3}
                    placeholder="What's keeping you up at night?"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-benefique-orange focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-benefique-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
                >
                  Submit Application
                </button>
                <p className="text-xs text-gray-500 text-center">
                  No spam. No sales pressure. Just an honest conversation.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
