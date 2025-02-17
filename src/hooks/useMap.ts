
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const MAX_RETRIES = 3;
const INITIAL_BACKOFF = 1000;

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

  console.log('API key fetched successfully:', data.value ? 'Key exists' : 'No key');
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
