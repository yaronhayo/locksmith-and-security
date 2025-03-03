
/**
 * Fixes doctypes in iframes to prevent Quirks Mode
 * This is especially important for third-party iframes like DoubleClick
 */
export const fixIframeDoctype = () => {
  try {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      try {
        if (iframe.contentDocument) {
          // Only try to access cross-origin iframes that we can access
          // Check if document is in quirks mode
          const isQuirksMode = iframe.contentDocument.compatMode === 'BackCompat';
          
          // If in quirks mode or missing doctype, add the proper DOCTYPE
          if (isQuirksMode || !iframe.contentDocument.doctype) {
            const doctype = document.implementation.createDocumentType('html', '', '');
            if (iframe.contentDocument.childNodes.length > 0) {
              iframe.contentDocument.insertBefore(doctype, iframe.contentDocument.childNodes[0]);
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
 */
export const setupIframeObserver = () => {
  // Run immediately
  fixIframeDoctype();
  
  // Set up observer for dynamically added iframes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length) {
        fixIframeDoctype();
      }
    });
  });
  
  // Start observing the document
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Also set a periodic check every 2 seconds
  const intervalId = setInterval(fixIframeDoctype, 2000);
  
  // Return a cleanup function to remove the observer and interval if needed
  return () => {
    observer.disconnect();
    clearInterval(intervalId);
  };
};
