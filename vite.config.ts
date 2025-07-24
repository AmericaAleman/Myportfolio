import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
})
function tailwindcss(): import("vite").PluginOption {
  return {
    name: 'vite:tailwindcss',
    config() {
      // No-op, just a placeholder for plugin registration
    },
    async transform(_code, id) {
      if (id.endsWith('.css')) {
        // Let Vite handle CSS, Tailwind will be picked up via PostCSS config
        return null;
      }
      return null;
    },
  };
}

