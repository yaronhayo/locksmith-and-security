
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
  
  const sections = [
    { title: 'Device Information', items: [
      { label: 'Browser', value: info.browser || info.userAgent },
      { label: 'Browser Version', value: info.browserVersion },
      { label: 'Operating System', value: info.operatingSystem || info.platform },
      { label: 'Device Type', value: info.deviceType || 'Unknown' },
      { label: 'Language', value: info.language },
      { label: 'Screen Size', value: info.screenResolution },
      { label: 'Window Size', value: info.windowSize },
      { label: 'Timezone', value: info.timezone || 'Unknown' },
    ]},
    { title: 'Location Information', items: info.geolocation ? [
      { label: 'City', value: info.geolocation.city || 'Unknown' },
      { label: 'Region', value: info.geolocation.region || 'Unknown' },
      { label: 'Country', value: info.geolocation.country || 'Unknown' },
      { label: 'IP Address', value: info.ipAddress || 'Unknown' },
    ] : [{ label: 'Location', value: 'Not available' }]},
    { title: 'Session Metrics', items: [
      { label: 'Form Completion Time', value: info.formCompletionTime ? `${info.formCompletionTime} seconds` : 'Unknown' },
      { label: 'Page Load Time', value: info.pageLoadTime ? `${info.pageLoadTime} ms` : 'Unknown' },
      { label: 'Visit Duration', value: info.visitDuration ? `${info.visitDuration} seconds` : 'Unknown' },
      { label: 'Timestamp', value: info.timestamp },
    ]}
  ];
  
  let sectionHtml = '';
  
  sections.forEach(section => {
    let itemsHtml = '';
    section.items.forEach(item => {
      if (item.value) {
        itemsHtml += `<p style="margin: 5px 0;"><strong>${item.label}:</strong> ${item.value}</p>`;
      }
    });
    
    if (itemsHtml) {
      sectionHtml += `
        <h3 style="color: #1a365d; margin: 15px 0 10px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">${section.title}</h3>
        ${itemsHtml}
      `;
    }
  });
  
  return `
    <tr>
      <td colspan="2" style="padding: 20px 0;">
        <h3 style="color: #1a365d; margin-bottom: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Visitor Information</h3>
        ${sectionHtml}
      </td>
    </tr>
  `;
};

export const formatTrafficSource = (info?: FormData['traffic_source'], pageMetrics?: FormData['page_metrics']): string => {
  if (!info && !pageMetrics) return '';
  
  const trafficInfoItems = info ? [
    { label: 'Source', value: info.source || 'Direct' },
    { label: 'Medium', value: info.medium || 'N/A' },
    { label: 'Campaign', value: info.campaign || 'N/A' },
    { label: 'Keyword', value: info.keyword || 'N/A' },
    { label: 'Referrer', value: info.referrer || 'N/A' },
    { label: 'Entry Page', value: info.entryPage || 'N/A' },
    { label: 'Direct Navigation', value: info.directNavigation ? 'Yes' : 'No' },
    { label: 'Previous Visits', value: info.previousVisits !== undefined ? info.previousVisits.toString() : 'Unknown' },
    { label: 'Previous Submissions', value: info.previousSubmissions !== undefined ? info.previousSubmissions.toString() : 'Unknown' },
    { label: 'Last Visit Date', value: info.lastVisitDate || 'N/A' },
  ] : [];
  
  const browsingHistoryItems = info && info.clickPath ? [
    { label: 'Browsing Path', value: info.clickPath.join(' → ') || 'N/A' },
  ] : [];
  
  const pageMetricsItems = pageMetrics ? [
    { label: 'Time on Page', value: `${pageMetrics.timeOnPage} seconds` },
    { label: 'Scroll Depth', value: `${pageMetrics.scrollDepth}%` },
    { label: 'Page Interactions', value: pageMetrics.pageInteractions.toString() },
    { label: 'Form Focus Events', value: pageMetrics.formFocusEvents.toString() },
    { label: 'Conversion Time', value: `${pageMetrics.conversionTime} seconds` },
  ] : [];
  
  let trafficInfoHtml = '';
  trafficInfoItems.forEach(item => {
    if (item.value) {
      trafficInfoHtml += `<p style="margin: 5px 0;"><strong>${item.label}:</strong> ${item.value}</p>`;
    }
  });
  
  let browsingHistoryHtml = '';
  browsingHistoryItems.forEach(item => {
    if (item.value) {
      browsingHistoryHtml += `<p style="margin: 5px 0;"><strong>${item.label}:</strong> ${item.value}</p>`;
    }
  });
  
  let pageMetricsHtml = '';
  pageMetricsItems.forEach(item => {
    if (item.value) {
      pageMetricsHtml += `<p style="margin: 5px 0;"><strong>${item.label}:</strong> ${item.value}</p>`;
    }
  });
  
  let sectionHtml = '';
  
  if (trafficInfoHtml) {
    sectionHtml += `
      <h3 style="color: #1a365d; margin: 15px 0 10px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">Traffic Source</h3>
      ${trafficInfoHtml}
    `;
  }
  
  if (browsingHistoryHtml) {
    sectionHtml += `
      <h3 style="color: #1a365d; margin: 15px 0 10px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">Browsing History</h3>
      ${browsingHistoryHtml}
    `;
  }
  
  if (pageMetricsHtml) {
    sectionHtml += `
      <h3 style="color: #1a365d; margin: 15px 0 10px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">Page Metrics</h3>
      ${pageMetricsHtml}
    `;
  }
  
  return `
    <tr>
      <td colspan="2" style="padding: 20px 0;">
        <h3 style="color: #1a365d; margin-bottom: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Traffic & User Journey</h3>
        ${sectionHtml}
      </td>
    </tr>
  `;
};
