
import { useQuery, QueryKey } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { MapLocation } from '@/types/map';

// Cache key for map configuration
const MAP_CONFIG_CACHE_KEY = 'map_config';

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
      const { data, error } = await supabase
        .from('settings')
        .select('value')
        .eq('key', 'google_maps_api_key')
        .single();
      
      if (error) {
        throw new Error(error.message);
      }
      
      return data?.value as string;
    },
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
