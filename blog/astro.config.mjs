import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  markdown: {
    shikiConfig: {
      // Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      themes: {
        light: 'poimandres',
        dark: 'catppuccin-latte',
      },
    },
  },

  output: 'hybrid',
  build: {
    client: './client',
  },

})
