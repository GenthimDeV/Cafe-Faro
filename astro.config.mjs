// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://cafe-faro.pages.dev',
  output: 'static',
  // CSS en línea: evita la hoja bloqueante de render (pesa < 10 KB).
  build: { inlineStylesheets: 'always' },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
