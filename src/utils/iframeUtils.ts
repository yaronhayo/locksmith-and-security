
/**
 * Sets up a function to fix iframe DOCTYPEs, which can cause rendering issues in some browsers
 * 
 * @returns A cleanup function to remove event listeners
 */
export function setupIframeDocTypeFixer() {
  // Function to inject proper DOCTYPE into iframes
  const fixIframeDoctype = () => {
    try {
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach(iframe => {
        try {
          if (iframe.contentDocument && !iframe.contentDocument.doctype) {
            const doctype = document.implementation.createDocumentType('html', '', '');
            if (iframe.contentDocument.childNodes.length > 0) {
              iframe.contentDocument.insertBefore(doctype, iframe.contentDocument.childNodes[0]);
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
  
  // Set up a mutation observer to handle dynamically added iframes
  let observer;
  try {
    observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length) {
          fixIframeDoctype();
        }
      });
    });
    
    // Start observing the document
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Run the fixer initially
    fixIframeDoctype();
    
    // Set up a periodic check to catch any iframes that might have been missed
    const intervalId = setInterval(fixIframeDoctype, 3000);
    
    // Return a cleanup function
    return () => {
      if (observer) {
        observer.disconnect();
      }
      clearInterval(intervalId);
    };
  } catch (error) {
    console.error('Error setting up iframe doctype fixer:', error);
    return () => {}; // Return empty cleanup function
  }
}
