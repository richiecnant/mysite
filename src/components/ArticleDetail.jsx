import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { categories, articles } from '../data/articles'

const SECTION_RE = /^(引言[：:]|结语[：:]|一[、.]|二[、.]|三[、.]|四[、.]|五[、.]|六[、.])/
const SUB_SECTION_RE = /^(\d+\.\s+.+)/
const STANDALONE_RE = /^.{2,20}$/
const BOLD_RE = /\*\*(.+?)\*\*/g
const MD_HEADER_RE = /^(#{1,3})\s+(.+)$/
const MD_LIST_RE = /^[-*]\s+(.+)$/
const MD_QUOTE_RE = /^>\s*(.*)$/

function renderInline(text) {
  const parts = text.split(BOLD_RE)
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
  )
}

function renderContent(content) {
  const blocks = content.split('\n\n')
  return blocks.map((block, i) => {
    const lines = block.split('\n')
    const firstLine = lines[0].trim()

    if (firstLine === '---') {
      return <hr key={i} className="my-8 border-white/10" />
    }

    // Markdown headers: # ## ###
    const headerMatch = firstLine.match(MD_HEADER_RE)
    if (headerMatch) {
      const level = headerMatch[1].length
      const text = headerMatch[2]
      const restLines = lines.slice(1)
      return (
        <div key={i} className={level === 1 ? 'mt-10 mb-5' : 'mt-8 mb-4'}>
          <h2 className="text-lg sm:text-xl font-bold text-neon-green mb-1">{renderInline(text)}</h2>
          {restLines.map((line, j) => (
            <p key={j} className="text-white/60 leading-relaxed mt-1">{renderInline(line)}</p>
          ))}
        </div>
      )
    }

    // Blockquotes: > text
    if (firstLine.startsWith('>')) {
      return (
        <div key={i} className="mb-6 pl-4 border-l-2 border-neon-green/40">
          {lines.map((line, j) => {
            const quoteText = line.replace(/^>\s*/, '')
            return (
              <p key={j} className="text-white/50 leading-relaxed italic">{renderInline(quoteText)}</p>
            )
          })}
        </div>
      )
    }

    // List items: - text or * text
    if (MD_LIST_RE.test(firstLine)) {
      return (
        <ul key={i} className="mb-4 space-y-1.5">
          {lines.map((line, j) => {
            const match = line.trim().match(MD_LIST_RE)
            if (match) {
              return (
                <li key={j} className="flex items-start gap-2 text-white/60 leading-relaxed">
                  <span className="text-neon-green mt-0.5 shrink-0">▸</span>
                  <span>{renderInline(match[1])}</span>
                </li>
              )
            }
            return null
          })}
        </ul>
      )
    }

    if (firstLine.startsWith('【') && firstLine.endsWith('】')) {
      return (
        <div key={i} className="mb-6 pl-4 border-l-2 border-neon-green/40">
          {lines.map((line, j) => (
            <p key={j} className="text-white/50 leading-relaxed italic">{renderInline(line.replace(/^【|】$/g, ''))}</p>
          ))}
        </div>
      )
    }

    if (SECTION_RE.test(firstLine)) {
      return (
        <div key={i} className="mt-8 mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-neon-green mb-1">{renderInline(firstLine)}</h2>
          {lines.slice(1).map((line, j) => (
            <p key={j} className="text-white/60 leading-relaxed mt-1">{renderInline(line)}</p>
          ))}
        </div>
      )
    }

    if (SUB_SECTION_RE.test(firstLine)) {
      return (
        <div key={i} className="mt-6 mb-3">
          {lines.map((line, j) => (
            <p key={j} className={j === 0 ? 'text-white/80 font-semibold leading-relaxed' : 'text-white/60 leading-relaxed mt-1'}>{renderInline(line)}</p>
          ))}
        </div>
      )
    }

    if (lines.length === 1 && STANDALONE_RE.test(firstLine) && !/[。！？，；：]$/.test(firstLine)) {
      return (
        <div key={i} className="mt-8 mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-neon-green mb-1">{renderInline(firstLine)}</h2>
        </div>
      )
    }

    return (
      <div key={i} className="mb-4">
        {lines.map((line, j) => (
          <p key={j} className="text-white/60 leading-relaxed">{renderInline(line)}</p>
        ))}
      </div>
    )
  })
}

export default function ArticleDetail() {
  const { category, slug } = useParams()
  const cat = categories.find((c) => c.slug === category)
  const article = articles.find((a) => a.slug === slug && a.category === category)

  if (!cat || !article) {
    return (
      <section className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/50">文章不存在</p>
          <Link to="/insight" className="text-neon-green hover:underline mt-4 inline-block">
            返回洞察主页
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-8 flex-wrap">
          <Link to="/" className="hover:text-neon-green transition-colors">首页</Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0" />
          <Link to="/insight" className="hover:text-neon-green transition-colors">栗子洞察</Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0" />
          <Link to={`/insight/${category}`} className="hover:text-neon-green transition-colors">{cat.name}</Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0" />
          <span className="text-white/60 truncate min-w-0">{article.title}</span>
        </nav>

        {/* Article */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {article.title}
          </h1>
          {article.date && (
            <p className="text-sm text-white/30 mb-8">{article.date}</p>
          )}
          <div className="max-w-none">
            {renderContent(article.content)}
          </div>
        </motion.article>
      </div>
    </section>
  )
}
