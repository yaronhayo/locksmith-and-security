
/**
 * Error handling utilities for the application
 * Contains functions for handling and logging various types of errors
 */

import { toast } from 'sonner';

// Enhanced error logging function with CSP detection
export const logError = (error: any, info: string) => {
  console.error(`[Error] ${info}:`, error);
  
  // Log additional information that might help debug
  if (error?.stack) {
    console.error('[Stack]:', error.stack);
  }
  
  // Check for specific error types
  if (error?.name === 'ChunkLoadError' || (error?.message && error.message.includes('Loading chunk'))) {
    console.error('[ChunkLoadError] This might be a code splitting issue');
  }

  // Check for potential CSP issues
  if (error?.message && (
    error.message.includes('Content Security Policy') || 
    error.message.includes('CSP') ||
    error.message.includes('script-src') ||
    error.message.includes('Failed to load module script')
  )) {
    console.error('[CSP Error] Potential Content Security Policy violation', error);
    
    // Show toast notification for CSP errors
    toast.error('Content Security Policy error. Some scripts might be blocked.');
  }

  // Log browser information for cross-domain debugging
  console.error('[Browser Info]', {
    userAgent: navigator.userAgent,
    location: window.location.toString(),
    host: window.location.host,
    protocol: window.location.protocol,
    pathname: window.location.pathname,
    search: window.location.search,
    href: window.location.href,
    origin: window.location.origin
  });
};

// Track unhandled errors
export const setupGlobalErrorHandlers = () => {
  if (typeof window !== 'undefined') {
    window.addEventListener('error', (event) => {
      // Check if this is a CSP error
      if (event.message && event.message.includes('Content Security Policy')) {
        (window as any).cspErrors = (window as any).cspErrors || [];
        (window as any).cspErrors.push({
          message: event.message,
          source: event.filename,
          timestamp: new Date().toISOString()
        });
        console.error('[CSP Error]', event);
        
        // Show toast notification for specific script loading failures
        if (event.filename && event.filename.includes('googletagmanager')) {
          toast.error('Failed to load Google Tag Manager due to CSP restrictions');
        }
      }
      
      logError(event.error, 'Global error caught');
    });

    window.addEventListener('securitypolicyviolation', (event) => {
      console.error('[CSP Violation]', {
        violatedDirective: event.violatedDirective,
        effectiveDirective: event.effectiveDirective,
        blockedURI: event.blockedURI,
        disposition: event.disposition,
        sample: event.sample
      });
      
      (window as any).cspErrors = (window as any).cspErrors || [];
      (window as any).cspErrors.push({
        directive: event.violatedDirective,
        blockedURI: event.blockedURI,
        timestamp: new Date().toISOString()
      });
      
      // Show toast notification for GTM specifically
      if (event.blockedURI && event.blockedURI.includes('googletagmanager.com')) {
        toast.error('Google Tag Manager is blocked by Content Security Policy');
      } else {
        toast.error(`Content Security Policy blocked: ${event.blockedURI}`);
      }
    });

    window.addEventListener('unhandledrejection', (event) => {
      logError(event.reason, 'Unhandled promise rejection');
    });
  }
};

// Handle white screen detection
export const setupWhiteScreenDetection = () => {
  if (typeof window !== 'undefined') {
    // Initialize hasRendered property
    (window as any).hasRendered = false;
    
    // Add CSP error detection to window object
    (window as any).cspErrors = [];
    (window as any)._cspTest = false;
    
    // Try to detect if we're in a white screen situation
    setTimeout(() => {
      if ((window as any).hasRendered === false) {
        console.error('Potential white screen detected - application did not render within 5 seconds');
        
        // Check if we have CSP errors
        if ((window as any).cspErrors && (window as any).cspErrors.length > 0) {
          console.error('CSP errors detected:', (window as any).cspErrors);
        }
        
        // Try to render a basic message if possible
        const rootElement = document.getElementById('root');
        if (rootElement) {
          rootElement.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: system-ui, sans-serif;">
              <h1 style="color: #E11D48; margin-bottom: 1rem;">Application Loading Error</h1>
              <p style="margin-bottom: 1rem;">We're having trouble loading the application. Please try refreshing the page.</p>
              <p style="margin-bottom: 1rem; font-size: 0.875rem; color: #6B7280;">If the problem persists, please try clearing your browser cache.</p>
              <button style="background: #2563EB; color: white; padding: 0.5rem 1rem; border: none; border-radius: 0.25rem; cursor: pointer;" onclick="location.reload()">Reload Page</button>
              <p style="margin-top: 1rem; font-size: 0.75rem; color: #6B7280;">Technical info: ${window.location.toString()}</p>
              <p style="margin-top: 0.5rem; font-size: 0.75rem; color: #6B7280;">CSP issues may prevent scripts from loading. Check console for details.</p>
              ${(window as any).cspErrors && (window as any).cspErrors.length ? `<p style="color: red; font-size: 0.8rem;">CSP blocked: ${(window as any).cspErrors.map((e: any) => e.blockedURI || e.message).join(', ')}</p>` : ''}
            </div>
          `;
        }
      }
    }, 5000);
  }
};
