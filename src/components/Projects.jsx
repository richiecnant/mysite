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
  {
    id: '04',
    title: '企业 AI 知识库',
    pain: '内部知识分散，老员工经验无法沉淀，新员工培训周期长，重复咨询占用大量时间。',
    solutions: ['企业文档智能问答', '产品/培训资料统一检索', '新员工培训助手', '会议纪要自动归档', '权限化知识管理'],
    value: ['知识查找时间降低 70%', '培训周期缩短 50%', '减少重复沟通与协作成本', '提升组织知识复用效率'],
    tech: ['RAG', '向量数据库', '权限系统', '多文档解析', '企业内部部署'],
  },
  {
    id: '05',
    title: 'AI 供应链预测',
    pain: '库存积压占用资金，缺货影响销售，补货依赖人工经验，无法及时发现滞销风险。',
    solutions: ['销量预测分析', '安全库存智能计算', '自动补货建议', '滞销商品预警', '供应商风险评估'],
    value: ['库存周转率提升 20%–30%', '缺货率下降 15%–25%', '降低库存资金占用', '提升供应链稳定性'],
    tech: ['预测模型', '数据分析', 'ERP 对接', '自动化报表', '实时预警系统'],
  },
  {
    id: '06',
    title: 'AI 销售助手',
    pain: '销售跟进效率低，客户信息管理混乱，新人培养周期长，成交经验难以复制。',
    solutions: ['客户意向自动分析', 'AI 跟进话术生成', '销售通话录音分析', '成交概率预测', '回款风险预警', '自动同步 CRM'],
    value: ['销售跟进效率提升 30%', '新人培训周期缩短 50%', '提升客户转化率', '降低逾期与坏账风险'],
    tech: ['Agent', 'CRM 集成', '语音分析', '客户画像', '销售自动化 Workflow'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.15em] text-center mb-4">
            <span className="gradient-text">AI 落地案例</span>
          </h2>
          <p className="text-center text-white/50 text-sm mb-14 max-w-2xl mx-auto">
            帮助企业构建 AI Agent 与自动化系统，实现降本、提效与增长。
          </p>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((p, i) => (
            <ScrollAnimation key={p.id} delay={i * 0.08}>
              <div className="group card-glow rounded-2xl border border-white/10 bg-dark-card/60 backdrop-blur-sm hover:bg-dark-surface/60 hover:border-neon-green/20 transition-all duration-300 h-full flex flex-col">
                {/* Header */}
                <div className="px-5 pt-5 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-black text-neon-green/25">
                      {p.id}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-neon-green transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </div>

                {/* Pain */}
                <div className="px-5 py-3 border-b border-white/5 bg-red-500/5">
                  <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1.5">
                    企业痛点
                  </h4>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {p.pain}
                  </p>
                </div>

                {/* Solutions */}
                <div className="px-5 py-3 border-t border-white/5 flex-1">
                  <h4 className="text-xs font-semibold text-neon-green/80 uppercase tracking-wider mb-1.5">
                    AI 解决方案
                  </h4>
                  <ul className="space-y-1">
                    {p.solutions.map((s, j) => (
                      <li key={j} className="flex items-start gap-1.5 text-xs text-white/55">
                        <span className="text-neon-green mt-0.5 shrink-0">▸</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Value */}
                <div className="px-5 py-3 border-t border-white/5">
                  <h4 className="text-xs font-semibold text-neon-green/80 uppercase tracking-wider mb-1.5">
                    项目价值
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {p.value.map((v, j) => (
                      <span key={j} className="text-[11px] px-2 py-0.5 rounded-full bg-neon-green/10 text-neon-green/80 border border-neon-green/15">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech */}
                <div className="px-5 py-3 border-t border-white/5">
                  <h4 className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-1.5">
                    技术能力
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {p.tech.map((t, j) => (
                      <span key={j} className="text-[10px] px-1.5 py-0.5 rounded border border-white/8 text-white/30">
                        {t}
                      </span>
                    ))}
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
