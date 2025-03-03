
/**
 * Utilities for handling iframe-related operations
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
 * Sets up a MutationObserver to fix DOCTYPE in all iframes
 * including dynamically added ones
 */
export const setupIframeDocTypeFixer = (): (() => void) => {
  // Function to fix all iframes in the document
  const fixAllIframes = () => {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => addDocTypeToIframe(iframe as HTMLIFrameElement));
  };
  
  // Run once on setup
  fixAllIframes();
  
  // Set up mutation observer to watch for new iframes
  const observer = new MutationObserver((mutations) => {
    let shouldFix = false;
    
    mutations.forEach(mutation => {
      if (mutation.type === 'childList' && mutation.addedNodes.length) {
        mutation.addedNodes.forEach(node => {
          // If the added node is an iframe or contains iframes
          if (node instanceof HTMLIFrameElement || 
              (node instanceof Element && node.querySelectorAll('iframe').length > 0)) {
            shouldFix = true;
          }
        });
      }
    });
    
    if (shouldFix) {
      fixAllIframes();
    }
  });
  
  // Start observing the document
  observer.observe(document.body, { 
    childList: true, 
    subtree: true 
  });
  
  // Return a cleanup function
  return () => observer.disconnect();
};
