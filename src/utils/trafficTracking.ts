
import { TrafficSource } from '../types/submissions';

export const getTrafficSource = (): TrafficSource => {
  // Get UTM parameters from URL
  const urlParams = new URLSearchParams(window.location.search);
  const source = urlParams.get('utm_source') || sessionStorage.getItem('utm_source') || '';
  const medium = urlParams.get('utm_medium') || sessionStorage.getItem('utm_medium') || '';
  const campaign = urlParams.get('utm_campaign') || sessionStorage.getItem('utm_campaign') || '';
  const keyword = urlParams.get('utm_term') || sessionStorage.getItem('utm_term') || '';

  // Get click path from session storage
  const clickPath = JSON.parse(sessionStorage.getItem('clickPath') || '[]');

  return {
    source,
    medium,
    campaign,
    keyword,
    clickPath
  };
};

export const initializeTrafficTracking = () => {
  // Save UTM parameters to session storage if present in URL
  const urlParams = new URLSearchParams(window.location.search);
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term'].forEach(param => {
    const value = urlParams.get(param);
    if (value) {
      sessionStorage.setItem(param, value);
    }
  });

  // Initialize or update click path
  const clickPath = JSON.parse(sessionStorage.getItem('clickPath') || '[]');
  const currentPath = window.location.pathname;
  if (!clickPath.includes(currentPath)) {
    clickPath.push(currentPath);
    sessionStorage.setItem('clickPath', JSON.stringify(clickPath));
  }
};
