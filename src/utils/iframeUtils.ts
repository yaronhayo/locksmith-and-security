/**
 * Fixes doctypes in iframes to prevent Quirks Mode
 * This is especially important for third-party iframes like DoubleClick
 */
export const fixIframeDoctype = (iframe: HTMLIFrameElement): void => {
  try {
    if (!iframe || !iframe.contentDocument) return;
    
    // Only fix if we have a valid contentDocument
    const doc = iframe.contentDocument;
    
    // If doctype is missing, inject it
    if (!doc.doctype) {
      const doctype = '<!DOCTYPE html>';
      const html = doc.documentElement.outerHTML;
      
      // Only proceed if we have valid HTML content
      if (html && html.trim()) {
        // Write the new doctype + existing HTML
        doc.open();
        doc.write(doctype + html);
        doc.close();
      }
    }
  } catch (e) {
    // Silent fail - don't break the app over iframe fixes
    console.warn('Error fixing iframe doctype:', e);
  }
};

/**
 * Gets a safe reference to document.body with fallback
 * @returns A safe document.body reference or null
 */
const getSafeDocumentBody = (): HTMLElement | null => {
  try {
    if (document && document.body) {
      return document.body;
    }
  } catch (e) {
    console.warn('Error accessing document.body:', e);
  }
  return null;
};

/**
 * Safely checks if an element exists in the DOM
 * @param element The element to check
 * @returns boolean indicating if element is in DOM
 */
const isElementInDOM = (element: Element | null): boolean => {
  if (!element) return false;
  
  try {
    return document.contains(element);
  } catch (e) {
    console.warn('Error checking if element is in DOM:', e);
    return false;
  }
};

/**
 * Safe mutation observer wrapper that handles errors
 * @param callback The callback to execute
 * @returns A safe callback function
 */
const createSafeObserverCallback = (
  callback: (mutations: MutationRecord[]) => void
) => {
  return (mutations: MutationRecord[]): void => {
    try {
      callback(mutations);
    } catch (e) {
      console.warn('Error in mutation observer callback:', e);
    }
  };
};

/**
 * Sets up an observer to fix iframes as they are added to the DOM
 * @returns Cleanup function to disconnect the observer
 */
export const setupIframeObserver = (): (() => void) => {
  let observer: MutationObserver | null = null;
  let observerStartTimeout: number | null = null;
  
  const startObserver = () => {
    // If body isn't available yet, retry later
    const body = getSafeDocumentBody();
    if (!body) {
      // Retry soon but don't keep trying forever
      observerStartTimeout = window.setTimeout(startObserver, 500);
      return;
    }
    
    // Create a safe mutation observer
    try {
      observer = new MutationObserver(
        createSafeObserverCallback((mutations) => {
          // Process only node additions
          mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
              // Check added nodes for iframes
              mutation.addedNodes.forEach((node) => {
                // Handle direct iframe additions
                if (node.nodeName === 'IFRAME') {
                  fixIframeDoctype(node as HTMLIFrameElement);
                }
                
                // Handle iframes nested inside added elements
                if (node.nodeType === Node.ELEMENT_NODE) {
                  try {
                    const element = node as Element;
                    const iframes = element.querySelectorAll('iframe');
                    iframes.forEach((iframe) => {
                      fixIframeDoctype(iframe);
                    });
                  } catch (e) {
                    console.warn('Error processing nested iframes:', e);
                  }
                }
              });
            }
          });
        })
      );
      
      // Start observing with a safer configuration
      observer.observe(body, {
        childList: true,
        subtree: true,
      });
      
      // Process any existing iframes
      try {
        const existingIframes = document.querySelectorAll('iframe');
        existingIframes.forEach((iframe) => {
          fixIframeDoctype(iframe);
        });
      } catch (e) {
        console.warn('Error processing existing iframes:', e);
      }
      
      if (import.meta.env.DEV) {
        console.log('Iframe observer started successfully');
      }
    } catch (e) {
      console.error('Failed to create iframe observer:', e);
    }
  };
  
  // Start the observer immediately
  startObserver();
  
  // Return a cleanup function
  return () => {
    // Clear any pending timeout
    if (observerStartTimeout !== null) {
      clearTimeout(observerStartTimeout);
      observerStartTimeout = null;
    }
    
    // Disconnect the observer if it exists
    if (observer) {
      try {
        observer.disconnect();
        observer = null;
        
        if (import.meta.env.DEV) {
          console.log('Iframe observer cleaned up');
        }
      } catch (e) {
        console.warn('Error disconnecting iframe observer:', e);
      }
    }
  };
};

// Export additional iframe utilities for reuse
export const safelyRemoveIframe = (iframe: HTMLIFrameElement | null): void => {
  if (!iframe) return;
  
  try {
    // First check if iframe is actually in the DOM
    if (isElementInDOM(iframe)) {
      // Clear the source to stop any active content
      iframe.src = 'about:blank';
      
      // Only remove from DOM if it has a parent
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    }
  } catch (e) {
    console.warn('Error safely removing iframe:', e);
  }
};

export const getIframeDocument = (
  iframe: HTMLIFrameElement | null
): Document | null => {
  if (!iframe) return null;
  
  try {
    return iframe.contentDocument || 
      (iframe.contentWindow ? iframe.contentWindow.document : null);
  } catch (e) {
    console.warn('Error accessing iframe document:', e);
    return null;
  }
};
