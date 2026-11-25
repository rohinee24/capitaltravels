import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Tailwind v3 is handled via PostCSS (postcss.config.js) — no @tailwindcss/vite plugin needed
export default defineConfig({
  plugins: [react(), tailwindcss(),],
})
