
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';
import fs from 'fs';

// Custom plugin to generate sitemap during build
const generateSitemap = () => {
  return {
    name: 'generate-sitemap',
    closeBundle: async () => {
      try {
        // Dynamically import the sitemap generator
        const { generateSitemapXml } = await import('./src/utils/sitemapGenerator');
        const sitemap = generateSitemapXml();
        
        // Ensure the dist directory exists
        if (!fs.existsSync('./dist')) {
          fs.mkdirSync('./dist', { recursive: true });
        }
        
        // Write the sitemap to the dist directory
        fs.writeFileSync('./dist/sitemap.xml', sitemap);
        console.log('Generated sitemap.xml successfully');
      } catch (error) {
        console.error('Failed to generate sitemap:', error);
      }
    },
  };
};

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && generateSitemap(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2015',
    minify: 'terser',
    cssMinify: true,
    reportCompressedSize: false, // Speeds up build
    chunkSizeWarningLimit: 1000, // Higher threshold for warnings
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: [
            '@/components/ui/button', 
            '@/components/ui/card',
            '@/components/ui/form',
            '@/components/ui/input',
            '@/components/ui/skeleton'
          ],
          utils: ['@/lib/utils', '@/utils/performanceMonitoring'],
          maps: ['@react-google-maps/api'],
          animations: ['framer-motion'],
          forms: ['react-hook-form', 'zod'],
        },
        // Ensure consistent file naming to improve caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
}));
