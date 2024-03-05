import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
  site: 'https://tricountylaborclub.com',
  integrations: [sitemap()],
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
