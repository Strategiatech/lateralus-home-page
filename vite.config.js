import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Local Codex preview path. GitHub Pages workflow overrides this with
// --base=/lateralus-home-page/ for the organization Pages URL.
export default defineConfig({
  plugins: [react()],
  base: '/claude-pages/lateralus-home-page/',
})
