
import { useState, useCallback } from 'react';
import { Libraries } from '@react-google-maps/api';

// Define libraries array as a constant outside to prevent unnecessary re-renders
export const MAP_LIBRARIES: Libraries = ["places", "marker"] as const;
export const SCRIPT_ID = 'google-maps-script';

export const useMapScript = (apiKey: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Memoize loadScriptProps to prevent unnecessary re-renders
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

// Export type for better type safety across components
export type MapScriptHookResult = ReturnType<typeof useMapScript>;
