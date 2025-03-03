
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import LoadingSpinner from './components/LoadingSpinner'
import { toast } from 'sonner'
import { Toaster } from './components/ui/sonner'

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
})

// Enhanced error logging function with CSP detection
const logError = (error: any, info: string) => {
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
}

// Check for common CSP issues
const checkForCSPIssues = () => {
  try {
    // Create a test script element to see if inline scripts are allowed
    const testScript = document.createElement('script');
    testScript.textContent = 'window._cspTest = true;';
    document.head.appendChild(testScript);
    
    // Check if our script executed (would fail with CSP restrictions)
    if ((window as any)._cspTest !== true) {
      console.warn('CSP might be blocking inline scripts');
    }
    
    // Test external script loading
    const externalScriptUrls = [
      'https://www.googletagmanager.com/gtm.js',
      'https://www.clarity.ms/tag',
      'https://cdn.gpteng.co/gptengineer.js'
    ];
    
    externalScriptUrls.forEach(url => {
      const scriptTest = document.createElement('script');
      scriptTest.src = url;
      scriptTest.async = true;
      
      scriptTest.onerror = () => {
        console.error(`CSP might be blocking external script: ${url}`);
        toast.error(`Failed to load script from ${new URL(url).hostname}. Check CSP.`);
      };
      
      document.head.appendChild(scriptTest);
      // Remove test script after checking
      setTimeout(() => document.head.removeChild(scriptTest), 1000);
    });
    
  } catch (error) {
    console.error('Error while checking for CSP issues:', error);
  }
};

// Initialize hasRendered property
if (typeof window !== 'undefined') {
  (window as any).hasRendered = false;
  
  // Add CSP error detection to window object
  (window as any).cspErrors = [];
  (window as any)._cspTest = false;
}

// Add global error handler to log any unhandled errors
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
    }
    
    logError(event.error, 'Global error caught');
    
    // Show toast notification for errors
    toast.error('An error occurred. Please try refreshing the page.');
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
    
    toast.error(`Content Security Policy blocked: ${event.blockedURI}`);
  });

  window.addEventListener('unhandledrejection', (event) => {
    logError(event.reason, 'Unhandled promise rejection');
    
    // Show toast notification for promise rejections
    toast.error('An error occurred with a background task. Please try refreshing the page.');
  });
  
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

// Check for CSP issues that might prevent scripts from loading
console.log('Checking for potential CSP issues at startup...');
checkForCSPIssues();

// Render the application with error boundaries
const renderApp = () => {
  console.log('Starting application render...');
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error('Root element not found');
    return;
  }
  
  try {
    console.log('Creating React root...');
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <ErrorBoundary 
          FallbackComponent={ErrorFallback}
          onError={(error, info) => {
            logError(error, `Error boundary caught error: ${info.componentStack}`);
          }}
        >
          <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="lg" text="Loading application..." /></div>}>
            <QueryClientProvider client={queryClient}>
              <App />
              <Toaster />
            </QueryClientProvider>
          </React.Suspense>
        </ErrorBoundary>
      </React.StrictMode>,
    );
    
    console.log('Application rendered successfully');
    if (typeof window !== 'undefined') {
      (window as any).hasRendered = true;
    }
  } catch (error) {
    logError(error, 'Failed to render application');
    
    // Attempt to render a minimal error message if regular rendering fails
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-center; height: 100vh; font-family: system-ui, sans-serif;">
          <h1 style="color: #E11D48; margin-bottom: 1rem;">Application Error</h1>
          <p style="margin-bottom: 1rem;">We're sorry, but something went wrong.</p>
          <p style="margin-bottom: 1rem; font-size: 0.875rem; color: #6B7280;">Technical details: ${error instanceof Error ? error.message : 'Unknown error'}</p>
          <button style="background: #2563EB; color: white; padding: 0.5rem 1rem; border: none; border-radius: 0.25rem; cursor: pointer;" onclick="location.reload()">Reload Page</button>
          <p style="margin-top: 1rem; font-size: 0.75rem; color: #6B7280;">URL: ${window.location.toString()}</p>
        </div>
      `;
    }
  }
};

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  // Execute the render function
  console.log('Initializing application...');
  renderApp();
}

// Fix TypeScript errors by adding these declarations to the window object
declare global {
  interface Window {
    hasRendered?: boolean;
    _cspTest?: boolean;
    cspErrors?: Array<{
      message?: string;
      directive?: string;
      blockedURI?: string;
      source?: string;
      timestamp: string;
    }>;
    dataLayer?: any[];
    clarity?: any;
  }
}
