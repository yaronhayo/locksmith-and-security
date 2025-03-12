
import { useState, useEffect } from 'react';

export const usePhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('(201) 748-2070');
  const [phoneNumberRaw, setPhoneNumberRaw] = useState('2017482070');

  useEffect(() => {
    // Function to get URL parameters
    const getUrlParameter = (name: string): string | null => {
      const params = new URLSearchParams(window.location.search);
      return params.get(name);
    };
    
    // Check if user came from Google Ads or has gclid parameter
    const isFromGoogleAds = (): boolean => {
      const gclid = getUrlParameter('gclid');
      const utm_source = getUrlParameter('utm_source');
      
      return !!gclid || utm_source?.toLowerCase() === 'google' || 
             utm_source?.toLowerCase() === 'adwords' || 
             utm_source?.toLowerCase() === 'googleads';
    };
    
    // Set the PPC phone number if from Google Ads
    if (isFromGoogleAds()) {
      setPhoneNumber('(551) 209-2928');
      setPhoneNumberRaw('5512092928');
      
      // Store the source in session storage to maintain consistency across pages
      sessionStorage.setItem('trafficSource', 'googleads');
    } else {
      // Check if a traffic source was already set in this session
      const storedSource = sessionStorage.getItem('trafficSource');
      
      if (storedSource === 'googleads') {
        setPhoneNumber('(551) 209-2928');
        setPhoneNumberRaw('5512092928');
      }
    }
  }, []);

  return { phoneNumber, phoneNumberRaw };
};
