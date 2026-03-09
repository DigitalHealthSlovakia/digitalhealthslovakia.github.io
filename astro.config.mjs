export default defineConfig({
  site: 'https://digitalhealthslovakia.github.io',
  base: '/DHS_website/', 
  i18n: {
    defaultLocale: 'sk',
    locales: ['sk', 'en'], // or whatever your locales are
    routing: {
        prefixDefaultLocale: true,
        redirectToDefaultLocale: true
    }
  },
  output: 'static',
  integrations: [mdx(), sitemap()],
});