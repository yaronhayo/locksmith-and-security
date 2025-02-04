/// <reference types="vite/client" />

interface Window {
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

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: Error;
  }
}