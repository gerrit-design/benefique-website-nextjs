import Link from 'next/link'

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Blog Articles - Final Review
        </h1>
        <p className="text-gray-600 mb-8">Private preview for Gerrit</p>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Cash Flow Forecasting 101
            </h2>
            <p className="text-gray-600 mb-4">
              Grade: A- (Copywriter) | 8.5/10 (SEO) | B+ (Editor)
            </p>
            <div className="text-sm text-gray-500 mb-4">
              ~2,700 words | All fixes applied: EA credential, meta description, 12+ internal links, FAQ section
            </div>
            <Link 
              href="/preview/cash-flow-forecasting" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Read Article →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              S-Corp Election: Is It Right for Your Florida Business?
            </h2>
            <p className="text-gray-600 mb-4">
              Grade: A- (Copywriter) | 7.5/10 (SEO) | B+ (Editor) | A- (Tax Expert)
            </p>
            <div className="text-sm text-gray-500 mb-4">
              ~5,000 words | V3 FINAL: $100K threshold, real costs, multi-entity section, TL;DR, late election relief
            </div>
            <Link 
              href="/preview/s-corp-election" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Read Article →
            </Link>
          </div>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Review Notes:</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Both articles formatted with Tailwind CSS for clean reading</li>
            <li>• Check: EA credential, internal links, CTAs, meta descriptions</li>
            <li>• S-Corp includes TL;DR for skimmers + comprehensive content for AI</li>
            <li>• Ready for website integration once approved</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
