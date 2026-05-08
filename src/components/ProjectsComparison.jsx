import { useState } from 'react'
import ScrollAnimation from './ScrollAnimation'

const projects = [
  {
    id: '01',
    title: 'AI 智能客服助手',
    pain: '客服重复回复占用大量人力，夜间咨询无法及时处理，工单与客户信息无法沉淀，响应速度慢导致客户流失。',
    solutions: ['AI 自动回复客户问题', '知识库智能检索（RAG）', '自动生成工单与会话摘要', '情绪识别与人工转接', '接入网站/微信/企业微信/WhatsApp'],
    value: ['客服成本降低 40%–70%', '响应时间缩短至秒级', '夜间咨询 24×7 自动承接', '提升客户满意度与转化率'],
    tech: ['Agent', '多轮对话', 'RAG', 'CRM 对接', '私有化部署'],
  },
  {
    id: '02',
    title: 'AI 营销内容生成',
    pain: '内容生产速度慢，多平台运营成本高，广告测试效率低，内容团队依赖人工经验。',
    solutions: ['批量生成文案与短视频脚本', 'A/B 测试内容自动生成', '多语种本地化', '爆款风格内容复刻', '自动适配不同平台风格'],
    value: ['内容产能提升 5–10 倍', '内容成本降低 60%+', '上线周期从周缩短到天', '提升广告点击率与转化率'],
    tech: ['Prompt Engineering', '内容工作流', '模型微调', '多平台自动发布'],
  },
  {
    id: '03',
    title: 'AI 合同/财务审核',
    pain: '合同审核耗时长，财务票据人工处理效率低，风险条款容易遗漏，大量重复审核工作。',
    solutions: ['合同风险点自动识别', '金额/条款/时间自动提取', '发票验真与报销审核', '财报自动摘要生成', '自动输出风险提示'],
    value: ['合同审核时间从 2 小时降至 15 分钟', '错误率降低 80%', '审核人力减少 50%+', '提升财务与法务协同效率'],
    tech: ['OCR', 'LLM 文档解析', '规则引擎', '工作流审批', '私有化部署'],
  },
]

function Plan1() {
  const [expanded, setExpanded] = useState({})
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      {projects.map((p) => (
        <div key={p.id} className="group card-glow rounded-2xl border border-white/10 bg-dark-card/60 backdrop-blur-sm overflow-hidden hover:bg-dark-surface/60 hover:border-neon-green/20 transition-all duration-300">
          <div className="p-5 sm:p-6 border-b border-white/5">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl font-black text-neon-green/20 leading-none">{p.id}</span>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-white group-hover:text-neon-green transition-colors">{p.title}</h3>
                <p className="text-sm text-white/40 mt-1 line-clamp-2">{p.pain}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {p.value.slice(0, 2).map((v, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-neon-green/10 text-neon-green border border-neon-green/20">{v}</span>
              ))}
            </div>
          </div>
          <button onClick={() => setExpanded(prev => ({...prev, [p.id]: !prev[p.id]}))} className="w-full px-5 sm:px-6 py-3 flex items-center justify-between text-xs text-white/40 hover:text-neon-green/60 transition-colors">
            <span>{expanded[p.id] ? '收起详情' : '查看详情'}</span>
            <svg className={`w-4 h-4 transition-transform ${expanded[p.id] ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          {expanded[p.id] && (
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 space-y-4 border-t border-white/5 pt-4">
              <div>
                <h4 className="text-xs font-semibold text-neon-green/80 uppercase tracking-wider mb-2">AI 解决方案</h4>
                <ul className="space-y-1.5">{p.solutions.map((s, i) => <li key={i} className="flex items-start gap-2 text-sm text-white/60"><span className="text-neon-green mt-0.5 shrink-0">▸</span><span>{s}</span></li>)}</ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-neon-green/80 uppercase tracking-wider mb-2">项目价值</h4>
                <ul className="space-y-1.5">{p.value.map((v, i) => <li key={i} className="flex items-start gap-2 text-sm text-white/60"><span className="text-neon-green mt-0.5 shrink-0">✓</span><span>{v}</span></li>)}</ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-neon-green/80 uppercase tracking-wider mb-2">技术能力</h4>
                <div className="flex flex-wrap gap-1.5">{p.tech.map((t, i) => <span key={i} className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-white/40">{t}</span>)}</div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function Plan2() {
  return (
    <div className="space-y-4">
      {projects.map((p) => (
        <div key={p.id} className="group card-glow rounded-2xl border border-white/10 bg-dark-card/60 backdrop-blur-sm hover:bg-dark-surface/60 hover:border-neon-green/20 transition-all duration-300 overflow-hidden">
          <div className="px-5 sm:px-6 py-4 border-b border-white/5 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="text-xl font-black text-neon-green/20">{p.id}</span>
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-neon-green transition-colors">{p.title}</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
            <div className="px-5 sm:px-6 py-4">
              <h4 className="text-xs font-semibold text-red-400/80 uppercase tracking-wider mb-2">企业痛点</h4>
              <p className="text-sm text-white/50 leading-relaxed">{p.pain}</p>
            </div>
            <div className="px-5 sm:px-6 py-4">
              <h4 className="text-xs font-semibold text-neon-green/80 uppercase tracking-wider mb-2">AI 解决方案</h4>
              <ul className="space-y-1">{p.solutions.map((s, j) => <li key={j} className="flex items-start gap-1.5 text-sm text-white/60"><span className="text-neon-green mt-0.5 shrink-0">▸</span><span>{s}</span></li>)}</ul>
            </div>
            <div className="px-5 sm:px-6 py-4">
              <h4 className="text-xs font-semibold text-neon-green/80 uppercase tracking-wider mb-2">项目价值</h4>
              <ul className="space-y-1">{p.value.map((v, j) => <li key={j} className="flex items-start gap-1.5 text-sm text-white/60"><span className="text-neon-green mt-0.5 shrink-0">✓</span><span>{v}</span></li>)}</ul>
            </div>
            <div className="px-5 sm:px-6 py-4">
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">技术能力</h4>
              <div className="flex flex-wrap gap-1.5">{p.tech.map((t, j) => <span key={j} className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-white/40">{t}</span>)}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function Plan3() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      {projects.map((p) => (
        <div key={p.id} className="group card-glow rounded-2xl border border-white/10 bg-dark-card/60 backdrop-blur-sm hover:bg-dark-surface/60 hover:border-neon-green/20 transition-all duration-300 h-full flex flex-col">
          <div className="px-5 pt-5 pb-3 text-center">
            <span className="text-3xl font-black text-neon-green/15 leading-none">{p.id}</span>
            <h3 className="text-base font-bold text-white group-hover:text-neon-green transition-colors mt-1">{p.title}</h3>
            <p className="text-xs text-white/30 mt-1.5 line-clamp-2">{p.pain}</p>
          </div>
          <div className="px-5 py-3 border-t border-white/5 flex-1">
            <h4 className="text-xs font-semibold text-neon-green/80 uppercase tracking-wider mb-2">解决方案</h4>
            <ul className="space-y-1">{p.solutions.map((s, j) => <li key={j} className="flex items-start gap-1.5 text-xs text-white/55"><span className="text-neon-green mt-0.5 shrink-0">▸</span><span>{s}</span></li>)}</ul>
          </div>
          <div className="px-5 py-3 border-t border-white/5">
            <h4 className="text-xs font-semibold text-neon-green/80 uppercase tracking-wider mb-2">项目价值</h4>
            <div className="flex flex-wrap gap-1.5">{p.value.map((v, j) => <span key={j} className="text-xs px-2 py-0.5 rounded-full bg-neon-green/10 text-neon-green/80 border border-neon-green/15">{v}</span>)}</div>
          </div>
          <div className="px-5 py-3 border-t border-white/5">
            <h4 className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-2">技术能力</h4>
            <div className="flex flex-wrap gap-1">{p.tech.map((t, j) => <span key={j} className="text-[10px] px-1.5 py-0.5 rounded border border-white/8 text-white/30">{t}</span>)}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function Plan4() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((p) => (
        <div key={p.id} className="group relative flex flex-col h-full rounded-2xl border border-white/10 bg-dark-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-neon-green/30 hover:shadow-[0_0_30px_rgba(0,255,136,0.08)]">
          <div className="absolute -top-3 right-5 rounded-full bg-gradient-to-r from-neon-green to-purple-accent px-3 py-1 text-xs font-bold text-dark">{p.id}</div>
          <div className="mb-4">
            <h3 className="text-lg font-bold text-white group-hover:text-neon-green transition-colors">{p.title}</h3>
          </div>
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-red-400/70 uppercase tracking-wider mb-1.5">企业痛点</h4>
            <p className="text-sm text-white/45 leading-relaxed">{p.pain}</p>
          </div>
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-neon-green/70 uppercase tracking-wider mb-1.5">AI 解决方案</h4>
            <ul className="space-y-1">{p.solutions.map((s, j) => <li key={j} className="flex items-start gap-1.5 text-sm text-white/55"><span className="text-neon-green mt-0.5 shrink-0">▸</span><span>{s}</span></li>)}</ul>
          </div>
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-neon-green/70 uppercase tracking-wider mb-1.5">项目价值</h4>
            <div className="flex flex-wrap gap-1.5">{p.value.map((v, j) => <span key={j} className="text-xs px-2.5 py-1 rounded-full bg-neon-green/10 text-neon-green/80 border border-neon-green/15">{v}</span>)}</div>
          </div>
          <div className="mt-auto pt-4 border-t border-white/5">
            <h4 className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-1.5">技术能力</h4>
            <div className="flex flex-wrap gap-1.5">{p.tech.map((t, j) => <span key={j} className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/30">{t}</span>)}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

const plans = [
  { id: 1, name: '方案1：2列卡片 + 点击展开', component: Plan1 },
  { id: 2, name: '方案2：单列横向4格', component: Plan2 },
  { id: 3, name: '方案3：3列卡片全部展开', component: Plan3 },
  { id: 4, name: '方案4：2列玻璃质感卡片', component: Plan4 },
]

export default function ProjectsComparison() {
  return (
    <section id="projects" className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        {plans.map(({ id, name, component: Component }) => (
          <div key={id}>
            <div className="mb-8 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full border border-neon-green/30 text-neon-green text-sm font-medium">
                {name}
              </span>
            </div>
            <Component />
          </div>
        ))}
      </div>
    </section>
  )
}
