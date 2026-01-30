import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-benefique-navy text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider" style={{ fontFamily: 'Georgia, Times, serif' }}>BENEFIQUE</span>
              <span className="text-xs text-gray-400 tracking-wide">Tax & Accounting</span>
              <span className="text-[10px] text-orange-400 font-semibold italic mt-0.5">Real-time accounting. Tax-ready any day.</span>
            </div>
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/benefique-tax-accounting/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Follow us on LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="https://app.benefique.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white">Terms of Service</a>
            <a href="https://app.benefique.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white">Privacy Policy</a>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
        
        {/* SEO Links Section */}
        <div className="py-6 grid md:grid-cols-2 gap-6 text-sm border-b border-white/10">
          {/* Locations */}
          <div>
            <span className="text-gray-500 text-xs uppercase tracking-wider">Locations</span>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              <Link href="/davie-accounting" className="text-gray-400 hover:text-white transition">Davie</Link>
              <Link href="/fort-lauderdale-accounting" className="text-gray-400 hover:text-white transition">Fort Lauderdale</Link>
              <Link href="/weston-accounting" className="text-gray-400 hover:text-white transition">Weston</Link>
              <Link href="/plantation-accounting" className="text-gray-400 hover:text-white transition">Plantation</Link>
              <Link href="/miramar-accounting" className="text-gray-400 hover:text-white transition">Miramar</Link>
              <Link href="/hollywood-accounting" className="text-gray-400 hover:text-white transition">Hollywood</Link>
              <Link href="/aventura-accounting" className="text-gray-400 hover:text-white transition">Aventura</Link>
            </div>
          </div>
          
          {/* Industries */}
          <div>
            <span className="text-gray-500 text-xs uppercase tracking-wider">Industries</span>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              <Link href="/industries/radiology" className="text-gray-400 hover:text-white transition">Radiology</Link>
              <Link href="/industries/dental" className="text-gray-400 hover:text-white transition">Dental</Link>
              <Link href="/industries/veterinary" className="text-gray-400 hover:text-white transition">Veterinary</Link>
              <Link href="/industries/marine-services" className="text-gray-400 hover:text-white transition">Marine Services</Link>
              <Link href="/services/real-time-accounting" className="text-gray-400 hover:text-white transition">Real-Time Accounting</Link>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 pt-6">
          © {new Date().getFullYear()} Benefique Capital LLC. All rights reserved. | Davie, Florida
        </div>
      </div>
    </footer>
  )
}
