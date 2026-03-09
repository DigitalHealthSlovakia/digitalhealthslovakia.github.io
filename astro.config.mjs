import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://digitalhealthslovakia.github.io',
  base: '/DHS_website/', 
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  integrations: [mdx(), sitemap()],
});