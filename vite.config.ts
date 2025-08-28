import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      manifest: {
        name: 'Pill depot',
        short_name: 'Pill depot',
        description: 'Easily save medications with their names and expiration dates',
        theme_color: '#212121',
        background_color: '#212121',
        icons: [{ src: 'favicon.webp', sizes: '180x180', type: 'image/webp' }],
        display: 'standalone',
        start_url: '/',
      },
      workbox: {},
      includeAssets: ['favicon.ico'],
    }),
  ],
  base: '/pill-depot/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
