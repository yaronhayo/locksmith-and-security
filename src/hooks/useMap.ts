
import { useQuery, QueryKey } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { MapLocation } from '@/types/map';

// Cache key for map configuration
const MAP_CONFIG_CACHE_KEY = 'map_config';

// Fallback Google Maps API key in case the DB one fails
// This is just for development purposes - in production, the key from the database should be used
const FALLBACK_API_KEY = 'AIzaSyDxRw7-lukZWyTTPd7hr1i1rvmaUEzl_Ns';

// Function to clear map config cache
export const clearMapConfigCache = () => {
  // This would be used with a queryClient in a component
  console.log('Map config cache cleared');
};

// Hook to get Google Maps API key
export const useMapConfig = () => {
  return useQuery({
    queryKey: [MAP_CONFIG_CACHE_KEY],
    queryFn: async () => {
      try {
        console.log('Fetching Google Maps API key from Supabase settings...');
        
        // Try to fetch using uppercase key first (GOOGLE_MAPS_API_KEY)
        let { data, error } = await supabase
          .from('settings')
          .select('value')
          .eq('key', 'GOOGLE_MAPS_API_KEY')
          .maybeSingle();
        
        if (error || !data) {
          console.log('Trying alternative key format (lowercase)');
          
          // If that fails, try lowercase (google_maps_api_key)
          const result = await supabase
            .from('settings')
            .select('value')
            .eq('key', 'google_maps_api_key')
            .maybeSingle();
            
          data = result.data;
          error = result.error;
        }
        
        if (error) {
          console.error('Error fetching Google Maps API key:', error);
          throw new Error(error.message);
        }
        
        if (!data || !data.value) {
          console.warn('No Google Maps API key found in database, using fallback');
          
          // If no key in the database and fallback is available, use that
          if (FALLBACK_API_KEY) {
            console.log('Using fallback API key');
            return FALLBACK_API_KEY;
          }
          
          throw new Error('Google Maps API key not found in settings');
        }
        
        console.log('Successfully retrieved Google Maps API key');
        return data.value;
      } catch (err) {
        console.error('Failed to retrieve Google Maps API key:', err);
        
        // Return fallback key if available, otherwise rethrow the error
        if (FALLBACK_API_KEY) {
          console.warn('Using fallback Google Maps API key');
          return FALLBACK_API_KEY;
        }
        
        throw err;
      }
    },
    staleTime: 3600000, // 1 hour cache
    meta: {
      onError: (error: Error) => {
        console.error('Error fetching Google Maps API key:', error.message);
      }
    }
  });
};

// The original useMap hook fetches location data
export const useMap = () => {
  return useQuery({
    queryKey: ['map_locations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('locations')
        .select('id, name, lat, lng, slug')
        .order('name');
      
      if (error) {
        throw new Error(error.message);
      }
      
      return (data || []).map(location => ({
        id: location.id,
        name: location.name,
        latitude: location.lat,
        longitude: location.lng,
        slug: location.slug
      })) as MapLocation[];
    },
    meta: {
      onError: (error: Error) => {
        console.error('Error fetching map locations:', error.message);
      }
    }
  });
};
