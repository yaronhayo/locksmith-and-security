import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      deleteOriginFile: false
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@/components/ui']
        }
      }
    }
  }
});