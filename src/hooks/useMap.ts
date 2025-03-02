import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { MapLocation } from '@/types/map';

// Cache key for map configuration
const MAP_CONFIG_CACHE_KEY = 'map_config';

// Fallback Google Maps API key for development only
const FALLBACK_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyDNzw7fQJRpOxChV8hO1oT1wuXd980UYcE';

// Function to clear map config cache
export const clearMapConfigCache = () => {
  localStorage.removeItem(MAP_CONFIG_CACHE_KEY);
  console.log('Map config cache cleared');
};

// Hook to get Google Maps API key
export const useMapConfig = () => {
  return useQuery({
    queryKey: [MAP_CONFIG_CACHE_KEY],
    queryFn: async () => {
      try {
        console.log("Fetching Google Maps API key from settings...");
        
        // First try environment variable
        const envApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
        if (envApiKey) {
          console.log("Using API key from environment variable");
          return envApiKey;
        }
        
        // Otherwise try to fetch from Supabase
        const { data, error } = await supabase
          .from('settings')
          .select('value')
          .eq('key', 'GOOGLE_MAPS_API_KEY')
          .maybeSingle();
        
        if (error) {
          console.error("Error fetching API key:", error.message);
          throw error;
        }
        
        if (!data?.value) {
          console.log("GOOGLE_MAPS_API_KEY not found, trying lowercase...");
          // If the uppercase key fails, try lowercase
          const result = await supabase
            .from('settings')
            .select('value')
            .eq('key', 'google_maps_api_key')
            .maybeSingle();
            
          if (result.error) {
            console.error("Error fetching lowercase API key:", result.error.message);
            throw result.error;
          }
          
          if (!result.data?.value) {
            console.log("No API key found, using fallback...");
            return FALLBACK_API_KEY;
          }
          
          console.log("Found lowercase API key");
          return result.data.value;
        }
        
        console.log("Found uppercase API key");
        return data.value;
      } catch (err) {
        // Return fallback key on error
        console.error("Error in API key fetch, using fallback:", err);
        return FALLBACK_API_KEY;
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
