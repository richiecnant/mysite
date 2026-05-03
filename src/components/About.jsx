import { Bot, Target, Palette } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

const cards = [
  {
    icon: Bot,
    title: 'AI工具',
    desc: '熟练运用各类 AI 工具提升效率，探索 AIGC 在业务场景中的落地可能。',
    tags: ['Prompt Engineering', 'AI 应用', '效率工具'],
  },
  {
    icon: Target,
    title: '业务落地',
    desc: '从需求分析到产品交付，擅长将想法转化为可执行的方案并推动落地。',
    tags: ['需求分析', '项目管理', '数据驱动'],
  },
  {
    icon: Palette,
    title: '产品设计',
    desc: '关注用户体验，善于从用户视角出发设计产品，追求简洁优雅的解决方案。',
    tags: ['用户研究', '交互设计', '产品策略'],
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.15em] text-center mb-16">
            <span className="gradient-text">关于我</span>
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <ScrollAnimation key={card.title} delay={i * 0.15}>
              <div className="group card-glow rounded-2xl border border-white/10 bg-dark-card/60 backdrop-blur-sm p-6 sm:p-8 h-full hover:bg-dark-surface/60 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-gold/10 text-amber-gold group-hover:bg-amber-gold/20 transition-colors">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-gold">
                    {card.title}
                  </h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  {card.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-purple-accent/30 text-purple-accent/80 bg-purple-accent/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
