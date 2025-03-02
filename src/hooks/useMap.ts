
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

// Cache for the API key to prevent excessive database queries
let cachedApiKey: string | null = null;

export const useMapConfig = () => {
  return useQuery({
    queryKey: ['GOOGLE_MAPS_API_KEY'],
    queryFn: async () => {
      // Return cached key if available
      if (cachedApiKey) {
        console.log('Using cached Google Maps API key');
        return cachedApiKey;
      }

      console.log('Fetching Google Maps API key from database...');
      try {
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
        return cachedApiKey;
      } catch (error) {
        console.error('Failed to fetch Google Maps API key:', error);
        throw error;
      }
    },
    staleTime: Infinity, // Keep the API key indefinitely until manual invalidation
    gcTime: Infinity,    // Don't garbage collect the query
    retry: 3,            // Try up to 3 times if the request fails
    retryDelay: 1000,    // Wait 1 second between retries
  });
};

export const clearMapConfigCache = () => {
  cachedApiKey = null;
  console.log('Map config cache cleared');
};
