import { useState, useEffect } from 'react';

const GOOGLE_MAPS_API_KEY = 'YOUR_API_KEY'; // We'll need to get this from Supabase secrets
const GOOGLE_MAPS_URL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;

export const useMapScript = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (window.google) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = GOOGLE_MAPS_URL;
    script.async = true;
    script.defer = true;

    const handleScriptLoad = () => setIsLoaded(true);
    const handleScriptError = () => {
      setError('Failed to load Google Maps script');
      setIsLoaded(false);
    };

    script.addEventListener('load', handleScriptLoad);
    script.addEventListener('error', handleScriptError);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener('load', handleScriptLoad);
      script.removeEventListener('error', handleScriptError);
      document.body.removeChild(script);
    };
  }, []);

  return { isLoaded, error };
};