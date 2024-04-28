import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// 引入mdx
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
// 引入svg
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pelement-react/',
  plugins: [
    mdx({
      remarkPlugins: [remarkGfm]
    }),
    svgr(),
    react()
  ],
  resolve: {
    alias: {
      'pelement-react': path.resolve(__dirname, '../packages')
    }
  },
})