/// <reference types="vite/client" />

interface Window {
  gtag: (command: string, action: string, params: any) => void;
  dataLayer: any[];
  clarity: (action: string, ...args: any[]) => void;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

interface LargestContentfulPaintEntry extends PerformanceEntry {
  startTime: number;
}

interface PerformanceNavigationTiming extends PerformanceEntry {
  responseStart: number;
  requestStart: number;
}