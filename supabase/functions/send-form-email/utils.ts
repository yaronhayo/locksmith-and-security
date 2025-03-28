
import { formatInTimeZone } from "date-fns-tz";
import { VisitorInfo, TrafficSource, PageMetrics } from "./types.ts";

// Format a date in Eastern Time
export const formatInEasternTime = (date: Date): string => {
  try {
    return formatInTimeZone(date, "America/New_York", "MMM d, yyyy 'at' h:mm a zzz");
  } catch (error) {
    console.error("Error formatting date in Eastern time:", error);
    return date.toLocaleString('en-US', { 
      timeZone: 'America/New_York',
      dateStyle: 'medium',
      timeStyle: 'medium'
    }) + " ET";
  }
};

// Format traffic source data
export const formatTrafficSource = (source?: TrafficSource, metrics?: PageMetrics): string => {
  if (!source) return '';
  
  return `
    <tr>
      <td colspan="2">
        <h3 style="color: #4a5568; margin: 20px 0 10px; border-bottom: 1px solid #edf2f7; padding-bottom: 5px;">
          Traffic Source
        </h3>
      </td>
    </tr>
    <tr>
      <td style="padding: 8px 0;"><strong>Source:</strong></td>
      <td style="padding: 8px 0;">${source.source || 'Direct'}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0;"><strong>Medium:</strong></td>
      <td style="padding: 8px 0;">${source.medium || 'None'}</td>
    </tr>
    ${source.campaign ? `
      <tr>
        <td style="padding: 8px 0;"><strong>Campaign:</strong></td>
        <td style="padding: 8px 0;">${source.campaign}</td>
      </tr>
    ` : ''}
    ${source.keyword ? `
      <tr>
        <td style="padding: 8px 0;"><strong>Keyword:</strong></td>
        <td style="padding: 8px 0;">${source.keyword}</td>
      </tr>
    ` : ''}
    ${metrics ? `
      <tr>
        <td style="padding: 8px 0;"><strong>Time on Page:</strong></td>
        <td style="padding: 8px 0;">${metrics.timeOnPage} seconds</td>
      </tr>
      <tr>
        <td style="padding: 8px 0;"><strong>Scroll Depth:</strong></td>
        <td style="padding: 8px 0;">${metrics.scrollDepth}%</td>
      </tr>
      <tr>
        <td style="padding: 8px 0;"><strong>Form Focus Events:</strong></td>
        <td style="padding: 8px 0;">${metrics.formFocusEvents}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0;"><strong>Conversion Time:</strong></td>
        <td style="padding: 8px 0;">${metrics.conversionTime} seconds</td>
      </tr>
    ` : ''}
  `;
};

// Format visitor information
export const formatVisitorInfo = (visitorInfo?: VisitorInfo): string => {
  if (!visitorInfo) return '';

  let geolocationHtml = '';
  if (visitorInfo.geolocation) {
    geolocationHtml = `
      <tr>
        <td style="padding: 8px 0;"><strong>Geolocation:</strong></td>
        <td style="padding: 8px 0;">
          Lat: ${visitorInfo.geolocation.latitude}, 
          Long: ${visitorInfo.geolocation.longitude}
        </td>
      </tr>
    `;
  }

  return `
    <tr>
      <td colspan="2">
        <h3 style="color: #4a5568; margin: 20px 0 10px; border-bottom: 1px solid #edf2f7; padding-bottom: 5px;">
          Visitor Information
        </h3>
      </td>
    </tr>
    <tr>
      <td style="padding: 8px 0;"><strong>Device:</strong></td>
      <td style="padding: 8px 0;">${visitorInfo.deviceType || visitorInfo.platform || 'Unknown'}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0;"><strong>Browser:</strong></td>
      <td style="padding: 8px 0;">${visitorInfo.browser || 'Unknown'} ${visitorInfo.browserVersion || ''}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0;"><strong>OS:</strong></td>
      <td style="padding: 8px 0;">${visitorInfo.operatingSystem || visitorInfo.platform || 'Unknown'}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0;"><strong>Screen:</strong></td>
      <td style="padding: 8px 0;">${visitorInfo.screenResolution || 'Unknown'}</td>
    </tr>
    ${geolocationHtml}
    <tr>
      <td style="padding: 8px 0;"><strong>Language:</strong></td>
      <td style="padding: 8px 0;">${visitorInfo.language || 'Unknown'}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0;"><strong>Timezone:</strong></td>
      <td style="padding: 8px 0;">${visitorInfo.timezone || 'Unknown'}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0;"><strong>User Agent:</strong></td>
      <td style="padding: 8px 0; word-break: break-word;">${visitorInfo.userAgent || 'Unknown'}</td>
    </tr>
  `;
};
