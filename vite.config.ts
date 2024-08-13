// mcbc-react-ts\vite.config.js
/** @type {import('vite').UserConfig} */
import path from 'node:path'

import svgr from '@svgr/rollup'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'
import EnvironmentPlugin from 'vite-plugin-environment'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin('all'), svgr({ exportType: 'default' })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: '0.0.0.0', // This is crucial
    hmr: {
      host: 'localhost',
      port: 8080,
    },
    watch: {
      usePolling: true,
    },
  },
})
