
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

  console.log('API key fetched successfully');
  return data.value.trim(); // Ensure no whitespace
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
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes instead of 24 hours
    gcTime: 10 * 60 * 1000, // Garbage collect after 10 minutes
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

export const useMapScript = (apiKey: string) => {
  const [scriptState, setScriptState] = useState({
    isLoaded: false,
    loadError: null as string | null,
    placesInitialized: false
  });

  useEffect(() => {
    let mounted = true;

    const initializeScript = () => {
      if (!apiKey) {
        console.error('No API key provided to useMapScript');
        if (mounted) {
          setScriptState(prev => ({
            ...prev,
            loadError: 'No API key available'
          }));
        }
        return;
      }

      console.log('Initializing Google Maps script with key length:', apiKey.length);
      
      // Remove any existing script to ensure clean loading
      const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`);
      if (existingScript) {
        console.log('Removing existing Google Maps script');
        existingScript.remove();
        
        // Clear any existing Google Maps objects
        if (window.google?.maps) {
          // @ts-ignore - Reset Google Maps object
          window.google.maps = undefined;
        }
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;

      const handleLoad = () => {
        console.log('Google Maps script loaded successfully');
        if (mounted) {
          setScriptState({
            isLoaded: true,
            loadError: null,
            placesInitialized: !!window.google?.maps?.places
          });
        }
      };

      const handleError = () => {
        const error = 'Failed to load Google Maps script';
        console.error(error);
        if (mounted) {
          setScriptState({
            isLoaded: false,
            loadError: error,
            placesInitialized: false
          });
        }
      };

      script.addEventListener('load', handleLoad);
      script.addEventListener('error', handleError);

      document.head.appendChild(script);
    };

    initializeScript();

    return () => {
      mounted = false;
    };
  }, [apiKey]);

  return scriptState;
};

export const useMapInstance = ({ center, zoom }: MapConfig) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleMapLoad = useCallback((mapInstance: google.maps.Map) => {
    console.log('Map instance loaded');
    const startTime = performance.now();
    setMap(mapInstance);
    mapPerformance.trackInstanceLoad(startTime);
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
