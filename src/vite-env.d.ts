
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
