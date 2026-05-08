export const categories = [
  {
    slug: 'wind',
    name: '观·风向',
    desc: '行业深度分析、大模型观察',
    color: '#3b82f6',
  },
  {
    slug: 'practice',
    name: '实·落地',
    desc: '具体的商业 AI 案例、业务闭环方案',
    color: '#10b981',
  },
  {
    slug: 'tool',
    name: '研·工具',
    desc: 'Vibe Coding、Prompts、工具测评',
    color: '#00ff88',
  },
  {
    slug: 'product',
    name: '思·产品',
    desc: '10年+ PM 心法、AI 产品哲学',
    color: '#a855f7',
  },
]

// 浏览器端解析 Markdown front matter
function parseFrontMatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const data = {}
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w+):\s*"?(.+?)"?\s*$/)
    if (m) data[m[1]] = m[2]
  }
  return { data, content: match[2].trim() }
}

// 构建时同步加载所有 Markdown 文件
const modules = import.meta.glob('/content/articles/*.md', { query: '?raw', import: 'default', eager: true })

const allArticles = []
for (const path in modules) {
  const raw = modules[path]
  const { data, content } = parseFrontMatter(raw)
  const slug = data.slug || path.split('/').pop().replace('.md', '')
  allArticles.push({
    slug,
    category: data.category,
    title: data.title,
    date: data.date ? String(data.date).slice(0, 10) : '',
    content,
  })
}

// 按日期倒序排列
export const articles = allArticles.sort((a, b) => (b.date || '').localeCompare(a.date || ''))
