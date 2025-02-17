
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
    staleTime: 0, // Set to 0 to always fetch fresh data
    gcTime: 1000 * 60 * 5, // Keep in cache for 5 minutes
    retry: MAX_RETRIES,
    meta: {
      errorMessage: 'Failed to load Google Maps API key'
    }
  });

  return {
    apiKey,
    loadError: isError ? error?.message : null,
    isLoading,
    fetchApiKey: refetch
  };
};
