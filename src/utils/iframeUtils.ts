
/**
 * Sets up a function to fix iframe DOCTYPEs, which can cause rendering issues in some browsers
 * 
 * @returns A cleanup function to remove event listeners
 */
export function setupIframeDocTypeFixer() {
  console.log('Setting up iframe DOCTYPE fixer');
  
  // Function to inject proper DOCTYPE into iframes
  const fixIframeDoctype = () => {
    try {
      const iframes = document.querySelectorAll('iframe');
      console.log(`Found ${iframes.length} iframes to check`);
      
      iframes.forEach((iframe, index) => {
        try {
          if (iframe.contentDocument && !iframe.contentDocument.doctype) {
            console.log(`Fixing DOCTYPE for iframe #${index}`);
            const doctype = document.implementation.createDocumentType('html', '', '');
            if (iframe.contentDocument.childNodes.length > 0) {
              iframe.contentDocument.insertBefore(doctype, iframe.contentDocument.childNodes[0]);
            }
          }
        } catch (e) {
          // Skip CORS-restricted iframes
          console.debug(`Could not access iframe #${index} content due to CORS policy:`, e);
        }
      });
    } catch (error) {
      console.error('Error fixing iframe doctypes:', error);
    }
  };
  
  // Set up a mutation observer to handle dynamically added iframes
  let observer;
  let intervalId;
  
  try {
    console.log('Setting up mutation observer for iframes');
    observer = new MutationObserver((mutations) => {
      let shouldFix = false;
      
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length) {
          // Check if any of the added nodes are iframes or could contain iframes
          for (let i = 0; i < mutation.addedNodes.length; i++) {
            const node = mutation.addedNodes[i];
            if (node.nodeName === 'IFRAME' || 
                (node instanceof Element && node.querySelectorAll && node.querySelectorAll('iframe').length > 0)) {
              shouldFix = true;
              break;
            }
          }
        }
      });
      
      if (shouldFix) {
        console.log('New iframes detected, fixing DOCTYPEs');
        fixIframeDoctype();
      }
    });
    
    // Start observing the document with specific configuration
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: false,
      characterData: false
    });
    
    // Run the fixer initially
    fixIframeDoctype();
    
    // Set up a periodic check to catch any iframes that might have been missed
    intervalId = setInterval(() => {
      console.log('Running periodic iframe DOCTYPE check');
      fixIframeDoctype();
    }, 5000);
    
    // Return a cleanup function
    return () => {
      console.log('Cleaning up iframe DOCTYPE fixer');
      if (observer) {
        observer.disconnect();
      }
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  } catch (error) {
    console.error('Error setting up iframe doctype fixer:', error);
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }; // Return empty cleanup function
  }
}
