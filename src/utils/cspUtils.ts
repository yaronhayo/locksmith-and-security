
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
    
    // Check third-party cookies
    checkThirdPartyCookies();
  } catch (error) {
    console.error('Error while checking for CSP issues:', error);
  }
};

// Check if third-party cookies are working
export const checkThirdPartyCookies = () => {
  // Create a hidden iframe to test third-party cookies
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  
  // Add a proper DOCTYPE to the iframe to prevent Quirks Mode
  iframe.srcdoc = `<!DOCTYPE html><html><head><title>Cookie Test</title></head><body><script>document.cookie = "testCookieInIframe=1; path=/; SameSite=None; Secure;";</script></body></html>`;
  
  iframe.onload = () => {
    console.log('Checking third-party cookie support via test iframe...');
    setTimeout(() => {
      // After the iframe loads, check if we can access cookies
      try {
        // Check if the iframe has content and is from the same origin (if not, we can't access it due to CORS)
        if (iframe.contentDocument) {
          console.log('Third-party iframe loaded successfully within same origin');
        } else {
          console.log('Third-party iframe loaded but cannot be accessed due to cross-origin restrictions (expected)');
          (window as any)._thirdPartyCookieTestComplete = true;
        }
      } catch (error) {
        console.log('Error accessing iframe content (expected for cross-origin):', error);
      }
      
      // Remove the test iframe
      document.body.removeChild(iframe);
    }, 2000);
  };
  
  document.body.appendChild(iframe);
  
  // Using the SameSite attribute test to detect cookie restrictions
  detectCookieRestrictions();
};

// Detect if cookie restrictions are in place
const detectCookieRestrictions = () => {
  // Test cookie that should work in all browsers
  document.cookie = "testCookie=1; path=/; SameSite=Lax; max-age=60";
  
  // Test cookie that might be blocked in browsers restricting 3rd party cookies
  document.cookie = "testThirdPartyCookie=1; path=/; SameSite=None; Secure; max-age=60";
  
  // Test partitioned cookie
  document.cookie = "testPartitionedCookie=1; path=/; SameSite=None; Secure; Partitioned; max-age=60";
  
  setTimeout(() => {
    const hasCookie = document.cookie.indexOf("testCookie=") !== -1;
    const hasThirdPartyCookie = document.cookie.indexOf("testThirdPartyCookie=") !== -1;
    const hasPartitionedCookie = document.cookie.indexOf("testPartitionedCookie=") !== -1;
    
    console.log('Cookie test results:', {
      standardCookies: hasCookie ? 'working' : 'blocked',
      thirdPartyCookies: hasThirdPartyCookie ? 'working' : 'may be restricted',
      partitionedCookies: hasPartitionedCookie ? 'working' : 'may not be supported'
    });
    
    if (hasCookie && !hasThirdPartyCookie) {
      console.warn('Third-party cookies may be blocked by browser settings');
      // Add to window for potential notification to user
      (window as any).thirdPartyCookiesBlocked = true;
    }
    
    // Mark the test as complete
    (window as any)._cookieTestComplete = true;
  }, 500);
};

// Function to handle partitioned cookies
export const setupPartitionedCookies = () => {
  try {
    // Check if the Partitioned attribute is supported
    const cookieStore = (window as any).cookieStore;
    if (cookieStore) {
      console.log('CookieStore API available, checking Partitioned support');
      
      // Try to set a partitioned cookie if the browser supports it
      cookieStore.set({
        name: 'testPartitioned',
        value: '1',
        partitioned: true,
        secure: true,
        sameSite: 'none',
        maxAge: 60
      }).then(() => {
        console.log('Successfully set partitioned cookie');
      }).catch((error: any) => {
        console.log('Failed to set partitioned cookie, may not be supported:', error);
      });
    } else {
      // Fallback for browsers without cookieStore
      try {
        document.cookie = "testPartitioned=1; Partitioned; Secure; SameSite=None; path=/; max-age=60";
        // Add a test for recaptcha-specific cookies
        document.cookie = "recaptcha_pref=1; Partitioned; Secure; SameSite=None; path=/; max-age=86400";
      } catch (error) {
        console.log('Partitioned cookie attribute not supported');
      }
    }
    
    // Adding specific CORS headers for third-party iframe resources
    window.addEventListener('message', function(event) {
      // Only handle messages from trusted origins
      if (event.origin === 'https://www.google.com' || 
          event.origin.includes('recaptcha') ||
          event.origin.includes('googleapis.com')) {
        console.log('Received message from:', event.origin);
      }
    }, false);
  } catch (error) {
    console.error('Error setting up partitioned cookies:', error);
  }
};

// Check and fix Quirks Mode issues in iframes
export const fixQuirksModeInIframes = () => {
  setTimeout(() => {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach((iframe) => {
      try {
        if (iframe.contentDocument && iframe.contentDocument.compatMode === 'BackCompat') {
          console.warn('Fixing Quirks Mode in iframe:', iframe);
          
          // Try to correct the doctype if possible
          const htmlContent = iframe.contentDocument.documentElement.outerHTML;
          const correctedContent = `<!DOCTYPE html>\n${htmlContent}`;
          
          // Only attempt to write if we can access the iframe
          if (iframe.contentDocument.open) {
            iframe.contentDocument.open();
            iframe.contentDocument.write(correctedContent);
            iframe.contentDocument.close();
          }
        }
      } catch (e) {
        // This is expected for cross-origin iframes
        console.log('Could not check/fix quirks mode in iframe (likely cross-origin)');
      }
    });
  }, 3000);
};
