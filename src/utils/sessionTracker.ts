interface GeolocationData {
  city?: string;
  region?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
}

export interface SessionData {
  visitorInfo: {
    userAgent: string;
    language: string;
    platform: string;
    screenResolution: string;
    windowSize: string;
    timestamp: string;
    timezone: string;
    deviceType: string;
    browser: string;
    browserVersion: string;
    operatingSystem: string;
    ipAddress?: string;
    geolocation?: GeolocationData;
    formCompletionTime?: number;
    pageLoadTime?: number;
    visitDuration?: number;
  };
  trafficSource: {
    source: string;
    medium: string;
    campaign: string;
    keyword: string;
    clickPath: string[];
    entryPage: string;
    referrer: string;
    directNavigation: boolean;
    previousVisits?: number;
    previousSubmissions?: number;
    lastVisitDate?: string;
  };
  pageMetrics: {
    timeOnPage: number;
    scrollDepth: number;
    pageInteractions: number;
    formFocusEvents: number;
    conversionTime: number;
  };
}

// Initialize session tracking data when the module loads
let sessionStart = Date.now();
let pageLoaded = 0;
let formStartTime = 0;
let maxScrollDepth = 0;
let interactionCount = 0;
let formFocusCount = 0;
let clickPaths: string[] = [];

// Detect browser and device information
const detectBrowser = (): { browser: string; version: string; os: string; deviceType: string } => {
  const ua = navigator.userAgent;
  let browser = "Unknown";
  let version = "Unknown";
  let os = "Unknown";
  let deviceType = "Unknown";
  
  // Operating System Detection
  if (/Windows/.test(ua)) os = "Windows";
  else if (/Macintosh|Mac OS X/.test(ua)) os = "macOS";
  else if (/Linux/.test(ua)) os = "Linux";
  else if (/Android/.test(ua)) os = "Android";
  else if (/iPhone|iPad|iPod/.test(ua)) os = "iOS";
  
  // Device Type Detection
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
    deviceType = /iPad/i.test(ua) ? "Tablet" : "Mobile";
  } else {
    deviceType = "Desktop";
  }
  
  // Browser Detection
  if (/Chrome/.test(ua) && !/Chromium|Edge|Edg|OPR|Opera/.test(ua)) {
    browser = "Chrome";
    const match = ua.match(/Chrome\/(\d+\.\d+)/);
    if (match) version = match[1];
  } else if (/Firefox/.test(ua)) {
    browser = "Firefox";
    const match = ua.match(/Firefox\/(\d+\.\d+)/);
    if (match) version = match[1];
  } else if (/Safari/.test(ua) && !/Chrome|Chromium|Edge|Edg|OPR|Opera/.test(ua)) {
    browser = "Safari";
    const match = ua.match(/Version\/(\d+\.\d+)/);
    if (match) version = match[1];
  } else if (/Edge|Edg/.test(ua)) {
    browser = "Edge";
    const match = ua.match(/Edge\/(\d+\.\d+)|Edg\/(\d+\.\d+)/);
    if (match) version = match[1] || match[2];
  } else if (/OPR|Opera/.test(ua)) {
    browser = "Opera";
    const match = ua.match(/OPR\/(\d+\.\d+)|Opera\/(\d+\.\d+)/);
    if (match) version = match[1] || match[2];
  } else if (/MSIE|Trident/.test(ua)) {
    browser = "Internet Explorer";
    const match = ua.match(/MSIE (\d+\.\d+)/) || ua.match(/rv:(\d+\.\d+)/);
    if (match) version = match[1];
  }
  
  return { browser, version, os, deviceType };
};

// Initialize session tracking
export const initSessionTracking = (): void => {
  // Record page load time
  if (window.performance) {
    const perfData = window.performance.timing;
    pageLoaded = perfData.domContentLoadedEventEnd - perfData.navigationStart;
  }
  
  // Initialize entry page
  if (!sessionStorage.getItem('entryPage')) {
    sessionStorage.setItem('entryPage', window.location.pathname);
  }
  
  // Track previous visits
  const visitCount = localStorage.getItem('visitCount');
  const newVisitCount = visitCount ? parseInt(visitCount) + 1 : 1;
  localStorage.setItem('visitCount', newVisitCount.toString());
  localStorage.setItem('lastVisitDate', new Date().toISOString());
  
  // Initialize click path with current page
  if (sessionStorage.getItem('clickPath')) {
    const paths = JSON.parse(sessionStorage.getItem('clickPath') || '[]');
    if (paths[paths.length - 1] !== window.location.pathname) {
      paths.push(window.location.pathname);
      sessionStorage.setItem('clickPath', JSON.stringify(paths));
    }
    clickPaths = paths;
  } else {
    clickPaths = [window.location.pathname];
    sessionStorage.setItem('clickPath', JSON.stringify(clickPaths));
  }
  
  // Set up scroll depth tracking
  document.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    maxScrollDepth = Math.max(maxScrollDepth, Math.round(scrollPercent));
  });
  
  // Track user interactions
  document.addEventListener('click', () => {
    interactionCount++;
  });
  
  document.addEventListener('keydown', () => {
    interactionCount++;
  });
  
  // Track form interactions
  document.addEventListener('focusin', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
      if (formStartTime === 0) {
        formStartTime = Date.now();
      }
      formFocusCount++;
    }
  });
};

// Start tracking form interaction
export const startFormTracking = (): void => {
  formStartTime = Date.now();
};

// Get all collected session data
export const getSessionData = async (): Promise<SessionData> => {
  // Calculate time-based metrics
  const now = Date.now();
  const visitDuration = Math.round((now - sessionStart) / 1000);
  const formCompletionTime = formStartTime > 0 ? Math.round((now - formStartTime) / 1000) : undefined;
  
  // Get browser and device info
  const { browser, version, os, deviceType } = detectBrowser();
  
  // Get referrer information
  const referrer = document.referrer;
  
  // Parse UTM parameters
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source') || localStorage.getItem('utm_source') || '';
  const utmMedium = urlParams.get('utm_medium') || localStorage.getItem('utm_medium') || '';
  const utmCampaign = urlParams.get('utm_campaign') || localStorage.getItem('utm_campaign') || '';
  const utmKeyword = urlParams.get('utm_term') || localStorage.getItem('utm_term') || '';
  
  // Determine traffic source
  let source = 'direct';
  let medium = 'none';
  
  if (utmSource) {
    source = utmSource;
    medium = utmMedium;
  } else if (referrer) {
    const referrerUrl = new URL(referrer);
    const hostName = referrerUrl.hostname;
    
    if (hostName.includes('google')) {
      source = 'google';
      medium = 'organic';
    } else if (hostName.includes('bing')) {
      source = 'bing';
      medium = 'organic';
    } else if (hostName.includes('facebook')) {
      source = 'facebook';
      medium = 'social';
    } else if (hostName.includes('instagram')) {
      source = 'instagram';
      medium = 'social';
    } else if (hostName.includes('twitter') || hostName.includes('x.com')) {
      source = 'twitter';
      medium = 'social';
    } else if (hostName.includes('linkedin')) {
      source = 'linkedin';
      medium = 'social';
    } else if (hostName.includes('youtube')) {
      source = 'youtube';
      medium = 'referral';
    } else {
      source = hostName;
      medium = 'referral';
    }
  }
  
  // Get previous form submissions count
  const submissionCount = localStorage.getItem('submissionCount');
  const previousSubmissions = submissionCount ? parseInt(submissionCount) : 0;
  
  // Increment submission count after form submission
  const incrementSubmissionCount = () => {
    localStorage.setItem('submissionCount', (previousSubmissions + 1).toString());
  };
  
  // Schedule the increment for after this function returns
  setTimeout(incrementSubmissionCount, 0);
  
  return {
    visitorInfo: {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      windowSize: `${window.innerWidth}x${window.innerHeight}`,
      timestamp: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      deviceType,
      browser,
      browserVersion: version,
      operatingSystem: os,
      geolocation: undefined,
      formCompletionTime,
      pageLoadTime: pageLoaded,
      visitDuration,
    },
    trafficSource: {
      source,
      medium,
      campaign: utmCampaign,
      keyword: utmKeyword,
      clickPath: clickPaths,
      entryPage: sessionStorage.getItem('entryPage') || window.location.pathname,
      referrer,
      directNavigation: !referrer,
      previousVisits: parseInt(localStorage.getItem('visitCount') || '1'),
      previousSubmissions,
      lastVisitDate: localStorage.getItem('lastVisitDate') || '',
    },
    pageMetrics: {
      timeOnPage: visitDuration,
      scrollDepth: maxScrollDepth,
      pageInteractions: interactionCount,
      formFocusEvents: formFocusCount,
      conversionTime: formCompletionTime || 0,
    }
  };
};
