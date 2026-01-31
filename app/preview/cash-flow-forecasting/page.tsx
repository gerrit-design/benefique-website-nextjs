import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'

export default function CashFlowArticle() {
  const filePath = path.join(process.cwd(), 'content/blog/cash-flow-forecasting-101-REVISED.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/preview" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Preview Index
        </Link>
        
        <article className="prose prose-lg max-w-none">
          <div className="mb-8 pb-8 border-b">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{data.title}</h1>
            <div className="text-sm text-gray-600">
              <p>By {data.author} • {data.date}</p>
              <p className="mt-2 text-gray-500">{data.description}</p>
            </div>
          </div>
          
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900" {...props} />,
              p: ({node, ...props}) => <p className="mb-4 text-gray-700 leading-relaxed" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
              li: ({node, ...props}) => <li className="text-gray-700" {...props} />,
              a: ({node, ...props}) => <a className="text-blue-600 hover:text-blue-800 underline" {...props} />,
              strong: ({node, ...props}) => <strong className="font-semibold text-gray-900" {...props} />,
              blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 my-4" {...props} />,
              table: ({node, ...props}) => <div className="overflow-x-auto my-6"><table className="min-w-full divide-y divide-gray-300" {...props} /></div>,
              thead: ({node, ...props}) => <thead className="bg-gray-50" {...props} />,
              th: ({node, ...props}) => <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900" {...props} />,
              td: ({node, ...props}) => <td className="px-4 py-3 text-sm text-gray-700 border-t" {...props} />,
            }}
          >
            {content}
          </ReactMarkdown>
        </article>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Review Checklist:</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>✅ EA credential (not CPA)</li>
            <li>✅ Date: 2026-01-30</li>
            <li>✅ Meta description added</li>
            <li>✅ 12+ internal links (marked with #)</li>
            <li>✅ FAQ section for featured snippets</li>
            <li>✅ Florida local SEO mentions</li>
            <li>✅ Mid-article CTA + improved final CTA</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
