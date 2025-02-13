
import { logToService } from './performanceMonitoring';

interface MapLoadMetrics {
  scriptLoadTime: number;
  instanceLoadTime: number;
  markersCount: number;
}

class MapPerformanceTracker {
  private static instance: MapPerformanceTracker;
  private metrics: MapLoadMetrics = {
    scriptLoadTime: 0,
    instanceLoadTime: 0,
    markersCount: 0
  };

  private constructor() {}

  static getInstance(): MapPerformanceTracker {
    if (!MapPerformanceTracker.instance) {
      MapPerformanceTracker.instance = new MapPerformanceTracker();
    }
    return MapPerformanceTracker.instance;
  }

  trackScriptLoad(startTime: number) {
    this.metrics.scriptLoadTime = performance.now() - startTime;
    this.logMetrics('Script Load');
  }

  trackInstanceLoad(startTime: number) {
    this.metrics.instanceLoadTime = performance.now() - startTime;
    this.logMetrics('Instance Load');
  }

  setMarkersCount(count: number) {
    this.metrics.markersCount = count;
    this.logMetrics('Markers Update');
  }

  private logMetrics(event: string) {
    logToService('info', `Map Performance - ${event}:`, this.metrics);
  }
}

export const mapPerformance = MapPerformanceTracker.getInstance();
