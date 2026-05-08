import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { categories, articles } from '../data/articles'

export default function Insight() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back to home */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-neon-green transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          返回首页
        </Link>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">栗子洞察</span>
          </h1>
          <p className="text-sm sm:text-base text-white/50 leading-relaxed max-w-2xl mx-auto">
            不仅看 AI 的热闹，更要看商业落地的门道。在这里，带你剥开 AI 的内核，寻找增效的真栗子。
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {categories.map((cat, i) => {
            const count = articles.filter((a) => a.category === cat.slug).length
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  to={`/insight/${cat.slug}`}
                  className="group block rounded-2xl border border-white/10 bg-dark-card/60 backdrop-blur-sm p-6 hover:bg-dark-surface/60 hover:border-neon-green/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-neon-green transition-colors">
                      {cat.name}
                    </h3>
                    <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-neon-green transition-colors mt-1" />
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed mb-3">
                    {cat.desc}
                  </p>
                  <span className="text-xs text-white/20">
                    {count > 0 ? `${count} 篇文章` : '即将上线'}
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
