
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { trackApiCall } from '@/utils/performanceMonitoring';

// Cache for the API key to prevent excessive database queries
let cachedApiKey: string | null = null;

export const useMapConfig = () => {
  const queryClient = useQueryClient();
  
  return useQuery({
    queryKey: ['GOOGLE_MAPS_API_KEY'],
    queryFn: async () => {
      const startTime = performance.now();
      
      try {
        // Return cached key if available
        if (cachedApiKey) {
          console.log('Using cached Google Maps API key');
          return cachedApiKey;
        }

        console.log('Fetching Google Maps API key from database...');
        const { data, error } = await supabase
          .from('settings')
          .select('value')
          .eq('key', 'GOOGLE_MAPS_API_KEY')
          .single();

        if (error) {
          console.error('Error fetching API key:', error);
          throw error;
        }
        
        if (!data?.value) {
          console.error('No API key found in settings');
          throw new Error('Google Maps API key not found in settings');
        }

        // Verify the API key format (basic check)
        if (typeof data.value !== 'string' || data.value.trim().length < 10) {
          console.error('Invalid API key format:', data.value);
          throw new Error('Invalid Google Maps API key format');
        }

        // Cache the API key
        cachedApiKey = data.value;
        console.log('API key fetched and cached successfully');
        
        const duration = performance.now() - startTime;
        trackApiCall({
          url: 'map-config',
          method: 'GET',
          duration,
          success: true
        });
        
        return cachedApiKey;
      } catch (error) {
        const duration = performance.now() - startTime;
        trackApiCall({
          url: 'map-config',
          method: 'GET',
          duration,
          success: false
        });
        throw error;
      }
    },
    staleTime: Infinity, // Keep the API key indefinitely until manual invalidation
    gcTime: Infinity,    // Don't garbage collect the query
    retry: 3,            // Try up to 3 times if the request fails
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 10000), // Exponential backoff
    meta: {
      errorMessage: 'Failed to load map settings',
      onError: (error: Error) => {
        console.error('Map config error:', error);
        toast.error('Failed to load map settings. Some features may not work correctly.');
      }
    }
  });
};

export const clearMapConfigCache = () => {
  cachedApiKey = null;
  console.log('Map config cache cleared');
};

// Add function to invalidate the cache via React Query
export const invalidateMapConfig = (queryClient: ReturnType<typeof useQueryClient>) => {
  cachedApiKey = null;
  return queryClient.invalidateQueries({ queryKey: ['GOOGLE_MAPS_API_KEY'] });
};
