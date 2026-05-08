import { useMemo } from 'react'
import ScrollAnimation from './ScrollAnimation'

const skills = [
  { name: '通用产品', percent: 100, detail: '需求管理・产品规划・敏捷项目管理' },
  { name: 'AI落地', percent: 90, detail: 'RAG 知识库搭建・Agent智能体设计・工作流编排' },
  { name: '企业业务', percent: 90, detail: '行业解决方案设计・业务流程优化' },
  { name: 'Vibe Coding', percent: 80, detail: 'Claude Code・CodeBuddy・Trae' },
  { name: 'Vibe Design', percent: 50, detail: 'Figma・Stitch・原型快速交付' },
  { name: 'AI效率工具', percent: 80, detail: '多模态内容生成・Prompt工程・Gemini・GPT・Obsidian' },
]

const LEVELS = 5
const SVG_SIZE = 480
const CENTER = SVG_SIZE / 2
const RADIUS = 120
const LABEL_R = 168

function polarToCart(angle, r) {
  const rad = ((angle - 90) * Math.PI) / 180
  return {
    x: CENTER + r * Math.cos(rad),
    y: CENTER + r * Math.sin(rad),
  }
}

function getPolygonPoints(level) {
  const r = (RADIUS * level) / LEVELS
  return skills
    .map((_, i) => {
      const angle = (360 / skills.length) * i
      const p = polarToCart(angle, r)
      return `${p.x},${p.y}`
    })
    .join(' ')
}

function getDataPoints() {
  return skills
    .map((s, i) => {
      const angle = (360 / skills.length) * i
      const r = (RADIUS * s.percent) / 100
      return polarToCart(angle, r)
    })
    .map((p) => `${p.x},${p.y}`)
    .join(' ')
}

export default function Skills() {
  const gridLevels = useMemo(
    () => Array.from({ length: LEVELS }, (_, i) => getPolygonPoints(i + 1)),
    []
  )

  const axisLines = useMemo(
    () =>
      skills.map((_, i) => {
        const angle = (360 / skills.length) * i
        return polarToCart(angle, RADIUS)
      }),
    []
  )

  const labelData = useMemo(
    () =>
      skills.map((s, i) => {
        const angle = (360 / skills.length) * i
        const p = polarToCart(angle, LABEL_R)
        const xPct = (p.x / SVG_SIZE) * 100
        const yPct = (p.y / SVG_SIZE) * 100
        let translate = '-50%, -50%'
        if (xPct < 25) translate = '-100%, -50%'
        if (xPct > 75) translate = '0%, -50%'
        return { ...s, xPct, yPct, translate }
      }),
    []
  )

  return (
    <section id="skills" className="relative py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.15em] text-center mb-8">
            <span className="gradient-text">技能栈</span>
          </h2>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="rounded-2xl border border-white/10 bg-dark-card/60 backdrop-blur-sm p-4 sm:p-6">
            <div
              className="relative mx-auto"
              style={{ maxWidth: 560 }}
            >
              {/* SVG chart with 3D transform */}
              <div style={{ perspective: 800 }}>
                <div style={{ transform: 'rotateX(25deg)', transformOrigin: 'center 60%' }}>
                  <svg viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`} className="w-full block">
                    <defs>
                      <radialGradient id="radarBg" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#00ff88" stopOpacity="0.08" />
                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0.03" />
                      </radialGradient>
                      <linearGradient id="dataFill" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00ff88" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
                      </linearGradient>
                      <linearGradient id="dataStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00ff88" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>

                    {/* Grid polygons */}
                    {gridLevels.map((points, i) => (
                      <polygon
                        key={i}
                        points={points}
                        fill={i === LEVELS - 1 ? 'url(#radarBg)' : 'none'}
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="1"
                      />
                    ))}

                    {/* Axis lines */}
                    {axisLines.map((end, i) => (
                      <line
                        key={i}
                        x1={CENTER}
                        y1={CENTER}
                        x2={end.x}
                        y2={end.y}
                        stroke="rgba(255,255,255,0.06)"
                        strokeWidth="1"
                      />
                    ))}

                    {/* Data polygon */}
                    <polygon
                      points={getDataPoints()}
                      fill="url(#dataFill)"
                      stroke="url(#dataStroke)"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />

                    {/* Data points */}
                    {skills.map((s, i) => {
                      const angle = (360 / skills.length) * i
                      const r = (RADIUS * s.percent) / 100
                      const p = polarToCart(angle, r)
                      return (
                        <circle
                          key={i}
                          cx={p.x}
                          cy={p.y}
                          r="4"
                          fill="#0a0a0f"
                          stroke="#00ff88"
                          strokeWidth="2"
                        />
                      )
                    })}
                  </svg>
                </div>
              </div>

              {/* Labels outside 3D transform */}
              {labelData.map((l, i) => (
                <span
                  key={i}
                  className="absolute text-xs text-white/50 font-medium whitespace-nowrap pointer-events-none"
                  style={{
                    left: `${l.xPct}%`,
                    top: `${l.yPct}%`,
                    transform: `translate(${l.translate})`,
                  }}
                >
                  {l.name}
                </span>
              ))}
            </div>

            <p className="text-center text-sm text-white/40 mt-0 mb-4">
              懂业务逻辑的 AI 技术实践者，擅长用 Vibe Coding 快速交付商用原型。
            </p>

            {/* Description cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mt-2">
              {skills.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5"
                >
                  <div className="text-lg sm:text-xl font-bold text-neon-green shrink-0">{s.percent}%</div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white">{s.name}</div>
                    <div className="text-[10px] text-white/30 mt-1 truncate">{s.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
