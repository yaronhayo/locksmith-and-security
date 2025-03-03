
/// <reference types="vite/client" />

interface Window {
  dataLayer?: any[];
  gtag?: (...args: any[]) => void;
  clarity?: any;
  google?: any;
  hasRendered?: boolean;
  _cspTest?: boolean;
  cspErrors?: Array<{
    message?: string;
    directive?: string;
    blockedURI?: string;
    source?: string;
    timestamp: string;
  }>;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

interface LargestContentfulPaintEntry extends PerformanceEntry {
  startTime: number;
}
