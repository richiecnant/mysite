import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, FileText } from 'lucide-react'
import { categories, articles } from '../data/articles'

export default function ArticleList() {
  const { category } = useParams()
  const cat = categories.find((c) => c.slug === category)
  const catArticles = articles.filter((a) => a.category === category)

  if (!cat) {
    return (
      <section className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/50">分类不存在</p>
          <Link to="/insight" className="text-amber-gold hover:underline mt-4 inline-block">
            返回洞察主页
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          to="/insight"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-amber-gold transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          返回洞察主页
        </Link>

        {/* Category title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            <span className="gradient-text">{cat.name}</span>
          </h1>
          <p className="text-sm text-white/40">{cat.desc}</p>
        </motion.div>

        {/* Article list */}
        {catArticles.length > 0 ? (
          <div className="space-y-3">
            {catArticles.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Link
                  to={`/insight/${category}/${article.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-dark-card/60 backdrop-blur-sm p-5 hover:bg-dark-surface/60 hover:border-amber-gold/20 transition-all duration-300"
                >
                  <FileText className="h-5 w-5 text-white/20 group-hover:text-amber-gold transition-colors shrink-0" />
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-amber-gold transition-colors truncate">
                      {article.title}
                    </h3>
                    {article.date && (
                      <span className="text-xs text-white/30">{article.date}</span>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-white/30 text-sm">文章即将上线，敬请期待</p>
          </div>
        )}
      </div>
    </section>
  )
}
