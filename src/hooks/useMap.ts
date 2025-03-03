
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { MapLocation } from '@/types/map';
import { toast } from 'sonner';

// Cache key for map configuration
const MAP_CONFIG_CACHE_KEY = 'map_config';

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

// Hard-coded fallback API key as absolute last resort
const FALLBACK_API_KEY = "AIzaSyD_lT8RmSAMEHUlTEgNIxHhLGGUMdLtFiE";

// Hook to get Google Maps API key
export const useMapConfig = () => {
  return useQuery({
    queryKey: [MAP_CONFIG_CACHE_KEY],
    queryFn: async () => {
      try {
        console.log("Fetching Google Maps API key from settings...");
        
        // Try to fetch from Supabase with uppercase key
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
          // Don't throw, continue to fallback options
        }
        
        if (result.data?.value && isValidApiKey(result.data.value)) {
          console.log("Found lowercase API key");
          return result.data.value;
        }
        
        // Check for any other keys that might contain "google" and "maps"
        console.log("Trying to find any Google Maps related keys...");
        const settingsResult = await supabase
          .from('settings')
          .select('key, value')
          .or('key.like.%google%,key.like.%maps%,key.like.%map%');
          
        // Handle potential errors after the query
        if (settingsResult.error) {
          console.error("Error fetching potential map keys:", settingsResult.error);
          // Continue to fallback as we don't want to throw here
        }
          
        if (settingsResult.data) {
          console.log("Available settings:", settingsResult.data);
          
          // Try to find a key that looks like a Google Maps API key
          for (const item of settingsResult.data) {
            if (item.value && isValidApiKey(item.value)) {
              console.log(`Found API key in setting: ${item.key}`);
              return item.value;
            }
          }
        }
        
        // Fall back to hardcoded key as absolute last resort (for development only)
        console.warn("No valid Google Maps API key found in settings, using fallback");
        return FALLBACK_API_KEY;
      } catch (err) {
        console.error("Error in API key fetch:", err);
        // Fall back to hardcoded key only in case of error
        return FALLBACK_API_KEY;
      }
    },
    staleTime: 3600000, // 1 hour cache
    gcTime: 7200000, // 2 hours in garbage collection
    retry: 2, // Retry twice before failing
    retryDelay: 1000, // 1 second between retries
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
      try {
        const { data, error } = await supabase
          .from('locations')
          .select('id, name, lat, lng, slug')
          .order('name');
        
        if (error) {
          console.error('Error loading map locations:', error.message);
          toast.error('Error loading map locations');
          return []; // Return empty array instead of throwing
        }
        
        if (!data || data.length === 0) {
          console.warn('No locations found in database');
          return []; // Return empty array
        } else {
          console.log(`Found ${data.length} locations in database`);
        }
        
        return data.map(location => ({
          id: location.id,
          name: location.name,
          latitude: location.lat,
          longitude: location.lng,
          slug: location.slug
        })) as MapLocation[];
      } catch (error: any) {
        console.error('Error in useMap query:', error.message);
        return []; // Return empty array instead of throwing
      }
    },
    staleTime: 300000, // 5 minutes cache
    gcTime: 3600000, // 1 hour in garbage collection
    retry: 2, // Retry twice before failing
    retryDelay: 1000, // 1 second between retries
    meta: {
      onError: (error: Error) => {
        console.error('Error fetching map locations:', error.message);
      }
    }
  });
};
