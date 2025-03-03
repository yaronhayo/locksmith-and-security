
/**
 * Utility to fix iframe DOCTYPE issues in various browsers
 * This helps prevent rendering problems with iframes
 */
export const setupIframeDocTypeFixer = (): (() => void) => {
  // Function to inject proper DOCTYPE into iframes
  const fixIframeDoctype = () => {
    try {
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach(iframe => {
        try {
          // Only attempt to access if same-origin
          if (iframe.contentDocument && !iframe.contentDocument.doctype) {
            const doctype = document.implementation.createDocumentType('html', '', '');
            if (iframe.contentDocument.childNodes.length > 0) {
              iframe.contentDocument.insertBefore(doctype, iframe.contentDocument.childNodes[0]);
            }
          }
        } catch (e) {
          // Skip CORS-restricted iframes silently
          console.debug('Could not access iframe content due to CORS policy');
        }
      });
    } catch (error) {
      console.error('Error in fixIframeDoctype:', error);
    }
  };

  // Initial fix
  setTimeout(fixIframeDoctype, 100);

  // Set up observer to handle dynamically added iframes
  let observer: MutationObserver | null = null;
  try {
    observer = new MutationObserver((mutations) => {
      let shouldFix = false;
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length) {
          // Check if any iframe was added
          mutation.addedNodes.forEach(node => {
            if (node.nodeName === 'IFRAME' || 
                (node instanceof Element && node.querySelector('iframe'))) {
              shouldFix = true;
            }
          });
        }
      });
      
      if (shouldFix) {
        fixIframeDoctype();
      }
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
  } catch (error) {
    console.error('Error setting up MutationObserver:', error);
  }

  // Return cleanup function
  return () => {
    try {
      if (observer) {
        observer.disconnect();
      }
    } catch (error) {
      console.error('Error cleaning up MutationObserver:', error);
    }
  };
};
