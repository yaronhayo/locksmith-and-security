
import { useState, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const MAX_RETRIES = 3;
const INITIAL_BACKOFF = 1000;

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
  const [retryCount, setRetryCount] = useState(0);

  const handleRetry = useCallback(() => {
    if (retryCount < MAX_RETRIES) {
      setRetryCount(prev => prev + 1);
    }
  }, [retryCount]);

  const { 
    data: apiKey,
    error,
    isLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: ['mapApiKey', retryCount],
    queryFn: fetchMapApiKey,
    retry: MAX_RETRIES,
    retryDelay: (attemptIndex) => Math.min(
      INITIAL_BACKOFF * Math.pow(2, attemptIndex),
      8000
    ),
    staleTime: 24 * 60 * 60 * 1000, // Cache for 24 hours
    meta: {
      errorMessage: 'Failed to load map configuration'
    }
  });

  return {
    apiKey,
    loadError: isError ? error?.message : null,
    isRetrying: isLoading && retryCount > 0,
    retryCount,
    fetchApiKey: refetch
  };
};
