import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 社团动态（活动回顾、通知）。每篇一个 md 文件放在 src/content/news/。
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { news };
