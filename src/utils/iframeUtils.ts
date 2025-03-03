
/**
 * Fixes doctypes in iframes to prevent Quirks Mode
 * This is especially important for third-party iframes like DoubleClick
 */
export const fixIframeDoctype = () => {
  try {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      try {
        // Only proceed if we can access the contentDocument (same-origin policy)
        if (iframe && iframe.contentDocument) {
          // Check if document is in quirks mode
          const isQuirksMode = iframe.contentDocument.compatMode === 'BackCompat';
          
          // If in quirks mode or missing doctype, add the proper DOCTYPE
          if (isQuirksMode || !iframe.contentDocument.doctype) {
            // Create a new doctype
            const doctype = document.implementation.createDocumentType('html', '', '');
            
            // Only insert if the iframe document has nodes and doesn't have a doctype already
            if (iframe.contentDocument.childNodes.length > 0 && !iframe.contentDocument.doctype) {
              try {
                iframe.contentDocument.insertBefore(doctype, iframe.contentDocument.childNodes[0]);
              } catch (insertError) {
                console.debug('Could not insert doctype into iframe', insertError);
              }
            }
          }
        }
      } catch (e) {
        // Skip CORS-restricted iframes
        console.debug('Could not access iframe content due to CORS policy');
      }
    });
  } catch (error) {
    console.error('Error fixing iframe doctypes:', error);
  }
};

/**
 * Sets up a MutationObserver to fix doctypes in dynamically added iframes
 * Returns a cleanup function
 */
export const setupIframeObserver = () => {
  // Create a reference to the observer to allow proper cleanup
  let observer = null;
  let intervalId = null;
  
  try {
    // Run immediately
    fixIframeDoctype();
    
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
      console.log("Iframe observer started");
    } else {
      console.warn("Document body not available for iframe observation");
    }
    
    // Use a less frequent interval for periodic checks
    intervalId = setInterval(() => {
      try {
        fixIframeDoctype();
      } catch (e) {
        console.error("Error in iframe check interval:", e);
        clearInterval(intervalId);
        intervalId = null;
      }
    }, 5000); // Check every 5 seconds instead of 2
  } catch (error) {
    console.error("Error setting up iframe observer:", error);
  }
  
  // Return a cleanup function
  return () => {
    try {
      if (observer) {
        observer.disconnect();
        observer = null;
        console.log("Iframe observer disconnected");
      }
      
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        console.log("Iframe check interval cleared");
      }
    } catch (error) {
      console.error("Error cleaning up iframe observer:", error);
    }
  };
};
