
import { useState, useCallback, useMemo } from 'react';
import { Libraries } from '@react-google-maps/api';

// Define libraries array outside component to prevent recreating on each render
const MAP_LIBRARIES: Libraries = ["places", "marker"] as const;
const SCRIPT_ID = 'google-maps-script';

export const useMapScript = (apiKey: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Memoize the loadScriptProps object to prevent unnecessary re-renders
  const loadScriptProps = useMemo(() => ({
    googleMapsApiKey: apiKey,
    libraries: MAP_LIBRARIES,
    id: SCRIPT_ID
  }), [apiKey]);

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
