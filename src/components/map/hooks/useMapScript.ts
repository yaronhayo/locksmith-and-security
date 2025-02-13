
import { useState, useCallback } from 'react';
import { Libraries } from '@react-google-maps/api';

// Define libraries array as a constant outside the component
const MAP_LIBRARIES: Libraries = ["places", "marker"] as const;
const SCRIPT_ID = 'google-maps-script';

export const useMapScript = (apiKey: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Always return the same loadScriptProps object
  const loadScriptProps = {
    googleMapsApiKey: apiKey,
    libraries: MAP_LIBRARIES,
    id: SCRIPT_ID
  };

  const handleScriptLoad = useCallback(() => {
    console.log('Google Maps script loaded successfully');
    setIsLoaded(true);
  }, []);

  const handleScriptError = useCallback((err: Error) => {
    console.error('Error loading Google Maps script:', err);
    setError(err.message);
  }, []);

  return {
    isLoaded,
    error,
    loadScriptProps,
    handleScriptLoad,
    handleScriptError
  };
};
