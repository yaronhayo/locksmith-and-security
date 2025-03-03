
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // This ensures React is included properly
      jsxRuntime: 'automatic',
      babel: {
        plugins: [
          // Add any babel plugins if needed
        ],
      },
    }),
  ],
  build: {
    outDir: 'dist',
    // Ensure external React is handled properly
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-navigation-menu'],
        },
      },
    },
    // Improve sourcemaps for debugging
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Ensure proper dependencies detection
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    force: true,
  },
  // Add better error handling
  server: {
    hmr: {
      overlay: true,
    },
  },
})
