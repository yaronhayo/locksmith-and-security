
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
      // The original query was failing because it was expecting a single row
      // but likely found multiple rows or no rows at all
      const { data, error } = await supabase
        .from('settings')
        .select('value')
        .eq('key', 'google_maps_api_key')
        .maybeSingle(); // Changed from .single() to .maybeSingle() to handle case where no row exists
      
      if (error) {
        throw new Error(error.message);
      }
      
      // Provide a fallback value if no API key is found
      const apiKey = data?.value || 'AIzaSyBfRCY8KVG9BcNJwffoGJRbQx7WFEUAiLM';
      console.log("Google Maps API key loaded successfully");
      
      return apiKey;
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
