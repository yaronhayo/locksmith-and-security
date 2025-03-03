
/**
 * Utilities for dealing with CORS and iframe issues
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
 * Fetch with CORS mode explicitly set
 * @param url - URL to fetch from
 * @param options - Fetch options
 */
export const fetchWithCors = async (url: string, options?: RequestInit) => {
  try {
    const response = await fetch(url, {
      ...options,
      mode: 'cors',
      credentials: 'include',
      headers: {
        ...options?.headers,
        'Accept': 'application/json',
      }
    });
    return response;
  } catch (error) {
    console.error('CORS fetch error:', error);
    throw error;
  }
};

/**
 * Utility to detect if browser has third-party cookies blocked
 */
export const checkThirdPartyCookies = async (): Promise<boolean> => {
  try {
    // Try to set a test cookie via an image request to Google
    const img = document.createElement('img');
    img.src = 'https://www.google.com/images/phd/px.gif';
    document.body.appendChild(img);
    
    // Give it some time to load
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if cookies were set
    return document.cookie.includes('NID=') || document.cookie.includes('1P_JAR=');
  } catch (e) {
    console.error('Error checking third-party cookies:', e);
    return false;
  }
};
