/// <reference types="vite/client" />

interface Window {
  dataLayer: any[];
  clarity: (method: string, ...args: any[]) => void;
  gtag: (...args: any[]) => void;
}

interface PerformanceEntryMap {
  'first-input': PerformanceEntry[];
  'largest-contentful-paint': PerformanceEntry[];
  'layout-shift': PerformanceEntry[];
}

interface Performance {
  getEntriesByType(entryType: keyof PerformanceEntryMap): PerformanceEntry[];
}