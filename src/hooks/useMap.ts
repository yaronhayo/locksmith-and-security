
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const MAP_CONFIG_QUERY_KEY = ['GOOGLE_MAPS_API_KEY'] as const;
const FETCH_TIMEOUT = 10000; // 10 seconds timeout

export const useMapConfig = () => {
  return useQuery({
    queryKey: MAP_CONFIG_QUERY_KEY,
    queryFn: async () => {
      console.log('Fetching Google Maps API key...');
      
      const fetchWithTimeout = async () => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT);

        try {
          const { data, error } = await supabase
            .from('settings')
            .select('value')
            .eq('key', 'GOOGLE_MAPS_API_KEY')
            .single();

          clearTimeout(timeoutId);

          if (error) {
            console.error('Error fetching API key:', error);
            throw error;
          }
          
          if (!data?.value) {
            console.error('No API key found in settings');
            throw new Error('Google Maps API key not found in settings');
          }

          console.log('API key fetched successfully');
          return data.value;
        } catch (error) {
          clearTimeout(timeoutId);
          throw error;
        }
      };

      return await fetchWithTimeout();
    },
    staleTime: Infinity,
    gcTime: Infinity,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
    meta: {
      errorMessage: 'Failed to load Google Maps configuration'
    }
  });
};

// Add cache clear function
export const clearMapConfigCache = () => {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: MAP_CONFIG_QUERY_KEY });
  console.log('Map config cache cleared');
};
