
/// <reference types="vite/client" />

interface Window {
  dataLayer?: any[];
  gtag?: (...args: any[]) => void;
  clarity?: (...args: any[]) => void;
  google: any;
  grecaptcha: any;
  requestIdleCallback: (
    callback: (deadline: {
      didTimeout: boolean;
      timeRemaining: () => number;
    }) => void,
    options?: { timeout: number }
  ) => number;
  cancelIdleCallback: (handle: number) => void;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput?: boolean;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

interface LargestContentfulPaintEntry extends PerformanceEntry {
  startTime: number;
}
