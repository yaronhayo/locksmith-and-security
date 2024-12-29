import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initEmailJS } from './utils/emailjs'
import { setupPerformanceMonitoring } from './utils/performanceMonitoring'

// Initialize EmailJS
initEmailJS();

// Setup performance monitoring
if (process.env.NODE_ENV === 'development') {
  setupPerformanceMonitoring();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)