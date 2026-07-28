// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.davidrlyons.cloud',
  // /og is a render target for the social card image; the resume pages are
  // noindex. Submitting either in the sitemap just produces Search Console errors.
  integrations: [
    sitemap({
      filter: (page) =>
        !['/og/', '/resume/', '/resume-ops/'].some((p) => page.endsWith(p)),
    }),
  ],
  // Static by default; the /api/chat route opts into serverless via
  // `export const prerender = false`.
  adapter: vercel(),
});
