
/**
 * Utilities for dealing with iframe issues and ensuring proper DOCTYPE
 */

/**
 * Adds DOCTYPE to iframe document to prevent Quirks Mode
 * @param iframe - The HTMLIFrameElement to modify
 */
export const addDocTypeToIframe = (iframe: HTMLIFrameElement): void => {
  try {
    if (iframe.contentDocument && !iframe.contentDocument.doctype) {
      const doctype = document.implementation.createDocumentType('html', '', '');
      if (iframe.contentDocument.childNodes.length > 0) {
        iframe.contentDocument.insertBefore(doctype, iframe.contentDocument.childNodes[0]);
      }
    }
  } catch (e) {
    // Ignore errors due to CORS restrictions
    console.debug('Could not access iframe content due to CORS policy');
  }
};

/**
 * Sets up a mutation observer to monitor the DOM for iframe elements
 * and add DOCTYPE when they are created
 * @returns A function to call when cleaning up the observer
 */
export const setupIframeDocTypeFixer = (): () => void => {
  let observer: MutationObserver | null = null;

  const fixIframes = () => {
    try {
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach((iframe) => {
        addDocTypeToIframe(iframe);
      });
    } catch (error) {
      console.error('Error fixing iframes:', error);
    }
  };

  try {
    // Run initially
    fixIframes();

    // Set up observer for new iframes
    observer = new MutationObserver((mutations) => {
      let shouldFixIframes = false;
      
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length) {
          // Check if any iframe was added or an element that might contain an iframe
          for (let i = 0; i < mutation.addedNodes.length; i++) {
            const node = mutation.addedNodes[i];
            if (node.nodeName === 'IFRAME' || (node.nodeType === 1 && (node as Element).querySelector('iframe'))) {
              shouldFixIframes = true;
              break;
            }
          }
        }
      });
      
      if (shouldFixIframes) {
        fixIframes();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  } catch (error) {
    console.error('Error setting up iframe observer:', error);
  }

  // Return cleanup function
  return () => {
    if (observer) {
      observer.disconnect();
    }
  };
};

/**
 * Checks if the current environment is a production build
 */
export const isProduction = (): boolean => {
  return process.env.NODE_ENV === 'production' || 
         window.location.hostname !== 'localhost';
};

/**
 * Fixes base paths for client-side routing in deployed environments
 * to handle trailing slashes and subpaths properly
 */
export const getBasePath = (): string => {
  // For Netlify or other hosting platforms that might use subdirectories
  const pathname = window.location.pathname;
  const pathParts = pathname.split('/');
  
  // Check if we're in a subdirectory deployment
  if (pathParts.length > 2 && pathParts[1] !== '') {
    return '/' + pathParts[1];
  }
  
  return '';
};
