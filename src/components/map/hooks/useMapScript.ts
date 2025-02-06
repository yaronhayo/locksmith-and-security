
import { useState, useCallback } from 'react';
import { Libraries } from '@react-google-maps/api';

// Define constants outside of component to prevent recreation
const MAP_LIBRARIES: Libraries = ["places", "marker"] as const;
const SCRIPT_ID = 'google-maps-script';

export const useMapScript = (apiKey: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Use static object to prevent unnecessary rerenders
  const loadScriptProps = {
    googleMapsApiKey: apiKey,
    libraries: MAP_LIBRARIES,
    id: SCRIPT_ID
  } as const;

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
