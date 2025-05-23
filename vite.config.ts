import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // This is important for GitHub Pages deployment
  server: {
    port: 3000,
    open: true
  }
}) 