
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const useMapConfig = () => {
  return useQuery({
    queryKey: ['GOOGLE_MAPS_API_KEY'],
    queryFn: async () => {
      console.log('Fetching Google Maps API key...');
      try {
        const { data, error } = await supabase
          .from('settings')
          .select('value')
          .eq('key', 'GOOGLE_MAPS_API_KEY')
          .single();

        if (error) {
          console.error('Error fetching API key:', error);
          toast.error('Failed to load map: API key retrieval error');
          throw error;
        }
        
        if (!data?.value) {
          console.error('No API key found in settings');
          toast.error('Map configuration error: API key not found');
          throw new Error('Google Maps API key not found in settings');
        }

        // Verify the API key format (basic check)
        if (typeof data.value !== 'string' || data.value.trim().length < 10) {
          console.error('Invalid API key format:', data.value);
          toast.error('Map configuration error: Invalid API key format');
          throw new Error('Invalid Google Maps API key format');
        }

        console.log('API key fetched successfully');
        return data.value;
      } catch (error) {
        console.error('Failed to fetch Google Maps API key:', error);
        toast.error('Failed to load map service');
        throw error;
      }
    },
    staleTime: Infinity, // Keep the API key indefinitely until manual invalidation
    gcTime: Infinity,    // Don't garbage collect the query
    retry: 3,            // Try up to 3 times if the request fails
    retryDelay: 1000,    // Wait 1 second between retries
  });
};
