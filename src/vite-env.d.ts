/// <reference types="vite/client" />

interface Window {
  dataLayer: any[];
  clarity: (method: string, ...args: any[]) => void;
  gtag: (...args: any[]) => void;
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

interface PerformanceEntryMap {
  'first-input': PerformanceEntry[];
  'largest-contentful-paint': PerformanceEntry[];
  'layout-shift': PerformanceEntry[];
}

interface Performance {
  getEntriesByType(entryType: keyof PerformanceEntryMap): PerformanceEntry[];
}