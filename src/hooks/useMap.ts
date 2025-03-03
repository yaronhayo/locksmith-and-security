
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

// Fallback API key to use if the database request fails
const FALLBACK_MAP_KEY = "";

export const useMapConfig = () => {
  return useQuery({
    queryKey: ['map_config'],
    queryFn: async () => {
      try {
        // First try the "select value" approach
        let { data, error } = await supabase
          .from('settings')
          .select('value')
          .eq('key', 'google_maps_api_key')
          .single();

        // If we get a 406 Not Acceptable error, the query might be malformed
        // Try again with a different format
        if (error && error.code === '406') {
          console.warn('Received 406 error for map config, trying alternative format');
          
          // Try alternative array format
          const { data: arrayData, error: arrayError } = await supabase
            .from('settings')
            .select('*')
            .eq('key', 'google_maps_api_key');
            
          if (arrayError) {
            console.error('Error fetching map config (alternative format):', arrayError);
            return FALLBACK_MAP_KEY;
          }
          
          // Extract value from array result if we have data
          if (arrayData && arrayData.length > 0) {
            return arrayData[0].value || FALLBACK_MAP_KEY;
          }
          
          return FALLBACK_MAP_KEY;
        }

        if (error) {
          console.error('Error fetching map config:', error);
          return FALLBACK_MAP_KEY;
        }

        return data?.value || FALLBACK_MAP_KEY;
      } catch (err) {
        console.error('Unexpected error in map config fetch:', err);
        return FALLBACK_MAP_KEY;
      }
    },
    retry: 2,
    staleTime: 300000, // 5 minutes
    gcTime: 900000, // 15 minutes
    meta: {
      onError: (error: Error) => {
        console.error('Error in map config query:', error);
      }
    }
  });
};
