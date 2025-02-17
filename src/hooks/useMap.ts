
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
  console.log('Fetching Google Maps API key from settings table');
  
  const { data, error } = await supabase
    .from('settings')
    .select('value')
    .eq('key', 'GOOGLE_MAPS_API_KEY')
    .maybeSingle();

  if (error) {
    console.error('Error fetching API key:', error);
    throw new Error(`Failed to fetch Google Maps API key: ${error.message}`);
  }

  if (!data?.value) {
    console.error('No API key found in settings table');
    throw new Error('Google Maps API key not found in settings');
  }

  console.log('Successfully fetched Maps API key');
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
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
    gcTime: 1000 * 60 * 60 * 2, // Garbage collect after 2 hours
    meta: {
      errorMessage: 'Failed to load Google Maps API key'
    }
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

export const useMapInstance = ({ center, zoom }: MapConfig) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleMapLoad = useCallback((mapInstance: google.maps.Map) => {
    console.log('Map instance loaded successfully');
    setMap(mapInstance);
  }, []);

  useEffect(() => {
    if (map) {
      try {
        map.setCenter(center);
        map.setZoom(zoom);
      } catch (err) {
        console.error('Error updating map:', err);
        setError(err instanceof Error ? err.message : 'Failed to update map');
      }
    }
  }, [map, center, zoom]);

  return { map, error, handleMapLoad };
};

// Add type definition for window object
declare global {
  interface Window {
    initMap: () => void;
  }
}
