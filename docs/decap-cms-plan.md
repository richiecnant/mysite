# 栗子洞察 — Decap CMS 后台管理实施方案

> 版本：v1.0 | 日期：2026-05-05

---

## 一、背景与目标

### 当前现状
- 文章以 JS 数组形式硬编码在 `src/data/articles.js` 中
- 新增/修改文章需要修改代码并 git push
- 没有可视化编辑界面，不支持富文本、图片上传

### 改造目标
- 提供 Web 端可视化后台，通过浏览器管理文章
- 支持富文本编辑、图片上传、分类选择
- 发布后前端自动更新，无需手动改代码
- 零服务器成本

---

## 二、技术选型：Decap CMS

### 选型理由

| 维度 | 说明 |
|---|---|
| 存储方式 | GitHub 仓库（Markdown 文件），和代码一起版本管理 |
| 服务器 | 不需要，纯静态 |
| 编辑器 | Web 可视化富文本编辑器，支持 Markdown 预览 |
| 兼容性 | 天然适配 GitHub Pages，不改变现有部署流程 |
| 成本 | 完全免费开源 |
| 安全性 | 通过 GitHub OAuth 授权，不暴露任何密钥 |

### 架构原理

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐     ┌──────────┐
│  用户浏览器  │────▶│  CMS 编辑器   │────▶│ GitHub 仓库  │────▶│ 前端站点  │
│  (后台页面)  │     │ (可视化编辑)  │     │ (Markdown)   │     │ (自动构建)│
└─────────────┘     └──────────────┘     └─────────────┘     └──────────┘
                           │                     │
                     OAuth 认证             自动 commit
                                           自动构建部署
```

用户在后台编辑 → 保存 → GitHub 自动 commit Markdown 文件 → GitHub Actions 构建 → 前端自动更新。

---

## 三、数据结构设计

### 文件目录

```
mysite/
├── content/
│   └── articles/
│       ├── vibe-coding-enterprise-inflection-point.md
│       ├── vibe-coding-ai-pm-survival.md
│       ├── workbuddy-morning-report.md
│       └── gpt55-vs-opus47.md
├── public/
│   ├── admin/
│   │   ├── index.html          ← CMS 后台入口
│   │   └── config.yml          ← CMS 配置
│   └── uploads/                ← 图片上传目录
└── src/
    ├── components/
    │   └── ArticleDetail.jsx
    └── data/
        └── articles.js         ← 改为从 Markdown 文件读取
```

### Markdown 文件格式

每篇文章是一个独立的 `.md` 文件，包含 Front Matter（元数据）和正文：

```markdown
---
title: "OpenAI今夜雪耻：GPT-5.5来了，Opus 4.7一周的'王位'宣告终结"
category: "wind"
date: "2026-04-24"
---

AI圈没有平静的周末。

2026年4月16日，Anthropic发布Claude Opus 4.7...
```

### 分类定义

| slug | 名称 | 描述 |
|---|---|---|
| `wind` | 观·风向 | 行业深度分析、大模型观察 |
| `practice` | 实·落地 | 具体的商业 AI 案例、业务闭环方案 |
| `tool` | 研·工具 | Vibe Coding、Prompts、工具测评 |
| `product` | 思·产品 | 10年+ PM 心法、AI 产品哲学 |

---

## 四、实施步骤

### Step 1：安装依赖

```bash
npm install decap-cms-app gray-matter
```

- `decap-cms-app`：CMS 编辑器核心
- `gray-matter`：解析 Markdown front matter

### Step 2：创建 CMS 配置文件

创建 `public/admin/config.yml`：

```yaml
backend:
  name: github
  repo: richiecnant/mysite
  branch: main
  base_url: https://decap-oauth.netlify.app

media_folder: "public/uploads"
public_folder: "/uploads"

collections:
  - name: "articles"
    label: "文章"
    folder: "content/articles"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "标题", name: "title", widget: "string" }
      - { label: "分类", name: "category", widget: "select", options: [
          { label: "观·风向", value: "wind" },
          { label: "实·落地", value: "practice" },
          { label: "研·工具", value: "tool" },
          { label: "思·产品", value: "product" }
        ] }
      - { label: "发布日期", name: "date", widget: "datetime", format: "YYYY-MM-DD" }
      - { label: "正文", name: "body", widget: "markdown" }
```

### Step 3：创建后台入口

创建 `public/admin/index.html`：

```html
<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>栗子洞察 - 管理后台</title>
</head>
<body>
  <script src="https://unpkg.com/decap-cms-app@latest/dist/decap-cms-app.js"></script>
</body>
</html>
```

### Step 4：配置 GitHub OAuth

Decap CMS 需要通过 OAuth 认证才能访问 GitHub 仓库。

**推荐方式：使用 Netlify OAuth 代理（免费，最简单）**

1. 打开 https://app.netlify.com/ ，用 GitHub 账号登录
2. 创建一个免费站点（仅用于 OAuth 代理，不需要部署任何内容）
3. 进入站点设置 → Identity → Enable Identity
4. 进入 Services → Git Gateway → Enable Git Gateway
5. 在 GitHub → Settings → Developer settings → OAuth Apps 创建一个 OAuth App：
   - Application name：`栗子洞察 CMS`
   - Homepage URL：`https://richiecn.com`
   - Authorization callback URL：`https://你的netlify站点.netlify.app/.netlify/functions/callback`
6. 将 Client ID 和 Client Secret 填入 Netlify 的 Git Gateway 配置
7. 在 `config.yml` 中确认 `base_url` 指向你的 Netlify 站点

**备选方式：自建 OAuth 代理**

如果不想用 Netlify，可以用 Vercel 或 Cloudflare Workers 部署一个 OAuth 代理：
- 项目地址：https://github.com/decaporg/decap-cms/tree/main/packages/decap-cms-backend-github
- 需要配置 GitHub OAuth App 的 Client ID 和 Secret

### Step 5：改造前端文章读取

将 `src/data/articles.js` 从硬编码 JS 数组改为读取 Markdown 文件。

利用 Vite 的 `import.meta.glob` 在构建时自动扫描 `content/articles/*.md`：

```js
import matter from 'gray-matter'

export const categories = [
  { slug: 'wind', name: '观·风向', desc: '行业深度分析、大模型观察', color: '#3b82f6' },
  { slug: 'practice', name: '实·落地', desc: '具体的商业 AI 案例、业务闭环方案', color: '#10b981' },
  { slug: 'tool', name: '研·工具', desc: 'Vibe Coding、Prompts、工具测评', color: '#f59e0b' },
  { slug: 'product', name: '思·产品', desc: '10年+ PM 心法、AI 产品哲学', color: '#a855f7' },
]

// 构建时自动扫描所有 Markdown 文件
const modules = import.meta.glob('/content/articles/*.md', { query: '?raw', import: 'default' })

const allArticles = []
for (const path in modules) {
  const raw = await modules[path]()
  const { data, content } = matter(raw)
  const slug = data.slug || path.split('/').pop().replace('.md', '')
  allArticles.push({
    slug,
    category: data.category,
    title: data.title,
    date: data.date ? data.date.slice(0, 10) : '',
    content,
  })
}

// 按日期倒序排列
export const articles = allArticles.sort((a, b) => (b.date || '').localeCompare(a.date || ''))
```

### Step 6：迁移现有文章

将 `articles.js` 中的 4 篇文章导出为 Markdown 文件：

- `content/articles/vibecoding-enterprise-inflection-point.md`
- `content/articles/vibe-coding-ai-pm-survival.md`
- `content/articles/workbuddy-morning-report.md`
- `content/articles/gpt55-vs-opus47.md`

每篇文章格式：
```markdown
---
title: "文章标题"
category: "分类slug"
date: "YYYY-MM-DD"
---

文章正文内容...
```

### Step 7：更新文章详情组件

`ArticleDetail.jsx` 已支持 Markdown 内容渲染，无需大改。如需更好的 Markdown 渲染效果，可额外安装 `react-markdown`：

```bash
npm install react-markdown
```

### Step 8：更新构建流程

`.github/workflows/deploy.yml` 无需修改，现有流程已包含 `npm ci && npm run build`，会自动处理新增的 Markdown 文件。

---

## 五、后台功能说明

### 编辑器能力

| 功能 | 说明 |
|---|---|
| 富文本编辑 | 标题、加粗、列表、引用、代码块 |
| 图片上传 | 直接拖拽上传，存储在 `public/uploads/` |
| 分类选择 | 下拉选择 4 个分类之一 |
| 日期设置 | 发布日期选择器 |
| Markdown 预览 | 编辑时实时预览效果 |
| 草稿保存 | 可以先保存草稿，不立即发布 |

### 访问方式

- 后台地址：`https://richiecn.com/admin/`
- 登录方式：GitHub 账号 OAuth 授权
- 管理功能：新建、编辑、删除文章

---

## 六、发布流程对比

### 改造前

```
用户写文章 → 发给我 → 我改代码 → git push → 自动部署
```

依赖开发者，有时间差。

### 改造后

```
用户登录后台 → 编辑器写文章 → 点发布 → 自动 commit → 自动构建部署 → 前端自动显示
```

自主可控，分钟级生效。

---

## 七、成本与风险

### 成本

| 项目 | 费用 |
|---|---|
| Decap CMS | 免费开源 |
| GitHub 仓库 | 免费 |
| GitHub Pages | 免费 |
| Netlify OAuth 代理 | 免费 |
| 图片存储 | 存在仓库 `public/uploads/`，免费 |
| **总计** | **零成本** |

### 注意事项

1. **图片大小**：GitHub 仓库单文件建议不超过 50MB，单张图片建议压缩后再上传
2. **仓库体积**：大量图片会增大仓库体积，建议定期清理未使用的图片
3. **OAuth 代理**：Netlify 的免费 OAuth 代理可能有限制，如果不稳定可切换为自建方案
4. **并发编辑**：Decap CMS 不支持多人同时编辑同一篇文章

---

## 八、验证清单

- [ ] 访问 `richiecn.com/admin/` 后台页面正常加载
- [ ] GitHub OAuth 登录成功
- [ ] 新建文章后，`content/articles/` 目录出现对应 .md 文件
- [ ] 前端 `/#/insight` 页面显示新文章
- [ ] 编辑已有文章后，前端内容同步更新
- [ ] 图片上传功能正常
- [ ] 分类筛选正确
- [ ] 移动端后台页面可正常使用

---

## 九、后续可扩展

- **标签系统**：为文章增加标签，支持标签筛选
- **阅读量统计**：接入第三方统计（如 Umami）
- **评论系统**：接入 Giscus（基于 GitHub Discussions）
- **SEO 优化**：为每篇文章生成独立 HTML 的 meta 标签
- **RSS 订阅**：生成 RSS Feed，支持订阅
