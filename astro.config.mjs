import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';


// https://astro.build/config
export default defineConfig({
  site: 'https://tricountylaborclub.com',
  integrations: [sitemap()],
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
