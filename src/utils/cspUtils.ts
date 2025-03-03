
/**
 * Content Security Policy (CSP) utilities
 * Handles detection and testing of CSP issues
 */

import { toast } from 'sonner';

// Check for common CSP issues that might prevent scripts from loading
export const checkForCSPIssues = () => {
  try {
    // Attempt to load known external scripts that might be blocked by CSP
    const testScriptGoogle = document.createElement('script');
    testScriptGoogle.src = 'https://www.googletagmanager.com/gtm.js';
    testScriptGoogle.async = true;
    testScriptGoogle.onerror = (e) => {
      console.error('Failed to load Google Tag Manager. CSP might be blocking it.', e);
      toast.error('Failed to load Google Tag Manager. Check browser console for details.');
      
      // Record this error
      (window as any).cspErrors = (window as any).cspErrors || [];
      (window as any).cspErrors.push({
        source: 'www.googletagmanager.com',
        message: 'Failed to load script',
        timestamp: new Date().toISOString()
      });
    };
    
    testScriptGoogle.onload = () => {
      console.log('Google Tag Manager script loaded successfully');
    };
    
    document.head.appendChild(testScriptGoogle);
    
    // Check if dataLayer exists and is functioning
    setTimeout(() => {
      if (!(window as any).dataLayer) {
        console.warn('dataLayer not found after 1 second - GTM might not be loading properly');
      } else {
        console.log('dataLayer is present:', (window as any).dataLayer);
      }
    }, 1000);
  } catch (error) {
    console.error('Error while checking for CSP issues:', error);
  }
};
