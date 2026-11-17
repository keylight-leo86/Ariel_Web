// 给站内路径加上部署时的 base（GitHub Pages 项目站点会部署在 /<仓库名>/ 下）。
// 所有站内链接、图片、静态资源都必须经过它。
export function url(path = '/'): string {
  if (/^([a-z]+:|\/\/|#)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
}
