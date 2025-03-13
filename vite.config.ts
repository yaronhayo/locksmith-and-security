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

// Compression plugin for better production performance
const compressionPlugin = () => {
  return {
    name: 'compression-plugin',
    closeBundle: async () => {
      try {
        // Only import if needed to avoid dev dependencies in production
        const { gzip } = await import('zlib');
        const { promisify } = await import('util');
        const gzipPromise = promisify(gzip);
        
        if (!fs.existsSync('./dist')) return;
        
        // Find JS and CSS files to compress
        const files: string[] = [];
        const walkDir = (dir: string): void => {
          const entries = fs.readdirSync(dir, { withFileTypes: true });
          for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
              walkDir(fullPath);
            } else if (/\.(js|css|html|svg)$/.test(entry.name)) {
              files.push(fullPath);
            }
          }
        };
        
        walkDir('./dist');
        
        // Compress files
        for (const file of files) {
          const content = fs.readFileSync(file);
          const compressed = await gzipPromise(content);
          fs.writeFileSync(`${file}.gz`, compressed);
          console.log(`Compressed: ${file}.gz`);
        }
      } catch (error) {
        console.error('Failed to compress assets:', error);
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
    mode === 'production' && compressionPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2015',
    minify: 'terser', // Make sure terser is installed
    cssMinify: true,
    reportCompressedSize: false, // Speeds up build
    chunkSizeWarningLimit: 1000, // Higher threshold for warnings
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
        passes: 2, // Extra optimization pass
      },
      mangle: true,
      format: {
        comments: false, // Remove comments
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
          maps: ['@react-google-maps/api'],
          animations: ['framer-motion'],
          forms: ['react-hook-form', 'zod'],
          utils: ['@/lib/utils', '@/utils/performanceMonitoring'],
        },
        // Ensure consistent file naming to improve caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Increase concurrency for faster builds
    sourcemap: mode !== 'production',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
    esbuildOptions: {
      target: 'es2020',
    }
  },
  // Improve CSS handling
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      // Add any preprocessor options if needed
    },
  },
}));
