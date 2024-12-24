declare module 'web-vitals' {
  type Metric = {
    id: string;
    name: string;
    value: number;
    rating: 'good' | 'needs-improvement' | 'poor';
    delta: number;
    entries: PerformanceEntry[];
  };

  export function getCLS(onReport: (metric: Metric) => void): void;
  export function getFCP(onReport: (metric: Metric) => void): void;
  export function getFID(onReport: (metric: Metric) => void): void;
  export function getLCP(onReport: (metric: Metric) => void): void;
  export function getTTFB(onReport: (metric: Metric) => void): void;
}