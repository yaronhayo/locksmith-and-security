
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

// Custom plugin to analyze bundle size
const analyzeBundleSize = () => {
  return {
    name: 'analyze-bundle-size',
    closeBundle: async () => {
      if (process.env.ANALYZE) {
        try {
          console.log('Analyzing bundle size...');
          // This would typically use a package like rollup-plugin-visualizer
          // but for now we'll just log that analysis is requested
        } catch (error) {
          console.error('Failed to analyze bundle size:', error);
        }
      }
    }
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
    mode === 'production' && analyzeBundleSize(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Improved chunk splitting strategy
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Create separate chunks for major libraries
          if (id.includes('node_modules')) {
            if (id.includes('react/') || id.includes('react-dom/')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer-motion';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('@radix-ui')) {
              return 'vendor-radix';
            }
            if (id.includes('@tanstack')) {
              return 'vendor-tanstack';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('react-google-maps') || id.includes('google-maps')) {
              return 'vendor-maps';
            }
            if (id.includes('@supabase')) {
              return 'vendor-supabase';
            }
            // Group remaining node_modules
            return 'vendor';
          }
          
          // Split component types
          if (id.includes('/components/ui/')) {
            return 'ui-components';
          }
          if (id.includes('/components/sections/')) {
            return 'section-components';
          }
          if (id.includes('/components/services/')) {
            return 'service-components';
          }
          if (id.includes('/utils/')) {
            return 'utils';
          }
          if (id.includes('/hooks/')) {
            return 'hooks';
          }
        },
      },
    },
    // Generate hashed file names for better caching
    assetsDir: 'assets',
    cssCodeSplit: true,
    sourcemap: mode !== 'production',
    // Add cache headers to output through headers file
    emptyOutDir: true,
    // Enable minification in production
    minify: mode === 'production' ? 'esbuild' : false,
    // Ensures tree-shaking works optimally
    target: 'es2020',
    // Ensure dead code elimination
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production'
      }
    }
  },
  // Enable deep tree-shaking
  esbuild: {
    pure: mode === 'production' ? ['console.log', 'console.debug', 'console.time', 'console.timeEnd'] : [],
    treeShaking: true,
  },
  // Optimize for production
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
  },
}));
