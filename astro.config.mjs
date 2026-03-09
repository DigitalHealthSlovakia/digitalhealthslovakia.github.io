import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://digitalhealthslovakia.github.io',
  base: '/DHS_website/', // MUST have slashes on both sides
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
});