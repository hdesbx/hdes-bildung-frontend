import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/farben";
          @import "@/assets/scss/font-poppins";
        `,
        // 🧩 Sass-Warnungen unterdrücken (z. B. "color-functions")
        silenceDeprecations: ['color-functions']
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
