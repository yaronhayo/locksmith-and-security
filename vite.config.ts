
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

// Custom plugin to copy _redirects file to the dist folder
const copyRedirects = () => {
  return {
    name: 'copy-redirects',
    closeBundle: () => {
      if (fs.existsSync('./public/_redirects')) {
        fs.copyFileSync('./public/_redirects', './dist/_redirects');
        console.log('Copied _redirects file to dist folder');
      }
    },
  };
};

// Custom plugin to copy index.html to the dist folder as 200.html for SPA routing
const copySpaFallback = () => {
  return {
    name: 'copy-spa-fallback',
    closeBundle: () => {
      if (fs.existsSync('./dist/index.html')) {
        fs.copyFileSync('./dist/index.html', './dist/200.html');
        console.log('Created SPA fallback (200.html)');
      }
    },
  };
};

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    cors: true
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && generateSitemap(),
    mode === 'production' && copyRedirects(),
    mode === 'production' && copySpaFallback()
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('@tanstack/react-query')) {
              return 'vendor-query';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            if (id.includes('@radix-ui')) {
              return 'vendor-radix';
            }
            return 'vendor'; // all other node_modules
          }
          
          // Group by feature
          if (id.includes('/components/BookingForm/')) {
            return 'booking-form';
          }
          if (id.includes('/components/service-areas/')) {
            return 'service-areas';
          }
          if (id.includes('/components/contact/')) {
            return 'contact';
          }
          if (id.includes('/pages/')) {
            // Extract more general page name to prevent too many chunks
            const path = id.split('/pages/')[1]?.split('/')[0];
            if (path) {
              return `page-${path.replace(/\/.*/g, '')}`; // Remove nested paths to consolidate chunks
            }
          }
          return null; // use default chunk
        },
        // Ensure proper MIME types for JavaScript modules
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      },
    },
    // Improve chunking to prevent dynamic import issues
    chunkSizeWarningLimit: 2000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true
      }
    }
  },
  // Add optimizeDeps to improve loading of dynamic imports
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'framer-motion',
      '@tanstack/react-query',
      'sonner'
    ],
    exclude: []
  },
  // Ensure proper content types are set for JavaScript modules
  preview: {
    headers: {
      '*.js': {
        'Content-Type': 'application/javascript'
      }
    }
  }
}));
