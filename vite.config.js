import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Important pour GitHub Pages
export default defineConfig({
  base: '/PORTFOLIO/',
  plugins: [react()],
})