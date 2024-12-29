/// <reference types="vite/client" />

interface Window {
  dataLayer?: any[];
  gtag?: (...args: any[]) => void;
  clarity?: (...args: any[]) => void;
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
  element: Element;
  id: string;
  loadTime: number;
  renderTime: number;
  size: number;
  startTime: number;
  url: string;
}

interface PerformanceResourceTiming extends PerformanceEntry {
  initiatorType: string;
  duration: number;
  name: string;
}