
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { MapLocation } from '@/types/map';
import { toast } from 'sonner';

// Cache key for map configuration
const MAP_CONFIG_CACHE_KEY = 'map_config';

// Fallback Google Maps API key for development only
const FALLBACK_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

// Function to clear map config cache
export const clearMapConfigCache = () => {
  localStorage.removeItem(MAP_CONFIG_CACHE_KEY);
  console.log('Map config cache cleared');
};

// Helper function to validate API key format
const isValidApiKey = (key: string) => {
  // Google Maps API keys are typically alphanumeric and fairly long
  return typeof key === 'string' && key.length > 20;
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
        if (envApiKey && isValidApiKey(envApiKey)) {
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
        
        if (data?.value && isValidApiKey(data.value)) {
          console.log("Found API key in settings");
          return data.value;
        }
        
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
        
        if (result.data?.value && isValidApiKey(result.data.value)) {
          console.log("Found lowercase API key");
          return result.data.value;
        }
        
        // Last resort - check from settings lookup
        const settingsResult = await supabase
          .from('settings')
          .select('*');
          
        if (!settingsResult.error && settingsResult.data) {
          console.log("Available settings:", settingsResult.data.map(s => s.key));
        }
        
        if (FALLBACK_API_KEY && isValidApiKey(FALLBACK_API_KEY)) {
          console.log("Using fallback API key");
          return FALLBACK_API_KEY;
        }
        
        throw new Error("No valid Google Maps API key found");
      } catch (err) {
        console.error("Error in API key fetch:", err);
        if (FALLBACK_API_KEY && isValidApiKey(FALLBACK_API_KEY)) {
          console.log("Using fallback API key after error");
          return FALLBACK_API_KEY;
        }
        throw new Error(`Failed to retrieve Google Maps API key: ${(err as Error).message}`);
      }
    },
    staleTime: 3600000, // 1 hour cache
    meta: {
      onError: (error: Error) => {
        console.error('Error fetching Google Maps API key:', error.message);
        toast.error('Error loading Maps configuration');
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
        toast.error('Error loading map locations');
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
