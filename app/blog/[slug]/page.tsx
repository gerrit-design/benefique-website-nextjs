import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Blog post metadata mapping
const blogPosts: Record<string, { file: string; published: boolean }> = {
  's-corp-election': {
    file: 's-corp-election-guide-V3.md',
    published: true
  },
  'cash-flow-forecasting': {
    file: 'cash-flow-forecasting-101-REVISED.md',
    published: true
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug]
  
  if (!post || !post.published) {
    return {}
  }

  try {
    const filePath = path.join(process.cwd(), 'public/content/blog', post.file)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    return {
      title: `${data.title} | Benefique Tax & Accounting`,
      description: data.description || data.excerpt,
      alternates: {
        canonical: `https://www.benefique.com/blog/${params.slug}`,
      },
      openGraph: {
        title: data.title,
        description: data.description || data.excerpt,
        url: `https://www.benefique.com/blog/${params.slug}`,
        type: 'article',
        publishedTime: data.date,
        authors: [data.author],
      },
    }
  } catch {
    return {}
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post || !post.published) {
    notFound()
  }

  let data: any
  let content: string

  try {
    const filePath = path.join(process.cwd(), 'public/content/blog', post.file)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const parsed = matter(fileContents)
    data = parsed.data
    content = parsed.content
  } catch (error) {
    console.error('Error reading blog post:', error)
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-benefique-orange hover:underline mb-4 inline-block">
            ← Back to Blog
          </Link>
          
          <div className="inline-flex items-center gap-2 bg-benefique-orange/10 text-benefique-orange px-3 py-1 rounded-full text-sm font-medium mb-6">
            {data.categories?.[0] || 'Article'}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-benefique-navy mb-4 leading-tight">
            {data.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600">
            <span>{data.author}</span>
            <span>•</span>
            <time dateTime={data.date}>{new Date(data.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</time>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg prose-benefique max-w-none
            prose-headings:text-benefique-navy 
            prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-benefique-orange prose-a:no-underline hover:prose-a:underline
            prose-strong:text-benefique-navy prose-strong:font-semibold
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-gray-700 prose-li:my-2
            prose-blockquote:border-l-4 prose-blockquote:border-benefique-orange 
            prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
            prose-code:text-benefique-orange prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-table:border-collapse prose-table:w-full
            prose-th:bg-benefique-navy prose-th:text-white prose-th:p-3 prose-th:text-left
            prose-td:border prose-td:border-gray-300 prose-td:p-3
          ">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-br from-benefique-navy to-blue-900 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to talk about your situation?</h3>
            <p className="text-lg mb-6 text-blue-100">
              Let's discuss how these strategies apply to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-benefique-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition"
              >
                Contact Us →
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition backdrop-blur-sm"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
