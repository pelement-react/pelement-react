import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// 引入mdx
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pelement-react/',
  plugins: [
    mdx({
      remarkPlugins: [remarkGfm]
    }),
    react()
  ],
})