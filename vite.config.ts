
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { componentTagger } from "lovable-tagger"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
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
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
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
    // Report any build errors
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
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
  // Add better error handling and set port to 8080
  server: {
    port: 8080,
    host: "::",
    hmr: {
      overlay: true,
    },
    watch: {
      usePolling: true, // Can help with some file system issues
    },
  },
  // Ensure we get verbose error messages
  logLevel: 'info',
  clearScreen: false,
}))
