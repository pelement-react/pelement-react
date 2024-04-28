import { readFileSync } from 'fs'
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import typescript from '@rollup/plugin-typescript'
// 引入mdx
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
// 引入svg
import svgr from 'vite-plugin-svgr'

const packageJson = JSON.parse(
  readFileSync('./package.json', { encoding: 'utf-8' })
)
const globals = {
  ...(packageJson?.dependencies || {})
}

function resolve(str: string) {
  return path.resolve(__dirname, str)
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pelement-react/',
  plugins: [
    mdx({
      remarkPlugins: [remarkGfm]
    }),
    svgr(),
    react(),
    typescript({
      target: 'es5',
      rootDir: resolve('packages/'),
      declaration: true,
      declarationDir: resolve('dist'),
      exclude: resolve('node_modules/**'),
      allowSyntheticDefaultImports: true,
    }),
  ],
  resolve: {
    alias: {
      'pelement-react': path.resolve(__dirname, 'packages')
    }
  },
  build: {
    // 输出文件夹
    outDir: 'dist',
    lib: {
      // 组件库源码的入口文件
      entry: resolve('./packages/index.tsx'),
      // 组件库名称
      name: 'pelement-react',
      // 文件名称
      fileName: 'pelement-react'
    },
    rollupOptions: {
      // 排除不相关的依赖
      external: ['react', 'react-dom', ...Object.keys(globals)]
    }
  },
})