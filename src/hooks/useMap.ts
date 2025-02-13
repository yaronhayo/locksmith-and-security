
import { useState, useCallback, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { mapPerformance } from '@/utils/performanceMonitoring';

const MAX_RETRIES = 3;
const INITIAL_BACKOFF = 1000;

interface MapConfig {
  center: { lat: number; lng: number };
  zoom: number;
}

const fetchMapApiKey = async () => {
  const { data, error } = await supabase
    .from('settings')
    .select('value')
    .eq('key', 'google_maps_api_key')
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to fetch Google Maps API key: ${error.message}`);
  }

  if (!data?.value) {
    throw new Error('Google Maps API key not found in settings');
  }

  return data.value;
};

export const useMapConfig = () => {
  const { 
    data: apiKey,
    error,
    isLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: ['mapApiKey'],
    queryFn: fetchMapApiKey,
    retry: MAX_RETRIES,
    retryDelay: (attemptIndex) => Math.min(
      INITIAL_BACKOFF * Math.pow(2, attemptIndex),
      8000
    ),
    staleTime: 24 * 60 * 60 * 1000, // Cache for 24 hours
  });

  const isRetrying = isLoading && error !== null;
  const retryCount = error ? Math.min(MAX_RETRIES, error instanceof Error ? 1 : 0) : 0;

  return {
    apiKey,
    loadError: isError ? error?.message : null,
    isRetrying,
    retryCount,
    fetchApiKey: refetch
  };
};

export const useMapScript = (apiKey: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [placesInitialized, setPlacesInitialized] = useState(false);

  const handleScriptLoad = useCallback(() => {
    setIsLoaded(true);
    if (window.google?.maps?.places) {
      setPlacesInitialized(true);
    }
  }, []);

  const handleScriptError = useCallback((error: Error) => {
    console.error('Google Maps script load error:', error);
    setIsLoaded(false);
    setPlacesInitialized(false);
  }, []);

  return {
    isLoaded,
    placesInitialized,
    handleScriptLoad,
    handleScriptError
  };
};

export const useMapInstance = ({ center, zoom }: MapConfig) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const handleMapLoad = useCallback((mapInstance: google.maps.Map) => {
    const startTime = performance.now();
    setMap(mapInstance);
    mapPerformance.trackInstanceLoad(startTime);
  }, []);

  useEffect(() => {
    if (map) {
      map.setCenter(center);
      map.setZoom(zoom);
    }
  }, [map, center, zoom]);

  return { map, handleMapLoad };
};
