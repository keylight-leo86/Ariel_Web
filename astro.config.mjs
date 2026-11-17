import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE / BASE_PATH 由 GitHub Actions（actions/configure-pages）在构建时注入；本地开发用默认值。
const site = process.env.SITE || 'http://localhost:4321';
// Git Bash 会把以 / 开头的环境变量值改写成 Windows 路径（如 C:/Program Files/Git/...），还原成 base 路径。
const rawBase = process.env.BASE_PATH || '/';
const base = rawBase.replace(/^([A-Za-z]:)?[\\/]Program Files[\\/]Git/, '') || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
