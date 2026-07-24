import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), cloudflare()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  build: {
    minify: 'oxc',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor'
          }
          if (id.includes('node_modules/motion')) {
            return 'motion'
          }
          if (
            id.includes('/sections/Capabilities') ||
            id.includes('/sections/Transformation') ||
            id.includes('/sections/Trust') ||
            id.includes('/sections/Insights') ||
            id.includes('/sections/Conversion')
          ) {
            return 'sections'
          }
        },
      },
    },
  },
})