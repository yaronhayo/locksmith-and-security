
import { useState, useCallback, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

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
    .eq('key', 'GOOGLE_MAPS_API_KEY')
    .maybeSingle();

  if (error) throw new Error(`Failed to fetch Google Maps API key: ${error.message}`);
  if (!data?.value) throw new Error('Google Maps API key not found in settings');

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
    queryKey: ['GOOGLE_MAPS_API_KEY'],
    queryFn: fetchMapApiKey,
    retry: MAX_RETRIES,
    retryDelay: (attemptIndex) => Math.min(
      INITIAL_BACKOFF * Math.pow(2, attemptIndex),
      8000
    ),
    staleTime: Infinity, // Never consider the API key stale
    gcTime: Infinity, // Never garbage collect the API key
  });

  return {
    apiKey,
    loadError: isError ? error?.message : null,
    isRetrying: isLoading && error !== null,
    retryCount: error ? Math.min(MAX_RETRIES, error instanceof Error ? 1 : 0) : 0,
    fetchApiKey: refetch
  };
};

export const useMapInstance = ({ center, zoom }: MapConfig) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const handleMapLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance);
  }, []);

  useEffect(() => {
    if (map) {
      map.setCenter(center);
      map.setZoom(zoom);
    }
  }, [map, center, zoom]);

  return { map, handleMapLoad };
};
