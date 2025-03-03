
/**
 * Extend Window interface with custom properties
 */

export {};

declare global {
  interface Window {
    hasRendered?: boolean;
    _cspTest?: boolean;
    cspErrors?: Array<{
      message?: string;
      directive?: string;
      blockedURI?: string;
      source?: string;
      timestamp: string;
    }>;
    dataLayer?: any[];
    clarity?: any;
    gtag?: (...args: any[]) => void;
    google?: any;
  }
}
