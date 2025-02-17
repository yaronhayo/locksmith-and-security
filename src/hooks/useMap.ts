
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const MAX_RETRIES = 3;

const fetchMapApiKey = async () => {
  console.log('Fetching Google Maps API key from settings table');
  
  try {
    const { data, error } = await supabase
      .from('settings')
      .select('value')
      .eq('key', 'GOOGLE_MAPS_API_KEY')
      .single();

    if (error) {
      console.error('Error fetching API key:', error);
      throw new Error(`Failed to fetch Google Maps API key: ${error.message}`);
    }

    if (!data?.value) {
      console.error('No API key found in settings table');
      throw new Error('Google Maps API key not found in settings');
    }

    console.log('Successfully fetched Maps API key:', data.value ? 'Key exists' : 'No key');
    return data.value;
  } catch (error) {
    console.error('Error in fetchMapApiKey:', error);
    throw error;
  }
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
    staleTime: Infinity, // Never mark as stale since API key rarely changes
    gcTime: Infinity, // Keep in cache indefinitely
    retry: 1, // Try once more if initial fetch fails
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
