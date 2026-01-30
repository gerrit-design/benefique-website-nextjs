import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Schedule a Free Consultation',
  description: 'Ready to gain clarity in your finances? Contact Benefique Tax & Accounting for a free consultation. Based in Davie, FL, serving all of South Florida.',
  alternates: {
    canonical: 'https://www.benefique.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Benefique Tax & Accounting',
    description: 'Ready to gain clarity in your finances? Contact Benefique Tax & Accounting for a free consultation.',
    url: 'https://www.benefique.com/contact',
  },
}

export default function Contact() {
  return (
    <div>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-benefique-orange/10 text-benefique-orange px-3 py-1 rounded-full text-sm font-medium mb-6">
            <span>✉️</span> Contact
          </div>
          <h1 className="text-4xl font-bold text-benefique-navy mb-4">Let&apos;s Talk</h1>
          <p className="text-xl text-gray-600">See if we&apos;re the right fit for your business</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-benefique-navy mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Ready to gain clarity in your finances? Fill out the application and we&apos;ll 
                reach out within 24 hours to schedule a discovery call.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-benefique-orange/10 rounded-lg flex items-center justify-center text-2xl">📍</div>
                  <div>
                    <div className="font-semibold text-benefique-navy">Location</div>
                    <div className="text-gray-600">Davie, Florida</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-benefique-orange/10 rounded-lg flex items-center justify-center text-2xl">📧</div>
                  <div>
                    <div className="font-semibold text-benefique-navy">Email</div>
                    <div className="text-gray-600">hello@benefique.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-benefique-orange/10 rounded-lg flex items-center justify-center text-2xl">🌐</div>
                  <div>
                    <div className="font-semibold text-benefique-navy">Website</div>
                    <div className="text-gray-600">www.benefique.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-benefique-navy mb-2">Quick Application</h3>
              <p className="text-gray-600 text-sm mb-6">Takes 60 seconds. We&apos;ll reach out within 24 hours.</p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input type="text" placeholder="John Smith" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-benefique-orange focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-benefique-orange focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                  <input type="text" placeholder="Acme Medical Group" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-benefique-orange focus:border-transparent" />
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Biggest Financial Headache Right Now?</label>
                  <textarea rows={3} placeholder="What's keeping you up at night?" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-benefique-orange focus:border-transparent" />
                </div>
                <button type="submit" className="w-full bg-benefique-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
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
