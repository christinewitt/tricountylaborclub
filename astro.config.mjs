import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://tricountylaborclub.com',
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
