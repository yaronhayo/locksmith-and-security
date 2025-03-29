
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

// Create a plugin to add a custom header to the index.html
const addHtmlHeaders = () => {
  return {
    name: 'add-html-headers',
    transformIndexHtml(html: string): string {
      // Ensure the DOCTYPE is correctly set
      if (!html.trim().startsWith('<!DOCTYPE html>')) {
        html = '<!DOCTYPE html>\n' + html.trim();
      }
      return html;
    }
  };
};

// Custom plugin to generate headers file for Netlify
const generateNetlifyHeaders = () => {
  return {
    name: 'generate-netlify-headers',
    closeBundle: () => {
      const headers = `
# Netlify headers file
# Proper MIME type for JavaScript modules
/*.js
  Content-Type: application/javascript

/*.js.map
  Content-Type: application/json

/*.css
  Content-Type: text/css

/*.svg
  Content-Type: image/svg+xml
      `;
      
      fs.writeFileSync('./dist/_headers', headers.trim());
      console.log('Generated _headers file for Netlify');
    }
  };
};

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: {
      'Content-Type': 'application/javascript',
    },
  },
  plugins: [
    react(),
    addHtmlHeaders(),
    mode === 'development' && componentTagger(),
    mode === 'production' && generateSitemap(),
    mode === 'production' && copyRedirects(),
    mode === 'production' && generateNetlifyHeaders(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Ensure proper module format and MIME types
        format: 'es',
        manualChunks: (id) => {
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
          
          // Group by route/feature
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
            // Extract the name of the page
            const pageName = id.split('/pages/')[1].split('/')[0];
            return `page-${pageName}`;
          }
        },
        // Ensure proper MIME types for JavaScript modules
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
    // Improve chunking to prevent dynamic import issues
    chunkSizeWarningLimit: 1000,
    sourcemap: true,
  },
  // Add optimizeDeps to improve loading of dynamic imports
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
    exclude: []
  },
}));
