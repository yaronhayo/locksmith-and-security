
/**
 * Utility functions to handle CORS issues
 */

/**
 * Adds CORS headers to fetch requests
 */
export const addCorsHeaders = (headers: HeadersInit = {}): HeadersInit => {
  return {
    ...headers,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  };
};

/**
 * Creates a proxy fetch function with CORS headers
 */
export const fetchWithCors = async (url: string, options: RequestInit = {}): Promise<Response> => {
  const corsOptions = {
    ...options,
    headers: addCorsHeaders(options.headers),
    mode: 'cors' as RequestMode
  };
  
  try {
    const response = await fetch(url, corsOptions);
    return response;
  } catch (error) {
    console.error('CORS fetch error:', error);
    // Fallback to no-cors mode if CORS request fails
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      const fallbackOptions = {
        ...options,
        mode: 'no-cors' as RequestMode
      };
      return fetch(url, fallbackOptions);
    }
    throw error;
  }
};

/**
 * Checks if third-party cookies are blocked
 */
export const checkThirdPartyCookies = async (): Promise<boolean> => {
  try {
    // Set a test cookie
    document.cookie = "testThirdPartyCookie=1; SameSite=None; Secure";
    
    // Check if the cookie was set
    const cookieEnabled = document.cookie.indexOf("testThirdPartyCookie=") !== -1;
    
    return cookieEnabled;
  } catch (error) {
    console.warn("Could not check third-party cookies:", error);
    return false;
  }
};

/**
 * Add DOCTYPE to iframe document if missing
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
    console.debug('Could not access iframe content due to CORS policy');
  }
};
