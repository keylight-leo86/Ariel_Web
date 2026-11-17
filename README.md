# Ariel动漫社官网

湖北工业大学 Ariel动漫社（ARIEL ACG CLUB）的官网。网站内容来自社团招新海报，用来介绍部门和活动，并引导新同学加入社团 QQ 群。

网站地址：<https://keylight-leo86.github.io/Ariel_Web/>

## 页面

| 路径 | 内容 |
| --- | --- |
| `/` | 首页：社团介绍、部门、活动、加群入口 |
| `/departments` | 部门：漫画、wota、宅舞、COS、轻音、文案、外联、摄影、音游，以及 Others |
| `/activities` | 活动：漫展、演出、社团日常，以及活动照片 |
| `/news` | 社团动态：活动回顾和通知 |
| `/join` | 加入我们：QQ 群号、二维码、招新海报 |

## 技术栈

- [Astro 5](https://astro.build/)，输出纯静态页面
- `@astrojs/sitemap` 生成站点地图
- GitHub Actions 构建，部署到 GitHub Pages

## 本地运行

需要 Node.js 20.3 或以上（CI 使用 Node 22）。

```bash
npm install
```

```bash
npm run dev
```

开发服务器默认在 <http://localhost:4321/>。

```bash
npm run build
```

构建结果在 `dist/`，可以用 `npm run preview` 在本地预览。

## 目录结构

```text
src/
├── site.config.ts        社团名称、导航、QQ 群号（全站唯一来源）
├── data/club.ts          部门、活动要点、活动照片等固定数据
├── content/news/         社团动态，每篇一个 Markdown 文件
├── content.config.ts     社团动态的 frontmatter 格式
├── components/           页头、页脚、板块标题、部门列表、照片网格、加群卡片、动态卡片
├── layouts/              页面公共布局
├── pages/                各页面
├── styles/global.css     全站样式和配色变量
└── utils/url.ts          站内链接加部署路径前缀
public/
├── favicon.svg
└── images/               活动照片、QQ 群二维码、完整招新海报
```

## 修改内容

### 群号、导航、社团名称

都在 `src/site.config.ts`。换群号时，同时替换 `public/images/qq-qr.webp` 里的二维码。

### 部门和活动介绍

在 `src/data/club.ts`。这里的文字逐字取自招新海报，海报更新后再对照修改。

### 活动照片

现在的照片是从海报上裁下来的，分辨率较低。有原图时，用同名文件替换 `public/images/activity-1.webp` 到 `activity-4.webp` 即可，照片说明在 `src/data/club.ts` 的 `ACTIVITY_PHOTOS` 里。

### 发布社团动态

在 `src/content/news/` 新建一个 `.md` 文件，文件名就是网址，例如 `2025-autumn-expo.md` 对应 `/news/2025-autumn-expo`。

```markdown
---
title: 秋季漫展出摊
description: 一句话简介，会显示在动态列表里。
date: 2025-10-01
tags:
  - 活动回顾
cover: /images/activity-1.webp
coverAlt: 封面图说明
---

正文写在这里。
```

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `title` | 是 | 标题 |
| `description` | 是 | 列表里的简介 |
| `date` | 是 | 日期，按日期倒序排列 |
| `tags` | 否 | 标签 |
| `cover` | 否 | 封面图，放在 `public/images/` 下，写 `/images/...` |
| `coverAlt` | 否 | 封面图说明 |
| `draft` | 否 | 设为 `true` 则不发布 |

正文里不要写以 `/` 开头的站内链接或图片路径。网站部署在 `/Ariel_Web/` 子路径下，这类链接上线后会失效；图片请用 `cover` 字段。

## 部署

推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动构建并发布到 GitHub Pages，也可以在 Actions 页面手动运行。

第一次部署前，需要在仓库的 Settings → Pages → Build and deployment → Source 中选择 **GitHub Actions**。

部署路径由 `actions/configure-pages` 提供，构建时通过环境变量 `SITE` 和 `BASE_PATH` 传给 `astro.config.mjs`，本地开发不需要设置。

## 开发约定

- 站内链接和图片路径都经过 `src/utils/url.ts` 的 `url()`，不要在页面里写死以 `/` 开头的路径。
- 配色只用 `src/styles/global.css` 里的 CSS 变量，主色取自海报：天蓝 `--sky`、粉 `--pink`、深蓝 `--ink`。
- 不写海报和社团没有确认过的信息，比如活动日期、地点、部长姓名、成员人数。不确定的地方标 `TODO`。
- 提交前运行 `npm run build`，确认没有报错。

## 加入我们

QQ 群：241831682
