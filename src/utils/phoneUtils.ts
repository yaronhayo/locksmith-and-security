
import { useState, useEffect } from 'react';

// Phone numbers configuration
const PHONE_NUMBERS = {
  default: '(201) 748-2070',
  googleAds: '(551) 209-2928'
};

// Get the appropriate phone number based on traffic source
export const getPhoneNumber = (): string => {
  // Check for Google Ads PPC traffic
  if (typeof window !== 'undefined') {
    // Check URL parameters first
    const urlParams = new URLSearchParams(window.location.search);
    const isGoogleAdsUrl = urlParams.get('utm_source') === 'google' && 
                          urlParams.get('utm_medium') === 'cpc';
    
    // Then check localStorage (persisted from previous pages)
    const utmSource = localStorage.getItem('utm_source');
    const utmMedium = localStorage.getItem('utm_medium');
    const isGoogleAdsStorage = utmSource === 'google' && utmMedium === 'cpc';
    
    // Return Google Ads number if either condition is true
    if (isGoogleAdsUrl || isGoogleAdsStorage) {
      return PHONE_NUMBERS.googleAds;
    }
  }
  
  return PHONE_NUMBERS.default;
};

// Format phone number as href
export const formatPhoneHref = (phoneNumber: string): string => {
  return `tel:${phoneNumber.replace(/\D/g, '')}`;
};

// React hook to use the dynamic phone number
export const usePhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState(PHONE_NUMBERS.default);
  
  useEffect(() => {
    setPhoneNumber(getPhoneNumber());
  }, []);
  
  return {
    phoneNumber,
    phoneHref: formatPhoneHref(phoneNumber)
  };
};
