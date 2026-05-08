import ScrollAnimation from './ScrollAnimation'

function YearBadge({ year, className = '' }) {
  let parts = null
  if (year.includes('至今')) {
    parts = [year.replace('至今', ''), '至今']
  } else if (year.includes('-')) {
    parts = year.split('-')
  }

  if (parts) {
    return (
      <span className={`inline-flex flex-col items-center rounded-full bg-dark border border-neon-green/40 font-bold text-neon-green ${className}`}>
        <span className="leading-tight">{parts[0]}</span>
        <span className="w-4 h-px bg-neon-green/40" />
        <span className="leading-tight">{parts[1]}</span>
      </span>
    )
  }

  return (
    <span className={`inline-block rounded-full bg-dark border border-neon-green/40 font-bold text-neon-green whitespace-nowrap ${className}`}>
      {year}
    </span>
  )
}

const experiences = [
  {
    year: '2026至今',
    title: 'OPC',
    desc: 'AI 正以前所未有的力量，掀起全行业的变革浪潮，每一个赛道都在被重新定义。',
    tags: ['一人公司', 'Vibe Coding', 'Agent'],
  },
  {
    year: '2012-2025',
    title: '产品经理',
    desc: '先后在不同行业、不同领域担任产品经理，包括不限于硬件设备人机交互、海外互联网软件产品、电商产品、SAAS产品等。',
    tags: ['产品经理', '用户体验', '项目管理', '业务落地'],
  },
  {
    year: '2009',
    title: 'Discuz! 官方版主',
    desc: '当时全国最大开源社区（BBS）建站系统，担任官方社区版主，且文章登上《站长》杂志。',
    tags: ['Discuz', 'BBS', '站长'],
  },
  {
    year: '2003',
    title: '个人站长',
    desc: 'BBS、地方垂直站、影视站、英语站点等多种类型网站的创建和运营。',
    tags: ['站长', 'SEO', '运营'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.15em] text-center mb-16">
            <span className="gradient-text">职业历程</span>
          </h2>
        </ScrollAnimation>

        <div className="relative">
          {/* Center vertical line - desktop */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-white/10 hidden md:block" />
          {/* Mobile line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10 md:hidden" />

          <div className="space-y-8 md:space-y-0">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={exp.year} className="relative md:flex md:items-start md:min-h-[140px]">
                  {/* Year badge on timeline - desktop */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-4 z-10 hidden md:block">
                    <YearBadge year={exp.year} className="px-3 py-1.5 text-xs" />
                  </div>

                  {/* Year badge on timeline - mobile */}
                  <div className="absolute left-0 top-4 z-10 md:hidden">
                    <YearBadge year={exp.year} className="px-2 py-1 text-[10px]" />
                  </div>

                  {/* Desktop card */}
                  <div className={`hidden md:block md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                    <ScrollAnimation delay={i * 0.15}>
                      <div className="group card-glow rounded-2xl border border-white/10 bg-dark-card/60 backdrop-blur-sm p-6 hover:bg-dark-surface/60 hover:border-neon-green/20 transition-all duration-300 text-left">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-white/50 leading-relaxed mb-4">
                          {exp.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-3 py-1 rounded-full border border-neon-green/20 text-neon-green/70 bg-neon-green/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>

                  {/* Mobile card */}
                  <div className="md:hidden pl-14">
                    <ScrollAnimation delay={i * 0.15}>
                      <div className="group card-glow rounded-2xl border border-white/10 bg-dark-card/60 backdrop-blur-sm p-5 hover:bg-dark-surface/60 hover:border-neon-green/20 transition-all duration-300">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-white/50 leading-relaxed mb-3">
                          {exp.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-3 py-1 rounded-full border border-neon-green/20 text-neon-green/70 bg-neon-green/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
