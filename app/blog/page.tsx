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

export default function Blog() {
  const posts = [
    { title: 'December Financials: What to Review Before Year-End', excerpt: 'Key financial checkpoints every business owner should review before closing the books on the year.', date: '2025-12-15', slug: 'december-financials' },
    { title: 'S-Corp Election: Is It Right for Your Business?', excerpt: 'Understanding the tax implications and benefits of S-Corp status for small business owners.', date: '2025-11-20', slug: 's-corp-election' },
    { title: 'R&D Tax Credits: Hidden Money for Healthcare Practices', excerpt: "Many healthcare businesses miss out on significant R&D credits. Here's how to identify and claim them.", date: '2025-10-15', slug: 'rd-tax-credits' },
    { title: 'Cash Flow Forecasting 101', excerpt: 'A practical guide to predicting and managing your business cash flow.', date: '2025-09-10', slug: 'cash-flow-forecasting' },
    { title: 'Multi-Location Financial Management', excerpt: 'Best practices for businesses operating across multiple locations or entities.', date: '2025-08-05', slug: 'multi-location-management' },
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
            {posts.map(post => (
              <article key={post.slug} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h2 className="text-xl font-bold text-benefique-navy mb-2 hover:text-benefique-orange cursor-pointer transition">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <span className="text-benefique-orange font-medium hover:underline cursor-pointer">
                  Read more →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
