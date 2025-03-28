
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

// Add console warning for module loading issues
if (import.meta.env.PROD) {
  console.log('Production build loaded successfully');
  
  // Add diagnostics for module loading
  window.addEventListener('error', (event) => {
    if (event.message && event.message.includes('Failed to load module script')) {
      console.error('Module loading error detected. Please check network tab for details.');
    }
  });
}
