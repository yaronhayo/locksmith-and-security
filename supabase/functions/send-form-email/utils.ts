
export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

export const formatInEasternTime = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(date);
};

export const formatVisitorInfo = (info?: FormData['visitor_info']): string => {
  if (!info) return '';
  return `
    <tr>
      <td colspan="2" style="padding: 20px 0;">
        <h3 style="color: #1a365d; margin-bottom: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Visitor Information</h3>
        <p style="margin: 5px 0;"><strong>Browser:</strong> ${info.userAgent}</p>
        <p style="margin: 5px 0;"><strong>Language:</strong> ${info.language}</p>
        <p style="margin: 5px 0;"><strong>Platform:</strong> ${info.platform}</p>
        <p style="margin: 5px 0;"><strong>Screen Size:</strong> ${info.screenResolution}</p>
        <p style="margin: 5px 0;"><strong>Window Size:</strong> ${info.windowSize}</p>
        <p style="margin: 5px 0;"><strong>Timestamp:</strong> ${info.timestamp}</p>
      </td>
    </tr>
  `;
};

export const formatTrafficSource = (info?: FormData['traffic_source']): string => {
  if (!info) return '';
  return `
    <tr>
      <td colspan="2" style="padding: 20px 0;">
        <h3 style="color: #1a365d; margin-bottom: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Traffic Source Information</h3>
        <p style="margin: 5px 0;"><strong>Source:</strong> ${info.source || 'Direct'}</p>
        <p style="margin: 5px 0;"><strong>Medium:</strong> ${info.medium || 'N/A'}</p>
        <p style="margin: 5px 0;"><strong>Campaign:</strong> ${info.campaign || 'N/A'}</p>
        <p style="margin: 5px 0;"><strong>Keyword:</strong> ${info.keyword || 'N/A'}</p>
        <p style="margin: 5px 0;"><strong>Click Path:</strong> ${info.clickPath?.join(' → ') || 'N/A'}</p>
      </td>
    </tr>
  `;
};
