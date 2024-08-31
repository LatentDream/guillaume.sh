import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import rehypePrettyCode from "rehype-pretty-code";
import tailwind from '@astrojs/tailwind'


// https://astro.build/config
export default defineConfig({
  site: 'https://latentdream.dev',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    rehypePlugins: [[rehypePrettyCode, { theme: "vitesse-dark" }]],
    syntaxHighlight: false,
  },

})

