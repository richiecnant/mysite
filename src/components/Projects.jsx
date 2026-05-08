import ScrollAnimation from './ScrollAnimation'

const projects = [
  {
    name: '礼小夯',
    role: '礼品顾问',
    desc: '深耕全场景礼品甄选，适配节日、商务、亲友送礼等各类需求，精准洞察心意，定制专属高质感礼品方案，省心又有格调。',
    color: '#00ff88',
    icon: (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="gift-g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#00ff88" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="16" fill="url(#gift-g)" />
        <rect x="30" y="55" width="60" height="35" rx="4" fill="none" stroke="#00ff88" strokeWidth="2" />
        <rect x="30" y="50" width="60" height="10" rx="3" fill="none" stroke="#00ff88" strokeWidth="2" />
        <line x1="60" y1="50" x2="60" y2="90" stroke="#00ff88" strokeWidth="2" />
        <path d="M60 50 Q50 30 40 38 Q35 42 42 48" fill="none" stroke="#00ff88" strokeWidth="2" />
        <path d="M60 50 Q70 30 80 38 Q85 42 78 48" fill="none" stroke="#00ff88" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: '抖小文',
    role: '抖音口播文案大师',
    desc: '支持抖音视频文案一键提取、爆款脚本拆解与创意二创，适配各类赛道口播风格，帮你轻松写出抓人引流的优质文案。',
    color: '#a855f7',
    icon: (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="dou-g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="16" fill="url(#dou-g)" />
        <rect x="35" y="25" width="50" height="70" rx="6" fill="none" stroke="#a855f7" strokeWidth="2" />
        <polygon points="52,45 52,70 72,57.5" fill="#a855f7" opacity="0.6" />
        <path d="M75 35 Q80 25 82 40 Q84 55 78 45" fill="none" stroke="#a855f7" strokeWidth="2" />
        <line x1="42" y1="82" x2="55" y2="82" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: '哈小皮',
    role: '表情包制作达人',
    desc: '只需上传个人头像，一键智能生成 16 宫格趣味专属表情包，风格多样可随心搭配，打造独一无二的专属社交表情素材。',
    color: '#06b6d4',
    icon: (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="emoji-g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="16" fill="url(#emoji-g)" />
        <circle cx="60" cy="58" r="30" fill="none" stroke="#06b6d4" strokeWidth="2" />
        <circle cx="48" cy="50" r="3" fill="#06b6d4" />
        <circle cx="72" cy="50" r="3" fill="#06b6d4" />
        <path d="M46 68 Q60 80 74 68" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
        <rect x="25" y="25" width="14" height="14" rx="3" fill="none" stroke="#06b6d4" strokeWidth="1.5" opacity="0.5" />
        <rect x="81" y="25" width="14" height="14" rx="3" fill="none" stroke="#06b6d4" strokeWidth="1.5" opacity="0.5" />
        <rect x="25" y="81" width="14" height="14" rx="3" fill="none" stroke="#06b6d4" strokeWidth="1.5" opacity="0.5" />
        <rect x="81" y="81" width="14" height="14" rx="3" fill="none" stroke="#06b6d4" strokeWidth="1.5" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: '言小影',
    role: '口播数字人分身',
    desc: '一键快速打造高清逼真数字人形象，高效生成专业口播短视频，打造专属 AI 分身，省去真人出镜拍摄烦恼。',
    color: '#ec4899',
    icon: (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="avatar-g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="16" fill="url(#avatar-g)" />
        <circle cx="60" cy="42" r="16" fill="none" stroke="#ec4899" strokeWidth="2" />
        <path d="M30 90 Q30 68 60 68 Q90 68 90 90" fill="none" stroke="#ec4899" strokeWidth="2" />
        <circle cx="90" cy="30" r="8" fill="none" stroke="#ec4899" strokeWidth="1.5" opacity="0.5" />
        <line x1="90" y1="22" x2="90" y2="38" stroke="#ec4899" strokeWidth="1.5" opacity="0.5" />
        <line x1="82" y1="30" x2="98" y2="30" stroke="#ec4899" strokeWidth="1.5" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: '商小绘',
    role: '电商产品画师',
    desc: '专注各类商品电商详情图、主图、场景海报智能生成，适配多行业风格，一键出高清商用视觉图，省去复杂设计流程。',
    color: '#10b981',
    icon: (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="shop-g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="16" fill="url(#shop-g)" />
        <rect x="28" y="30" width="64" height="50" rx="4" fill="none" stroke="#10b981" strokeWidth="2" />
        <rect x="28" y="30" width="64" height="12" rx="4" fill="#10b981" opacity="0.15" />
        <circle cx="45" cy="62" r="6" fill="none" stroke="#10b981" strokeWidth="1.5" />
        <path d="M34 72 L42 60 L50 68 L58 56 L68 72" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="72" y="55" width="12" height="18" rx="2" fill="none" stroke="#10b981" strokeWidth="1.5" />
        <line x1="35" y1="90" x2="85" y2="90" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: '故小谣',
    role: '民间故事编剧',
    desc: '可根据指定主题、地域与风格，自动创作并生成完整民间故事解说文案与叙事短视频脚本，国风氛围感拉满。',
    color: '#a855f7',
    icon: (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="story-g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="16" fill="url(#story-g)" />
        <path d="M35 28 Q35 24 39 24 L81 24 Q85 24 85 28 L85 88 Q85 92 81 92 L45 92 Q35 92 35 82 Z" fill="none" stroke="#a855f7" strokeWidth="2" />
        <line x1="35" y1="24" x2="35" y2="88" stroke="#a855f7" strokeWidth="2" />
        <line x1="48" y1="38" x2="72" y2="38" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <line x1="48" y1="48" x2="68" y2="48" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <line x1="48" y1="58" x2="72" y2="58" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <line x1="48" y1="68" x2="60" y2="68" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M70 70 Q75 65 80 72 Q82 78 76 78 Q72 78 70 70" fill="#a855f7" opacity="0.3" />
      </svg>
    ),
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.15em] text-center mb-8">
            <span className="gradient-text">AI项目</span>
          </h2>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((p, i) => (
            <ScrollAnimation key={p.name} delay={i * 0.1}>
              <div className="group card-glow rounded-2xl border border-white/10 bg-dark-card/60 backdrop-blur-sm overflow-hidden hover:bg-dark-surface/60 hover:border-white/20 transition-all duration-300">
                {/* Image */}
                <div className="aspect-[16/9] bg-dark-surface/40 flex items-center justify-center p-8 sm:p-10">
                  {p.icon}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-white group-hover:text-neon-green transition-colors">
                      {p.name}
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-white/40">
                      {p.role}
                    </span>
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed mt-2 line-clamp-3">
                    {p.desc}
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/5">
                    <span className="text-xs text-neon-green/50">
                      在线体验，敬请期待中
                    </span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
