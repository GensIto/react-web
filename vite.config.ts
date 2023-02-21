import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteImagemin from 'vite-plugin-imagemin'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: './dist'
  },
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`
    }
  },
  plugins: [
    react(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 6,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 6
      },
      mozjpeg: {
        quality: 30
      },
      pngquant: {
        quality: [0.7, 0.8],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    })
  ]
})
