
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
    cors: true, // Enable CORS for all origins
    headers: {
      // Disable CSP during development to avoid script blocking
      'Content-Security-Policy': '',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    }
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
    // Enhanced chunk splitting strategy for better performance
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
            if (id.includes('react-hook-form')) {
              return 'vendor-form';
            }
            if (id.includes('@supabase')) {
              return 'vendor-supabase';
            }
            if (id.includes('recaptcha') || id.includes('captcha')) {
              return 'vendor-recaptcha';
            }
            // Group remaining node_modules
            return 'vendor';
          }
          
          // Split route components for better code splitting
          if (id.includes('/pages/')) {
            if (id.includes('/services/')) {
              if (id.includes('/auto-locksmith/')) {
                return 'route-services-auto';
              }
              if (id.includes('/commercial-locksmith/')) {
                return 'route-services-commercial';
              }
              if (id.includes('/residential-locksmith/')) {
                return 'route-services-residential';
              }
              if (id.includes('/emergency-locksmith/')) {
                return 'route-services-emergency';
              }
              return 'route-services';
            }
            if (id.includes('/service-areas/')) {
              return 'route-service-areas';
            }
            return 'route-pages';
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
          if (id.includes('/components/reviews/')) {
            return 'review-components';
          }
          if (id.includes('/components/meta/')) {
            return 'meta-components';
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
  },
  // Optimize for production
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
  },
}));
