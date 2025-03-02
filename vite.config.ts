
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
        
        // Ensure the public directory exists
        if (!fs.existsSync('./dist')) {
          fs.mkdirSync('./dist', { recursive: true });
        }
        
        // Write the sitemap to the public directory
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
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
}));
