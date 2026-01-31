import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Insights & Resources on Accounting & Tax',
  description: 'Practical advice on accounting, tax planning, and financial strategy for small businesses. Expert insights from Benefique Tax & Accounting.',
  alternates: {
    canonical: 'https://www.benefique.com/blog',
  },
  openGraph: {
    title: 'Blog | Benefique Tax & Accounting',
    description: 'Practical advice on accounting, tax planning, and financial strategy for small businesses.',
    url: 'https://www.benefique.com/blog',
  },
}

import Link from 'next/link'

export default function Blog() {
  const posts = [
    { title: 'S-Corp Election: Is It Right for Your Florida Business?', excerpt: 'S-Corp election can save Florida business owners $5K-$20K yearly in self-employment taxes—but only if your profit exceeds $100K.', date: '2026-01-30', slug: 's-corp-election', published: true },
    { title: 'Cash Flow Forecasting 101: A Practical Guide for Business Owners', excerpt: 'Learn cash flow forecasting for your small business with this practical guide. Get step-by-step instructions, free templates, and expert CFO guidance.', date: '2026-01-30', slug: 'cash-flow-forecasting', published: true },
    { title: 'December Financials: What to Review Before Year-End', excerpt: 'Key financial checkpoints every business owner should review before closing the books on the year.', date: '2025-12-15', slug: 'december-financials', published: false },
    { title: 'R&D Tax Credits: Hidden Money for Healthcare Practices', excerpt: "Many healthcare businesses miss out on significant R&D credits. Here's how to identify and claim them.", date: '2025-10-15', slug: 'rd-tax-credits', published: false },
    { title: 'Multi-Location Financial Management', excerpt: 'Best practices for businesses operating across multiple locations or entities.', date: '2025-08-05', slug: 'multi-location-management', published: false },
  ]

  return (
    <div>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-benefique-orange/10 text-benefique-orange px-3 py-1 rounded-full text-sm font-medium mb-6">
            <span>📝</span> Blog
          </div>
          <h1 className="text-4xl font-bold text-benefique-navy mb-4">Insights & Resources</h1>
          <p className="text-xl text-gray-600">Practical advice on accounting, tax, and financial strategy</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {posts.filter(p => p.published).map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition cursor-pointer">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h2 className="text-xl font-bold text-benefique-navy mb-2 hover:text-benefique-orange transition">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="text-benefique-orange font-medium hover:underline">
                    Read more →
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
