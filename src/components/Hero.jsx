import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'

const roles = ['产品经理', 'OPC', 'AI探索者', '文艺中年']

export default function Hero() {
  const currentRole = useTypewriter(roles, 120, 80, 2000)

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen px-4 sm:px-6"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-amber-gold/30 bg-dark-card/60 backdrop-blur-sm"
          >
            <span className="w-2.5 h-2.5 bg-amber-gold rounded-full pulse-dot" />
            <span className="text-xs uppercase tracking-wider text-amber-gold">
              开放协作中
            </span>
          </motion.div>

          {/* Name */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="block text-white">举个啥栗子</span>
            </h1>

            {/* Typewriter */}
            <div className="flex items-center gap-2 text-lg sm:text-xl text-white/70 h-8">
              <span className="gradient-text font-medium">{currentRole}</span>
              <span className="w-[2px] h-5 bg-amber-gold cursor-blink inline-block" />
            </div>
          </div>

          {/* Intro card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-dark-card/60 backdrop-blur-sm p-5 sm:p-6 max-w-lg"
          >
            <p className="text-sm sm:text-base text-white/60 leading-relaxed">
              10 年 + 产品经理从业沉淀，深耕 AI 产品实战与落地应用。跳出职场固有框架，躬身入局 OPC 创业赛道。信奉以产品视角洞见行业趋势，借 AI 之势拓新破局，按自己的节奏定义人生赛道。
            </p>
          </motion.div>

          {/* Tagline cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-4 gap-2 sm:gap-3 max-w-lg"
          >
            {['不搞培训', '不卖课程', '举个栗子', '唠点干货'].map((item) => (
              <span
                key={item}
                className="px-3 py-2 rounded-xl border border-amber-gold/20 bg-amber-gold/5 text-xs sm:text-sm text-amber-gold/80 text-center"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Avatar card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glow behind avatar */}
            <div className="absolute -inset-8 bg-gradient-to-br from-amber-gold/20 to-purple-accent/20 rounded-full blur-3xl" />
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border-2 border-amber-gold/20 overflow-hidden bg-dark-card">
              <img
                src={`${import.meta.env.BASE_URL}avatar.jpeg`}
                alt="举个啥栗子"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border border-purple-accent/20 animate-[spin_20s_linear_infinite]" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="text-white/30"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
