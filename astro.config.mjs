// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.davidrlyons.cloud',
  // /og is a render target for the social card image, not indexable content.
  integrations: [sitemap({ filter: (page) => !page.includes('/og/') })],
  // Static by default; the /api/chat route opts into serverless via
  // `export const prerender = false`.
  adapter: vercel(),
});
