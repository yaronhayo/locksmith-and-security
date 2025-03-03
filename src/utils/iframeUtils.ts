
/**
 * Fixes doctypes in iframes to prevent Quirks Mode
 * This is especially important for third-party iframes like DoubleClick
 */
export const fixIframeDoctype = () => {
  try {
    // Use more defensive querySelector to avoid null issues
    const iframes = document.querySelectorAll('iframe') || [];
    
    if (!iframes.length) {
      return; // No iframes found, nothing to do
    }
    
    iframes.forEach(iframe => {
      try {
        // Guard against accessing properties that might not exist
        if (!iframe || !iframe.contentDocument) {
          return; // Skip this iframe
        }
        
        // Check if document is in quirks mode
        const isQuirksMode = iframe.contentDocument.compatMode === 'BackCompat';
        
        // If in quirks mode or missing doctype, add the proper DOCTYPE
        if (isQuirksMode || !iframe.contentDocument.doctype) {
          // Create a new doctype
          const doctype = document.implementation.createDocumentType('html', '', '');
          
          // Only insert if the iframe document has nodes and doesn't have a doctype already
          if (iframe.contentDocument.childNodes.length > 0 && !iframe.contentDocument.doctype) {
            try {
              // Check if first child exists before insertion
              if (iframe.contentDocument.childNodes[0]) {
                iframe.contentDocument.insertBefore(doctype, iframe.contentDocument.childNodes[0]);
              } else {
                iframe.contentDocument.appendChild(doctype);
              }
            } catch (insertError) {
              // Silently fail - log only in development
              if (import.meta.env.DEV) {
                console.debug('Could not insert doctype into iframe', insertError);
              }
            }
          }
        }
      } catch (e) {
        // Skip CORS-restricted iframes - only log in development
        if (import.meta.env.DEV) {
          console.debug('Could not access iframe content due to CORS policy');
        }
      }
    });
  } catch (error) {
    console.error('Error fixing iframe doctypes:', error);
  }
};

/**
 * Sets up a MutationObserver to fix doctypes in dynamically added iframes
 * Returns a cleanup function that safely handles observer disconnection
 */
export const setupIframeObserver = () => {
  // Create a reference to the observer to allow proper cleanup
  let observer = null;
  let intervalId = null;
  
  try {
    // Set up observer for dynamically added iframes
    observer = new MutationObserver((mutations) => {
      let shouldFix = false;
      
      // Check if any iframe was added
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length) {
          mutation.addedNodes.forEach(node => {
            if (node.nodeName === 'IFRAME' || 
                (node.nodeType === Node.ELEMENT_NODE && 
                 node instanceof HTMLElement && 
                 node.querySelector('iframe'))) {
              shouldFix = true;
            }
          });
        }
      });
      
      // Only run fix if necessary
      if (shouldFix) {
        fixIframeDoctype();
      }
    });
    
    // Start observing the document with a more targeted approach
    if (document.body) {
      observer.observe(document.body, { 
        childList: true, 
        subtree: true,
        attributes: false,
        characterData: false
      });
      
      // Run immediately
      fixIframeDoctype();
      
      // For development only
      if (import.meta.env.DEV) {
        console.log("Iframe observer started");
      }
    } else {
      // If body is not yet available, wait for it
      const bodyCheckInterval = setInterval(() => {
        if (document.body) {
          clearInterval(bodyCheckInterval);
          
          observer.observe(document.body, { 
            childList: true, 
            subtree: true,
            attributes: false,
            characterData: false
          });
          
          // Run immediately
          fixIframeDoctype();
          
          if (import.meta.env.DEV) {
            console.log("Iframe observer started (delayed)");
          }
        }
      }, 100);
      
      // Clean up interval after max 5 seconds if body never becomes available
      setTimeout(() => {
        clearInterval(bodyCheckInterval);
      }, 5000);
    }
    
    // Use a less frequent interval for periodic checks
    intervalId = setInterval(() => {
      try {
        fixIframeDoctype();
      } catch (e) {
        console.error("Error in iframe check interval:", e);
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
      }
    }, 10000); // Check every 10 seconds instead of 5
  } catch (error) {
    console.error("Error setting up iframe observer:", error);
  }
  
  // Return a cleanup function that safely handles observer disconnection
  return () => {
    try {
      if (observer) {
        observer.disconnect();
        observer = null;
        
        // For development only
        if (import.meta.env.DEV) {
          console.log("Iframe observer disconnected");
        }
      }
      
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        
        // For development only
        if (import.meta.env.DEV) {
          console.log("Iframe check interval cleared");
        }
      }
    } catch (error) {
      console.error("Error cleaning up iframe observer:", error);
    }
  };
};
