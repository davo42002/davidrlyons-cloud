// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://davidrlyons.cloud',
  integrations: [sitemap()],
  // Static by default; the /api/chat route opts into serverless via
  // `export const prerender = false`.
  adapter: vercel(),
});
