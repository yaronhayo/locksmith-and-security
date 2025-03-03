
/// <reference types="vite/client" />

interface Window {
  dataLayer?: any[];
  gtag?: (...args: any[]) => void;
  clarity?: (...args: any[]) => void;
  google?: any;
  hasRendered?: boolean;
  grecaptcha?: {
    render: (container: HTMLElement | string, parameters: object) => number;
    reset: (widgetId?: number) => void;
    execute: (widgetId?: number) => void;
    ready: (callback: () => void) => void;
  };
  onRecaptchaLoaded?: () => void;
}

// Extended Navigator interface for Privacy Sandbox APIs
interface Navigator {
  joinAdInterestGroup?: (group: any, lifetime: number) => Promise<void>;
  leaveAdInterestGroup?: (group: any) => Promise<void>;
  runAdAuction?: (config: any) => Promise<string>;
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
