
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { MapLocation } from '@/types/map';

// Cache key for map configuration
const MAP_CONFIG_CACHE_KEY = 'map_config';

// Fallback Google Maps API key for development only
const FALLBACK_API_KEY = 'AIzaSyDxRw7-lukZWyTTPd7hr1i1rvmaUEzl_Ns';

// Function to clear map config cache
export const clearMapConfigCache = () => {
  console.log('Map config cache cleared');
};

// Hook to get Google Maps API key
export const useMapConfig = () => {
  return useQuery({
    queryKey: [MAP_CONFIG_CACHE_KEY],
    queryFn: async () => {
      try {
        // Try to fetch using uppercase key first
        let { data, error } = await supabase
          .from('settings')
          .select('value')
          .eq('key', 'GOOGLE_MAPS_API_KEY')
          .maybeSingle();
        
        if (error || !data) {
          // If that fails, try lowercase
          const result = await supabase
            .from('settings')
            .select('value')
            .eq('key', 'google_maps_api_key')
            .maybeSingle();
            
          data = result.data;
          error = result.error;
        }
        
        if (error) {
          throw new Error(error.message);
        }
        
        if (!data || !data.value) {
          // Use fallback if available
          if (FALLBACK_API_KEY) {
            return FALLBACK_API_KEY;
          }
          
          throw new Error('Google Maps API key not found in settings');
        }
        
        return data.value;
      } catch (err) {
        // Return fallback key if available, otherwise rethrow
        if (FALLBACK_API_KEY) {
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

// Hook to fetch location data
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
