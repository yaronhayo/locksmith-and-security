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

interface InterestGroup {
  owner: string;
  name: string;
  updateUrl?: string;
  dailyUpdateUrl?: string;
  bidUrl?: string;
  biddingLogicUrl?: string;
  trustedBiddingSignalsUrl?: string;
  userBiddingSignals?: any;
  ads?: Array<{ renderUrl: string; metadata?: any }>;
  adComponents?: Array<{ renderUrl: string; metadata?: any }>;
  trustedBiddingSignalsKeys?: string[];
  campaignId?: string;
}

interface Navigator {
  joinAdInterestGroup?: (group: InterestGroup, durationSeconds: number) => Promise<void>;
  leaveAdInterestGroup?: (options: { owner: string; name: string }) => Promise<void>;
  runAdAuction?: (config: any) => Promise<string | null>;
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
