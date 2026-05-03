import { Mail, MessageCircle } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

function DouyinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .55.04.82.1v-3.5a6.37 6.37 0 0 0-.82-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 10.58 4.72 6.3 6.3 0 0 0 1.93-4.52V9.31a8.28 8.28 0 0 0 4.84 1.56V7.42a4.85 4.85 0 0 1-.91-.73z" />
    </svg>
  )
}

const contacts = [
  {
    icon: DouyinIcon,
    label: '抖音',
    value: '敬请期待',
    href: '#',
    scrollToTop: true,
    color: 'hover:text-white',
  },
  {
    icon: Mail,
    label: '邮箱',
    value: 'iant@vip.qq.com',
    href: 'mailto:iant@vip.qq.com',
    color: 'hover:text-amber-gold',
  },
  {
    icon: MessageCircle,
    label: '微信',
    value: 'ai_ant',
    href: '#',
    color: 'hover:text-green-400',
  },
  {
    icon: MessageCircle,
    label: '微信公众号',
    value: '微信搜索：举个啥栗子',
    href: '#',
    scrollToTop: true,
    color: 'hover:text-green-400',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.15em] text-center mb-4">
            <span className="gradient-text">联系我</span>
          </h2>
          <p className="text-center text-white/50 text-sm mb-16 max-w-md mx-auto">
            欢迎交流 AI、产品设计或任何有趣的想法
          </p>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contacts.map((c, i) => (
            <ScrollAnimation key={c.label} delay={i * 0.1}>
              <a
                href={c.href}
                onClick={c.scrollToTop ? (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) } : undefined}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-dark-card/60 backdrop-blur-sm p-6 hover:bg-dark-surface/60 hover:border-amber-gold/20 transition-all duration-300 ${c.color}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-white/50 group-hover:bg-amber-gold/10 group-hover:text-amber-gold transition-all">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="text-center">
                  <div className="text-xs text-white/40 mb-1">{c.label}</div>
                  <div className="text-sm text-white/70 font-medium">{c.value}</div>
                </div>
              </a>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
