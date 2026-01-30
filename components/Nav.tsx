'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Nav() {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path
  const [mobileOpen, setMobileOpen] = useState(false)
  
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex flex-col">
          <span className="text-2xl md:text-3xl font-black text-benefique-navy tracking-wider" style={{ fontFamily: 'Georgia, Times, serif' }}>BENEFIQUE</span>
          <span className="text-xs text-gray-500 tracking-wide font-medium">Tax & Accounting</span>
          <span className="text-[10px] md:text-xs text-benefique-orange font-semibold italic mt-0.5">Real-time accounting. Tax-ready any day.</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            ['/services', 'Services'],
            ['/demo', 'Sample Reports'],
            ['/testimonials', 'Testimonials'],
            ['/about', 'About'],
          ].map(([path, label]) => (
            <Link
              key={path}
              href={path}
              className={`text-sm font-medium transition-colors ${
                isActive(path) ? 'text-benefique-navy' : 'text-gray-600 hover:text-benefique-navy'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-benefique-orange text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
          >
            Apply to Work With Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">
          <Link href="/services" className="block text-gray-600" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link href="/demo" className="block text-gray-600" onClick={() => setMobileOpen(false)}>Sample Reports</Link>
          <Link href="/testimonials" className="block text-gray-600" onClick={() => setMobileOpen(false)}>Testimonials</Link>
          <Link href="/about" className="block text-gray-600" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/contact" className="block bg-benefique-orange text-white px-4 py-2 rounded-lg text-center font-semibold" onClick={() => setMobileOpen(false)}>
            Apply to Work With Us
          </Link>
        </div>
      )}
    </nav>
  )
}
