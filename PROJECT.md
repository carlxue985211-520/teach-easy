# Teach Easy — 项目文档

> 最后更新：2026-05-27（阶段一完成，全部教师评价改进已上线）

## 项目是什么

Teach Easy 是面向小学一年级数学教师（人教版上册）的网页互动教具库。教师在课堂上打开网页，通过选择章节和切换 A/B 版本来演示教学内容，无需安装软件；学生在大屏幕上观看并参与互动，帮助建立从具体操作到抽象算式的认知连接。全程由教师主导，课程评审人可在每个教具下方登录后写评价。

**核心价值：让一年级数学课堂演示变得可交互、可评审、可迭代，而不是一张静态 PPT。**

目标用户：
- **小学一年级数学教师**：课堂演示用，在 42" 以上电子白板或投影仪前操作，引导学生说图意、列算式
- **教研员 / 课程评审人**：登录账号（1/1 或 2/2）后在每个教具下方提交文字评价，供迭代参考；场景是非公开评审
- **学生（间接用户）**：在大屏幕前观看教师操作，不直接触屏 [待验证：是否有学生自主使用场景]

---

## 竞品分析

| 竞品 | 优势 | 核心缺陷 | 我们的差异化 |
|---|---|---|---|
| 希沃课件 | 功能全、教具库丰富 | 需安装客户端、内容封闭不可定制 | 纯网页、代码开放、可一键定制修改 |
| 洋葱数学 | 动画精良、内容系统 | 面向学生自学，非教师主导课堂演示 | 面向教师实时控制的课堂演示场景 |
| 人教版配套光盘/PPT | 与教材严格对应 | 交互陈旧，PPT 中物件不可移动 | 真实拖放操作教具，算式随动 |
| 自制 PPT | 灵活 | 没有真正的交互，切换麻烦 | 26 个教具统一管理，章节切换一个下拉框 |

---

## 当前进度

| 阶段 | 状态 | 计划内容 |
|---|---|---|
| MVP 原型（26 个教具）| ✅ | T01–T26 基础实现，A/B 版本切换，Supabase 评价面板 |
| Bug 修复 | ✅ | T10/T11/T18 显示逻辑、localStorage 白屏风险、feedback XSS 加固 |
| Tier 1 通用快改 | ✅ | 删目标框/页码、反馈启发式、T01/T05 单行排列、A 版纯色背板 |
| Tier 2 加减法统一交互 | ✅ | T02/03/07/10/11 拖动+叉掉 builder 组件（触摸屏兼容）|
| Tier 3 复习卡片 | ✅ | T04/12/26 随机抽问/找得数挑战/变色/拖排 |
| Tier 4 分与合可配置 | ✅ | T06 支持 6-9 任意数、点圆点分组、记录已发现分法 |
| Tier 5 情境美术 | ✅ | T01 表情物体+草地场景+烟花、T08 加减双算式衔接 |
| T13–T26 深化 | ⬜ | 尚无教师评价，待收集后制定下一轮改进清单 |
| GSD 项目管理结构 | ⬜ | `/gsd-ingest-docs` 初始化 `.planning/`，纳入已有文档 |
| 正式账号系统 | ⬜ | 网站公开后升级为 Supabase Auth |

**下一步**：收集 T13–T26 教师评价；或先初始化 GSD 结构再规划第二轮迭代。

---

## 技术栈

### 运行时依赖

| 库/服务 | 版本 | 用途 | 特殊注意 |
|---|---|---|---|
| 原生 HTML / CSS / JS | — | 全部前端逻辑 | 无 `import/export`，不能用 ES module 语法 |
| Supabase REST API | — | 评价数据的读取、写入、删除 | anon key 写在 `app.js` 前端，属于设计决策而非安全漏洞 |
| Vercel | — | 静态托管 + push main 自动部署 | 根目录必须有 `index.html`；Framework Preset 选 Other |

### 构建 / 工具链

| 工具 | 用途 |
|---|---|
| `python3 -m http.server 8781 --bind 127.0.0.1` | 本地预览（绑定 localhost 避免局域网暴露）|
| `node --check app.js` | JS 语法检查（用 `/Users/xuechao/.cache/codex-runtimes/.../node`）|
| Vercel CI | push → 自动构建部署，无需手动操作 |
| Supabase SQL Editor | 执行 `supabase-reviews.sql` 初始化评价表（一次性）|

### 选型说明

**选纯静态 HTML/CSS/JS，不选 React/Vue/Next.js：**
- 选择原因：MVP 开发快，零构建复杂度，Vercel 静态部署零配置
- 不选 React 原因：引入 npm + 构建流水线增加维护复杂度；全量 `innerHTML` 重渲染在当前规模（单页 26 教具）性能可接受；无多人协作需求

**选 Supabase REST API，不选自建后端：**
- 选择原因：零服务器运维成本；anon key 是 Supabase 官方公开 key 模式，RLS 保护数据安全
- 不选自建 API 原因：需要服务器 + 部署流水线，MVP 阶段 overkill
- 不选 Firebase 原因：已有 Supabase 账号；Supabase 开源、SQL 接口更熟悉

**选 Vercel，不选国内云：**
- 选择原因：与 GitHub 原生集成，push 即部署；全球 CDN；域名购买方便
- 不选国内云原因：评审阶段流量极小，ICP 备案成本不值得；[待验证：正式上线后国内访问速度是否满足]

**选 Pointer Events API，不选 HTML5 DnD API：**
- 选择原因：HTML5 DnD 不支持触摸屏（教室电子白板）；Pointer Events 统一鼠标 + 触摸
- 不选 touch events 原因：Pointer Events 是更现代的统一 API，无需同时维护 mouse/touch 两套逻辑

---

## 代码结构

```
teach-easy/                         # Vercel 部署根目录
├── index.html                      # 页面骨架，Vercel 默认入口，几乎无业务逻辑
├── app.js                          # 全部交互逻辑（教具数据/渲染/绑定/评价/拖放组件）
├── styles.css                      # 样式（A/B 版本差异 + builder/review/split 组件样式）
├── supabase-reviews.sql            # Supabase 评价表初始化（在 SQL Editor 执行一次）
├── README.md                       # 简短项目说明
├── PROJECT.md                      # 本文档
├── 改进优先级清单.md                 # 30 条教师评价归类后的 Tier 1-5 清单（未 git 跟踪）
├── REVIEW.md                       # 代码审查报告（未 git 跟踪）
├── .gitignore                      # 忽略 .DS_Store / 资料/*.pdf / *.log / .claude/
├── .claude/launch.json             # 本地预览服务配置（.gitignored）
├── 汇总测试/                        # 早期测试备份（已不作主入口）
├── 测试/                            # 最早单节案例 + 教材章节梳理
└── 资料/                            # 本地教材 PDF 等（.gitignored，不上传）
```

### 核心数据流

```
const tools = [...]  ← 26 个教具配置（id/unit/title/type/builder config 等）
        │
        ▼
init() → 填充 #chapterSelect 下拉框，绑定版本切换和重置按钮
        │
        ▼ 用户选章节 / 切换 A/B / 点交互
        │
resetState(tool) → 重置全局 state（含 builder:null / review:null / splitFound:[] 等）
        │
        ▼
render()
  ├─ 更新 header（toolCode, unitName, lessonTitle, teacherTip）
  ├─ renderByType(tool) → 17 种 type 各自的 render 函数：
  │     ├─ builder:    renderBuilder → tokens 方块/叉掉/算式（T02/03/07/10/11）
  │     ├─ review:     renderReview  → 卡片/抽问/挑战（T04/12/26）
  │     ├─ split:      renderSplit   → 圆点分组/记录分法（T06）
  │     ├─ quantity:   renderQuantity → emoji 物体/草地场景（T01/T05）
  │     └─ ...其余 13 种 type（hidePart/tenFrame/placeValue 等）
  ├─ els.stage.innerHTML = 全量替换
  └─ renderReviewPanel(tool) → Supabase 评价面板
        │
        ▼
bindByType(tool)   → 绑定教具交互（pointer drag/tap/click）
bindReviewPanel()  → 绑定评价登录/提交/删除
        │
        ▼ 用户再次交互 → 循环回 render()
```

**评价模块独立数据流：**
```
用户登录(1/1 或 2/2)
  → safeStorageSet("teach-easy-reviewer", id)
  → 提交评价 POST supabase.co/rest/v1/teaching_aid_reviews
  → loadReviews(tool) GET（按 site_id/tool_id/version 筛选，倒序）
  → render() 显示评价列表
删除 → DELETE（RLS 校验 x-reviewer-id 请求头 === reviewer_id）
```

---

## 关键决策

| 决策事项 | 结论 | 原因（含为什么不选其他方案）|
|---|---|---|
| 前端框架 | 纯 vanilla JS | MVP 快速上线；不选 React：引入构建链复杂度，全量 re-render 在此规模可接受 |
| 状态管理 | 全局 `state` 对象 + `render()` 全量 innerHTML 重渲染 | 简单直接；不选 VDOM：无框架时手写 diff 比全量 re-render 更复杂 |
| 拖放实现 | Pointer Events（非 HTML5 DnD）| HTML5 DnD 不支持触摸屏（教室白板）；不选纯 touch events：Pointer Events 更现代，统一两种输入 |
| 后端 | Supabase anon key 前端直调 | anon key 是官方公开 key；不选自建 API：运维成本超过 MVP 收益 |
| 账号系统 | 前端简单 1/1、2/2 + localStorage | 非公开评审两人足够；不选 Supabase Auth：复杂度不匹配当前需求，公开后再升级 |
| 删除权限 | RLS 校验 `x-reviewer-id` 请求头 | 满足非公开评审防误删需求；不选强认证：overkill；已知可绕过，场景接受 |
| A/B 版本 | `body.dataset.version` + CSS 选择器 | 最低成本皮肤切换；不选两套 HTML/JS：冗余量大，维护双倍成本 |
| builder 统一组件 | tokens 数组 + mode(add/sub/mix) + Pointer drag | 一套逻辑覆盖 T02/03/07/10/11；不选各自单独实现：五份重复代码，维护成本高 |
| 复习卡片 | 算式不显示得数，配合挑战/抽问模式 | 隐藏得数更具教学价值（学生口算）；不选显示完整算式：降低练习难度 |
| emoji 物体 | 20 种轮换图标（水果/动物/车）| 零图片资源，浏览器原生支持；不选 SVG/PNG：需要美术资源和加载 |

---

## 已知风险与卡点

🔴 **高风险（不处理则产品不可用）**

- **Supabase 国内访问不稳定**：评价面板和数据完全依赖 Supabase REST（服务器在海外），国内网络可能出现请求超时或失败。当前小范围评审场景尚可接受；若面向国内广泛用户则需迁移至国内数据库或增加中转代理。[待验证：实际目标用户所在网络环境]

🟡 **中风险（需要注意）**

- **简单账号（1/1, 2/2）可被滥用**：URL 一旦流传，任何人可提交评价。处理方式：保持评审 URL 不公开；网站正式公开前升级为 Supabase Auth。
- **RLS 删除依赖请求头非强认证**：`x-reviewer-id` 可被伪造，任意客户端可删除他人评价（reviewer_id 仅限 '1'/'2'，攻击面极小）。公开前改为 `auth.uid()` 绑定。
- **全量 innerHTML 重渲染性能上限**：每次交互重建整个教具 DOM；当前 26 个教具规模可接受；若教具复杂度大幅提升（如 3D 动画、大量 DOM 节点）可能出现卡顿。届时考虑局部更新或引入轻量框架。
- **T13–T26 无教师评价**：后 13 个教具（立体图形、11-20 认识、进位加法）尚未经过专业教师评审，质量无法评估。需组织评审人覆盖。

🟢 **已知且接受的 tradeoff**

- **anon key 写在 `app.js` 前端**：Supabase anon key 设计上是公开的（类似 Firebase clientConfig），不是安全漏洞；RLS 策略保护数据。不接受将其改为环境变量（会强制引入构建工具）。
- **无单元测试框架**：使用 `node --check` 语法检查 + 浏览器冒烟测试。当前规模人工验证可覆盖；加测试框架会引入构建复杂度，延后到引入框架后一并处理。
- **删除旧 addSub/zero/chain 函数**：T02/03/07/10/11 转为 builder 后，旧渲染函数已从代码中删除。如需回滚，需要 git revert。

---

## 开发规范

**本地启动：**
```bash
cd "/Users/xuechao/web on broad/web/小学数学1教具-20260520"
python3 -m http.server 8781 --bind 127.0.0.1
# 打开 http://127.0.0.1:8781/
```

**JS 语法检查（必须在提交前执行）：**
```bash
/Users/xuechao/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check app.js
```

**依赖安装规则：** 本项目无 npm 依赖。**不得擅自引入第三方库或 CDN 脚本**；新功能必须用 vanilla JS 实现。若确实需要引入依赖，必须先与项目负责人确认。

**代码约定（最重要 5 条）：**

1. **所有用户可控内容插入 HTML 前必须过 `escapeHtml()`**，包括评价内容、reviewer_id、tool.id、state.feedback、state.feedbackType。
2. **新增教具 type 必须同时更新 `renderByType` 和 `bindByType` 映射表**，并加防御（未知 type 返回降级提示而非抛出 TypeError）。
3. **访问 localStorage 必须走 `safeStorageGet/Set/Remove()`**，禁止直接调用 `localStorage.getItem/setItem/removeItem`（隐私模式会抛 SecurityError 导致白屏）。
4. **拖放交互必须用 Pointer Events（非 HTML5 DnD API）**，以确保教室触摸白板可用；监听 `pointerdown/pointermove/pointerup`，用 `setPointerCapture` 追踪指针。
5. **Supabase anon key 可以公开；service role key 绝对不能写在任何前端文件中。**

---

## 路线图

### 阶段一：MVP + 教师评价第一轮迭代 ✅ 已完成

**目标**：上线可评审的 26 个教具，收集并实现第一轮教师改进建议。

**已完成功能**：
- 26 个教具（T01–T26），A/B 版本切换，章节下拉
- Supabase 评价面板（登录/提交/删除/持久化）
- Tier 1–5 全部教师改进：通用快改、拖放交互、复习卡片、分与合配置、情境美术

**技术难点（已解决）**：
- Pointer Events drag + tap 同一元素的区分（移动阈值 6px）
- builder tokens 数组在全量 re-render 间的状态持久化（ensureBuilder 懒初始化）
- pointerup 期间 elementFromPoint 与 ghost 元素的 pointer-events:none 配合

**验收标准**：✅ 26 个教具全渲染正常、A/B 切换零报错、all eval 测试通过、已 push 至 GitHub 并 Vercel 部署成功。

---

### 阶段二：T13–T26 评价覆盖与深化 ⬜ 未开始

**目标**：收集后 13 个教具（立体图形、11-20 认识、进位加法）的教师评价，制定并实现第二轮改进。

**功能列表（待定，依赖评价输入）**：
- 组织评审人覆盖 T13–T26 [待验证：时间安排]
- 根据评价制定新的 Tier 清单并实现

**技术难点**：
- T13 立体图形（solids）可能需要 CSS 3D 透视效果 [待验证：是否需要]
- T15 捆棒（bundle10）、T16–T20 数位板等可能需要拖放计数棒

**验收标准**：T13–T26 评价覆盖率 100%，改进实现后通过评审人确认。

---

### 阶段三：GSD 项目管理结构 ⬜ 未开始

**目标**：引入 `.planning/` GSD 结构，使后续开发可以用 `/gsd-plan-phase`、`/gsd-execute-phase` 等命令管理。

**功能列表**：
- 执行 `/gsd-ingest-docs`，把 `PROJECT.md`、`改进优先级清单.md` 纳入 `.planning/`
- 初始化 ROADMAP.md，将阶段二及以后的工作映射为 phases

**技术难点**：较低，主要是文档整理和 GSD 配置。

**验收标准**：`.planning/ROADMAP.md` 生成，`/gsd-progress` 可显示正确状态。

---

### 阶段四：正式账号系统（如需公开）⬜ 未开始

**目标**：如果网站范围扩大至公开访问，将账号系统从 1/1、2/2 升级为 Supabase Auth。

**功能列表**：
- Supabase Auth PKCE flow（纯静态项目，无服务端回调）
- RLS 删除策略改为 `auth.uid()` 绑定
- 现有评价数据迁移 [待验证：是否需要绑定到真实账号]

**技术难点**：
- 纯静态页面处理 OAuth redirect callback 和 code exchange [待验证：Supabase JS SDK 是否可无构建工具使用]

**验收标准**：新账号可注册登录，删除只能删自己的评价，现有数据不丢失。

---

### 阶段五：分步演示模式 ⬜ 未开始

**目标**：所有教具支持分步展示（情境→问题→算式→答案），适合教师课堂节拍。

**功能列表**：
- 每个教具定义步骤序列，「下一步」按钮逐步展示
- 当前 builder 组件已部分支持分步（tap-to-cross 逐步叉掉）

**技术难点**：
- 需要为每个 type 定义「步骤序列」，对当前 render 模型是较大改造（可能需要 `state.step` + 条件渲染）[待验证：改造范围]
- builder 的 tokens、review 的 cards 等懒初始化状态容易被步骤切换误重置，需 spike 验证状态模型

**建议**：在阶段二结束后专门做一个 spike，先在 T01（最简单的 quantity type）上跑通分步演示完整流程，验证状态模型设计，再推广到其他教具。

**验收标准**：至少 10 个核心教具支持分步演示，教师课堂实测反馈通过。

---

**范围外（v1 不做）**

| 功能 | 不做的原因 |
|---|---|
| 学生账号 / 学生端 | 定位是教师主导演示，不是学生自学平台；混入会模糊产品定位 |
| 评价后台 / 导出 CSV | 需求未充分验证，Supabase Table Editor 当前足够；待真正需要再做 |
| 国内服务器 / ICP 备案 | 评审阶段流量极小，成本不值；正式推广时再迁移 |
| 单元测试框架 | 引入构建复杂度；当前人工冒烟可覆盖；引入框架时一并处理 |
| 多教材版本切换 | 超出第一阶段范围；需单独立项 |
| 内容管理后台（CMS）| 直接改 `app.js` 的 `tools[]` 数组即可；CMS 的收益不匹配当前规模 |
| PWA / 离线缓存 | 课堂环境通常有网；增加复杂度无明显收益 |

---

## 如何更新本文档

**每个阶段完成后，Claude 应更新以下章节：**

1. **当前进度**：将该阶段状态从 ⬜ 改为 ✅，并更新"下一步"行。
2. **路线图**：在该阶段末尾补充实际完成情况、与计划的偏差、遗留问题。
3. **已知风险**：将已解决的风险移至 🟢 或删除；新发现的风险按级别添加。
4. **关键决策**：如有新的重要技术/架构决策，追加到表格（不删旧记录）。
5. **代码结构**：目录树或数据流有变化时更新。

**更新原则：**
- 不确定内容保留 `[待验证]`，不将假设升级为结论。
- 每次更新修改文档顶部"最后更新"日期，括号注明本次更新内容。
- 不删除已有决策记录，只追加或修改；历史决策是重要上下文。
