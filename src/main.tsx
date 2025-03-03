
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { setupIframeDocTypeFixer } from './utils/iframeUtils'

// Define window.grecaptcha as a global type
declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoaded?: () => void;
  }
}

// Create a callback function that will be triggered when reCAPTCHA is loaded
window.onRecaptchaLoaded = () => {
  console.log("reCAPTCHA API loaded successfully");
};

// Initialize iframe DOCTYPE fixer
const cleanup = setupIframeDocTypeFixer();

// Add an event listener to clean up when the window is closed
window.addEventListener('beforeunload', () => {
  cleanup();
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
