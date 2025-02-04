type LogLevel = 'info' | 'warn' | 'error';

const logToService = (level: LogLevel, message: string, data?: any) => {
  // In a real application, this would send logs to a service like DataDog, New Relic, etc.
  // For now, we'll only log errors to console in production
  if (process.env.NODE_ENV === 'production' && level === 'error') {
    console.error(message, data);
  } else if (process.env.NODE_ENV !== 'production') {
    switch (level) {
      case 'info':
        console.log(message, data);
        break;
      case 'warn':
        console.warn(message, data);
        break;
      case 'error':
        console.error(message, data);
        break;
    }
  }
};

export const setupPerformanceMonitoring = () => {
  try {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        logToService('info', 'Performance Entry:', {
          name: entry.name,
          startTime: entry.startTime,
          duration: entry.duration,
          entryType: entry.entryType
        });
      }
    });

    observer.observe({ entryTypes: ['navigation', 'resource', 'paint'] });

    window.addEventListener('error', (event) => {
      logToService('error', 'Runtime Error:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      logToService('error', 'Unhandled Promise Rejection:', {
        reason: event.reason
      });
    });
  } catch (error) {
    logToService('error', 'Error setting up performance monitoring:', error);
  }
};