/// <reference types="vite/client" />

interface Window {
  google: any;
  dataLayer?: any[];
  gtag?: (...args: any[]) => void;
  clarity?: (...args: any[]) => void;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  sources: Array<{
    node?: Node;
    currentRect?: DOMRectReadOnly;
    previousRect?: DOMRectReadOnly;
  }>;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

interface LargestContentfulPaint extends PerformanceEntry {
  element: Element;
  id: string;
  loadTime: number;
  renderTime: number;
  size: number;
  startTime: number;
  url: string;
}

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: Error;
  }
}