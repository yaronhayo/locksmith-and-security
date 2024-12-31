import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initEmailJS } from './utils/emailjs'

// Initialize EmailJS
initEmailJS();

// Ensure Google Maps types are available
declare global {
  interface Window {
    google: typeof google;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)