# Teach Easy 项目交接说明

> 新开对话时，把这份文档发给 Codex/AI，就能快速恢复项目上下文。  
> 当前项目：小学数学一年级上册互动教具网站。  
> 当前线上域名：`easyteach.sbs`。  
> GitHub 仓库：`https://github.com/carlxue985211-520/teach-easy`

## 1. 项目目标

本项目基于《小学数学一年级上册（人教版）》教材，制作一套适合教师课堂演示、也适合一年级学生观看和互动的网页教具。

当前目标不是做完整教学平台，而是先做一个可评审、可演示、可迭代的 MVP：

- 覆盖整本教材主要小节。
- 每个小节先做 1 个核心互动教具。
- 每个教具提供 `A 课件版` 和 `B 儿童版` 两种视觉风格。
- 网站支持章节下拉选择。
- 网站支持评审人登录后对每个教具/版本提交文字评价。
- 评价长期保存到 Supabase，并在网站上公开展示给访问者。

## 2. 当前功能状态

### 已完成

- 根目录静态网页入口：
  - `index.html`
  - `styles.css`
  - `app.js`
- 26 个教具，编号 `T01` 到 `T26`。
- 每个教具支持 `A/B` 版本切换。
- 章节下拉框可以选择任意教具。
- 评价面板：
  - 放在每个教具下方。
  - 可折叠。
  - 只显示当前 `tool_id + version` 的评价。
  - 登录账号：`1/1`、`2/2`。
  - 登录后可以提交 1-500 字文字评价。
  - 用户只能在界面上删除自己账号提交的评价。
- Supabase 持久化：
  - 表名：`teaching_aid_reviews`
  - 站点隔离字段：`site_id = teach-easy`
- Vercel 部署已可用，域名为：`easyteach.sbs`。

### 当前限制

- 账号系统是简单前端登录，不是强安全认证。
- Supabase 使用 anon key 直接在前端请求 REST API。
- 删除自己的评价依赖前端登录态和 RLS 请求头，适合非公开评审场景，不适合正式公开产品。
- 教具内容目前是 MVP，很多场景是通用模板，后续可以按教材情境进一步精修。

## 3. 文件结构

```text
.
├── index.html                 # Vercel 默认入口，正式访问页面
├── styles.css                 # 正式入口样式
├── app.js                     # 正式入口全部交互逻辑、教具数据、评价模块
├── supabase-reviews.sql       # Supabase 评价表初始化脚本
├── README.md                  # 简短说明
├── PROJECT_HANDOFF.md         # 本交接文档
├── 汇总测试/
│   ├── index.html             # 汇总版备份/测试入口
│   ├── styles.css
│   └── app.js
├── 测试/
│   ├── index.html             # 最早的单节案例
│   ├── styles.css
│   ├── app.js
│   └── 教材章节梳理.md         # PDF 章节梳理
└── 资料/
    └── 1. 一上数学-人教版.pdf  # 本地教材 PDF，已被 .gitignore 排除，不上传
```

## 4. 技术栈

这是一个纯静态网页项目。

- HTML：`index.html`
- CSS：`styles.css`
- JavaScript：`app.js`
- 后端/数据库：Supabase REST API
- 部署：Vercel
- 域名：Vercel 购买的 `easyteach.sbs`
- 无构建工具，无 React/Vue/Next.js，无 npm 依赖

选择纯静态的原因：

- 项目初期开发快。
- Vercel/GitHub 静态部署简单。
- 老师评审阶段不需要复杂后端。
- Supabase 直接承担评价数据存储。

## 5. 本地运行

在项目根目录运行：

```bash
python3 -m http.server 8781 --bind 127.0.0.1
```

打开：

```text
http://127.0.0.1:8781/
```

如果浏览器提示：

```text
127.0.0.1 拒绝建立连接
```

通常是本地服务没开，重新执行上面的 `python3 -m http.server` 即可。

## 6. 部署信息

### GitHub

仓库：

```text
https://github.com/carlxue985211-520/teach-easy
```

当前主分支：

```text
main
```

最近关键提交：

```text
6281f48 Add math teaching aid prototype
c1d203d Expose teaching aid at repository root
2cf35bb Add Supabase review panel
```

### Vercel

Vercel 应直接部署仓库根目录，因为正式入口文件已经放在根目录：

```text
index.html
styles.css
app.js
```

推荐 Vercel 配置：

```text
Framework Preset: Other
Root Directory: 仓库根目录
Build Command: 留空
Output Directory: 留空或 .
```

曾经遇到的 Vercel 404 原因：

- 起初正式页面在 `汇总测试/index.html`。
- 仓库根目录没有 `index.html`。
- Vercel 默认访问根目录 `/`，因此显示 404。

解决办法：

- 将 `汇总测试/index.html`、`styles.css`、`app.js` 复制到仓库根目录。
- 之后 Vercel 默认路径 `/` 就可以正常打开。

## 7. Supabase 配置

### 项目信息

当前使用既有 Supabase 项目：

```text
Supabase URL:
https://aobochkirbskwucttsmm.supabase.co

site_id:
teach-easy

评价表:
teaching_aid_reviews
```

Anon key 已直接写在 `app.js` 中：

```js
const SUPABASE_URL = "https://aobochkirbskwucttsmm.supabase.co";
const SUPABASE_ANON_KEY = "...";
const REVIEW_TABLE = "teaching_aid_reviews";
const SITE_ID = "teach-easy";
```

注意：anon key 本来就是可公开前端使用的 key，不能写 service role key。

### 首次初始化

在 Supabase 控制台：

```text
SQL Editor → New Query
```

复制根目录文件：

```text
supabase-reviews.sql
```

全部粘贴进去执行。

执行时 Supabase 会提示：

```text
This query includes destructive operations...
```

这是因为脚本里有：

```sql
drop policy if exists ...
alter table ...
grant ...
```

当前脚本不会删除旧业务数据，不会动原来的 `tools` 表，也没有 `drop table`、`truncate`、`delete from`。它只会创建/更新本项目评价表和相关策略。

### 表结构

评价表字段：

```text
id          uuid 主键
site_id     text，固定 teach-easy
tool_id     text，例如 T01
tool_title  text，例如 1-5 的认识
version     text，A 或 B
reviewer_id text，1 或 2
content     text，1-500 字
created_at  timestamptz
```

### RLS 策略

`supabase-reviews.sql` 设置了：

- `anon` 可以读取 `site_id = teach-easy` 的评价。
- `anon` 可以插入 `site_id = teach-easy`、`reviewer_id in ('1','2')`、`version in ('A','B')` 且内容 1-500 字的评价。
- `anon` 可以删除“当前请求头 x-reviewer-id 对应 reviewer_id”的评价。

删除规则不是强认证，只是满足当前非公开评审需求。

## 8. 评价模块使用方式

在网页中：

1. 选择任意章节/教具。
2. 选择 `A 课件版` 或 `B 儿童版`。
3. 滚动到教具下方的 `评价面板`。
4. 登录：

```text
账号：1
密码：1
```

或：

```text
账号：2
密码：2
```

5. 输入文字评价并提交。
6. 刷新页面，如果评价仍在，说明 Supabase 持久化成功。
7. 去 Supabase `Table Editor → teaching_aid_reviews` 可看到数据。

评价显示规则：

- `T01-A` 的评价只在 `T01-A` 显示。
- `T01-B` 的评价只在 `T01-B` 显示。
- 不跨教具、不跨版本显示。

## 9. 教具清单

当前 `app.js` 中的 `tools` 数组定义了 26 个教具。

| 编号 | 单元 | 标题 | 类型 |
|---|---|---|---|
| T01 | 第一单元 | 1-5 的认识 | quantity |
| T02 | 第一单元 | 1-5 的加、减法 | addSub |
| T03 | 第一单元 | 0 的认识和加、减法 | zero |
| T04 | 第一单元 | 5 以内整理和复习 | review |
| T05 | 第二单元 | 6-9 的认识 | quantity |
| T06 | 第二单元 | 6-9 的分与合 | split |
| T07 | 第二单元 | 6 和 7 的加、减法 | addSub |
| T08 | 第二单元 | 8 和 9 的加、减法 | hidePart |
| T09 | 第二单元 | 10 的认识和加、减法 | tenFrame |
| T10 | 第二单元 | 连加、连减 | chain |
| T11 | 第二单元 | 加、减混合 | chain |
| T12 | 第二单元 | 10 以内整理和复习 | review |
| T13 | 第三单元 | 认识立体图形 | solids |
| T14 | 第三单元 | 搭一搭、拼一拼 | build |
| T15 | 第四单元 | 10 的再认识 | bundle10 |
| T16 | 第四单元 | 11-20 的认识与读写 | placeValue |
| T17 | 第四单元 | 11-20 的数序与比较 | numberLine |
| T18 | 第四单元 | 10 加几和相应减法 | tenPlus |
| T19 | 第四单元 | 之间有几人 | between |
| T20 | 第四单元 | 11-20 整理和复习 | placeValue |
| T21 | 第五单元 | 9 加几 | makeTen |
| T22 | 第五单元 | 8、7、6 加几 | makeTen |
| T23 | 第五单元 | 交换加数位置 | commutative |
| T24 | 第五单元 | 解决问题：一共有多少 | problem |
| T25 | 第五单元 | 解决问题：原来有多少 | problem |
| T26 | 第五单元 | 20 以内进位加法整理复习 | review |

## 10. 代码结构说明

主要逻辑都在 `app.js`。

### 关键数据

```js
const tools = [...]
```

这里配置教具编号、单元、标题、页码、目标、提示和类型。

新增一个教具时：

1. 在 `tools` 数组追加配置。
2. 如果复用已有 `type`，不需要新增渲染函数。
3. 如果是新类型，需要新增：

```js
function renderXxx(tool) {}
function bindXxx(tool) {}
```

4. 在 `renderByType` 和 `bindByType` 的映射中加入新类型。

### 渲染流程

```js
init()
render()
renderByType(tool)
bindByType(tool)
renderReviewPanel(tool)
bindReviewPanel(tool)
```

用户切换章节或 A/B 版本后，会重新渲染当前教具，并重新加载对应评价。

### A/B 风格

版本由变量控制：

```js
let version = "A";
```

页面 body 会写入：

```js
document.body.dataset.version = version.toLowerCase();
```

CSS 使用这些选择器做差异：

```css
body[data-version="a"] ...
body[data-version="b"] ...
.version-a ...
.version-b ...
```

当前定位：

- `A 课件版`：黑板网格、克制色彩、强调符号和算式。
- `B 儿童版`：暖色场景、圆润物件、颜色更活泼。

### 评价模块

核心函数：

```js
ensureReviews()
loadReviews(tool)
submitReview(tool, content)
deleteReview(tool, reviewId)
renderReviewPanel(tool)
bindReviewPanel(tool)
```

登录状态保存到：

```js
localStorage["teach-easy-reviewer"]
```

## 11. 已遇到的坑和解决办法

### 11.1 Vercel 404

问题：

```text
Vercel 显示 404
```

原因：

- 静态入口原来在 `汇总测试/index.html`。
- 仓库根目录没有 `index.html`。

解决：

- 将正式入口复制到根目录。
- 确保 Vercel root directory 是仓库根目录。

### 11.2 本地 127.0.0.1 拒绝连接

问题：

```text
127.0.0.1 拒绝建立连接
```

原因：

- 本地静态服务没开，或之前开的服务被关闭。

解决：

```bash
python3 -m http.server 8781 --bind 127.0.0.1
```

### 11.3 Supabase 建表警告

问题：

执行 SQL 时 Supabase 提示 destructive operations。

原因：

- SQL 中包含 `drop policy if exists`、`alter table`、`grant`。

解决：

- 这是预期警告。
- 确认脚本没有 `drop table`、`truncate`、`delete from` 后可以执行。

### 11.4 Supabase 表不存在

问题：

评价面板提示：

```text
评价读取失败。请确认已在 Supabase 执行 supabase-reviews.sql。
```

原因：

- Supabase 尚未执行建表脚本。
- 或 REST schema cache 尚未刷新。

解决：

- 执行 `supabase-reviews.sql`。
- 等待几十秒后刷新页面。

### 11.5 Supabase 国内访问可能不稳定

当前网站本体部署在 Vercel，评价数据在 Supabase。  
如果将来主要面向国内用户，可能出现：

- 网站能打开，但评价加载慢。
- Supabase 请求失败。

未来解决方向：

- 换国内数据库/云开发。
- 或使用国内后端中转 API。
- 或先保留 Supabase 用于小范围评审。

## 12. 后续优化建议

优先级从高到低：

1. **分步演示模式**
   - 先显示情境图。
   - 再显示问题。
   - 再显示算式。
   - 最后显示答案。
   - 这样更适合老师课堂提问。

2. **单元 + 小节两级选择**
   - 当前下拉框一次列出 26 项。
   - 后续可改为先选单元，再选小节。

3. **精修 A/B 差异**
   - 当前 A/B 已有视觉差异，但部分教具交互逻辑相同。
   - 后续可让 B 版使用更强情境故事，A 版保留板书/工具风格。

4. **按教材情境精修教具**
   - 目前很多是通用物体和通用情境。
   - 后续可结合每节教材图意做原创但更贴近教材的动画。

5. **评论后台/导出**
   - 可以增加“查看所有评价”页面。
   - 可以按教具导出 CSV。
   - 可以统计每个教具评价数量。

6. **正式账号系统**
   - 如果网站未来公开，建议改为 Supabase Auth 或国内后端登录。
   - 当前 `1/1`、`2/2` 只适合非公开评审。

## 13. 常用命令

本地启动：

```bash
python3 -m http.server 8781 --bind 127.0.0.1
```

检查 JS 语法：

```bash
/Users/xuechao/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check app.js
```

查看 git 状态：

```bash
git status -sb
```

提交：

```bash
git add README.md PROJECT_HANDOFF.md index.html styles.css app.js supabase-reviews.sql 汇总测试 测试
git commit -m "Update project"
git push
```

## 14. 新对话建议开场

如果以后新开对话，可以直接这样说：

```text
这是 Teach Easy 项目的交接文档：PROJECT_HANDOFF.md。
请先阅读它，然后继续帮我开发/修复/部署这个项目。
```

如果要继续开发，优先让 AI：

1. 读 `PROJECT_HANDOFF.md`
2. 读 `app.js`
3. 读 `styles.css`
4. 运行 `git status -sb`
5. 按具体任务修改

