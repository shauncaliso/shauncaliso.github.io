import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

export default defineConfig({
  vite: {
      server: {
          watch: {
              ignored: ['**/.vs/**']
          }
      }
  },

    site: "https://shauncaliso.github.io",
    base: '/shauncaliso.github.io/',
  integrations: [preact()]
});