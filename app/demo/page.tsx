'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Demo() {
  const [activeTab, setActiveTab] = useState<'cfo' | 'bft'>('cfo')
  
  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-benefique-orange/10 text-benefique-orange px-3 py-1 rounded-full text-sm font-medium mb-6">
            <span>📊</span> Sample Reports
          </div>
          <h1 className="text-4xl font-bold text-benefique-navy mb-4">See What You&apos;ll Get</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Every Fractional CFO client receives custom financial reports — clear insights in owner terms, not accountant-speak.
          </p>
        </div>
      </section>

      {/* Report Selector */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-4 py-4">
            <button
              onClick={() => setActiveTab('cfo')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === 'cfo'
                  ? 'bg-benefique-navy text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              📊 CFO Report
            </button>
            <button
              onClick={() => setActiveTab('bft')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === 'bft'
                  ? 'bg-benefique-navy text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              📰 The Benefique Financial Times™
            </button>
          </div>
        </div>
      </section>

      {/* Report Description */}
      <section className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          {activeTab === 'cfo' ? (
            <div className="flex items-start gap-6">
              <div className="text-4xl">📊</div>
              <div>
                <h2 className="text-2xl font-bold text-benefique-navy mb-2">CFO Report</h2>
                <p className="text-gray-600">
                  A visual dashboard showing your business health at a glance. Cash position, revenue trends, 
                  profitability metrics, debt coverage, and action items — all in one place. Updated weekly.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-6">
              <div className="text-4xl">📰</div>
              <div>
                <h2 className="text-2xl font-bold text-benefique-navy mb-2">The Benefique Financial Times™</h2>
                <p className="text-gray-600">
                  A newspaper-style report that tells the story of your business. Lead articles explain what&apos;s happening 
                  and why it matters. Financial tables, trend analysis, and action items — written like a CFO briefing.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Embedded Report */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            {/* Demo Notice */}
            <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-center">
              <p className="text-sm text-amber-800">
                <span className="font-semibold">📋 Demo Report</span> — Sample data shown. Your reports will reflect your actual business.
              </p>
            </div>
            
            {/* Iframe */}
            <div className="relative" style={{ height: '800px' }}>
              <iframe
                src={activeTab === 'cfo' 
                  ? 'https://bft-demo-seven.vercel.app' 
                  : 'https://bft-newspaper-demo.vercel.app'
                }
                className="w-full h-full border-0"
                title={activeTab === 'cfo' ? 'CFO Report Demo' : 'Benefique Financial Times Demo'}
              />
            </div>
            
            {/* Open in New Tab */}
            <div className="bg-gray-50 border-t border-gray-200 px-4 py-3 text-center">
              <a
                href={activeTab === 'cfo' 
                  ? 'https://bft-demo-seven.vercel.app' 
                  : 'https://bft-newspaper-demo.vercel.app'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-benefique-orange font-semibold hover:underline inline-flex items-center gap-2"
              >
                Open full report in new tab <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-benefique-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want reports like this for your business?</h2>
          <p className="text-blue-100 mb-8">
            Every Fractional CFO client gets custom weekly reports. Let&apos;s talk about what insights would help you most.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-benefique-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </section>
    </div>
  )
}
