# Ariel_Web 项目规则

Ariel动漫社（湖北工业大学 ACG 社团）的官网。Astro 5 静态站，部署到 GitHub Pages。

## 结构
- `src/site.config.ts`：社团名称、导航、QQ 群号（全站唯一来源）
- `src/data/club.ts`：部门、活动要点、活动照片等固定数据，**逐字取自招新海报，不要改写**
- `src/content/news/*.md`：社团动态（活动回顾、通知），frontmatter 见 `src/content.config.ts`
- `src/components/`：Header / Footer / SectionTitle / DepartmentList / PhotoGrid / JoinCard / NewsCard
- `src/pages/`：首页、部门、活动、社团动态、加入我们
- `public/images/`：从招新海报裁出的图片素材，另有完整海报 `recruit-poster.webp`

## 必须遵守
- 站内链接和图片一律用 `url()`（`src/utils/url.ts`），不要硬编码以 `/` 开头的路径。
- 配色只用 `src/styles/global.css` 里的 CSS 变量；海报主色：天蓝 `--sky`、粉 `--pink`、深蓝字 `--ink`、浅蓝底 `--bg`。
- 海报已有的文字（部门名、简介、活动要点、口号）以 `src/data/club.ts` 为准，页面里直接引用，不要重新措辞。
- 新增文案用简体中文，语气活泼但不浮夸。**不要编造**海报上没有的事实（活动日期、地点、部长姓名、成员人数、联系方式等）；不确定的内容标注 `TODO`。
- 不要修改 `astro.config.mjs` 和 `.github/workflows/deploy.yml`。
- 改完必须运行 `npm run build` 直到无报错。
