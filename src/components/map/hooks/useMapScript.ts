import { useState, useEffect, useMemo } from 'react';
import { Libraries } from '@react-google-maps/api';

const MAP_LIBRARIES: Libraries = ["places", "marker"] as const;

export const useMapScript = (apiKey: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadScriptProps = useMemo(() => ({
    googleMapsApiKey: apiKey,
    libraries: MAP_LIBRARIES,
  }), [apiKey]);

  const handleScriptLoad = () => {
    console.log('Google Maps script loaded successfully');
    setIsLoaded(true);
  };

  const handleScriptError = (err: Error) => {
    console.error('Error loading Google Maps script:', err);
    setError(err.message);
  };

  return {
    isLoaded,
    error,
    loadScriptProps,
    handleScriptLoad,
    handleScriptError
  };
};