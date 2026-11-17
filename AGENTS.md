# Ariel_Web 项目规则

Astro 5 静态站，部署到 GitHub Pages（`.github/workflows/deploy.yml`）。

## 结构
- `src/site.config.ts`：站名、简介、导航、社交链接（全站唯一来源）
- `src/layouts/BaseLayout.astro`：所有页面共用的外壳
- `src/components/`：Header / Footer / PostCard / ProjectCard
- `src/pages/`：页面路由；`src/content/blog/*.md` 博客文章；`src/content/projects/*.md` 项目
- `src/content.config.ts`：内容的 frontmatter 校验规则
- `src/styles/global.css`：设计变量（`:root`）和全局样式

## 必须遵守
- 站内链接、图片、静态资源一律用 `url()`（`src/utils/url.ts`），不要硬编码以 `/` 开头的路径，否则部署到 `/<仓库名>/` 后会 404。
- 不要修改 `astro.config.mjs` 的 site/base 逻辑和 `deploy.yml`，除非构建无法通过。
- 颜色、圆角、字体只用 `global.css` 里的 CSS 变量，并保证深色模式可读。
- 内容用简体中文。不要编造真实个人经历、联系方式或数据；不确定的个人信息用明显的占位并标注 `TODO`。
- 改完必须运行 `npm run build` 直到无报错。
