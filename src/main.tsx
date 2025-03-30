
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './utils/mapLoader'; // Import the map loader to ensure global initialization is set up

// Create root and render app with error handling
const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Root element not found. Make sure there is a <div id="root"></div> in your HTML');
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Register service worker for production
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Add console diagnostics for module loading issues
if (import.meta.env.PROD) {
  console.log('Production build loaded successfully');
  
  // Add diagnostics for module loading
  window.addEventListener('error', (event) => {
    if (event.message && (
      event.message.includes('Failed to load module script') || 
      event.message.includes('SyntaxError') ||
      event.message.includes('ChunkLoadError')
    )) {
      console.error('Module loading error detected:', event.message);
      console.error('Error details:', event);
    }
  });
}

// Fix for third-party iframes in Quirks Mode
// This doesn't actually fix the third-party iframes, but helps detect them
document.addEventListener('DOMContentLoaded', () => {
  try {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      if (iframe.src && (iframe.src.includes('doubleclick.net') || iframe.src.includes('googleadservices.com'))) {
        console.log('Third-party iframe detected:', iframe.src);
      }
    });
  } catch (error) {
    console.error('Error checking iframes:', error);
  }
});

// Helper to force load Cloudflare Insights if needed
const loadCloudflareInsights = () => {
  if (!window.hasOwnProperty('_cf_chl_opt')) {
    const script = document.createElement('script');
    script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    script.defer = true;
    document.head.appendChild(script);
  }
};

// Only load Cloudflare Insights in production
if (import.meta.env.PROD) {
  window.addEventListener('load', loadCloudflareInsights);
}
