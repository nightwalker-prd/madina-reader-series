import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'books-1-4': [
            './src/data/book1',
            './src/data/book2',
            './src/data/book3',
            './src/data/book4',
          ],
          'books-5-8': [
            './src/data/book5',
            './src/data/book6',
            './src/data/book7',
            './src/data/book8',
          ],
        },
      },
    },
  },
})
