
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './utils/mapLoader'; // Import the map loader to ensure global initialization is set up

// Create root and render app
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

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
