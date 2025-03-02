
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
          throw result.error;
        }
        
        if (result.data?.value && isValidApiKey(result.data.value)) {
          console.log("Found lowercase API key");
          return result.data.value;
        }
        
        // Check for any other keys that might contain "google" and "maps"
        const settingsResult = await supabase
          .from('settings')
          .select('key, value')
          .like('key', '%google%')
          .or('key.like.%maps%,key.like.%map%');
          
        if (!settingsResult.error && settingsResult.data) {
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
        console.warn("No valid Google Maps API key found in settings");
        return "AIzaSyD_lT8RmSAMEHUlTEgNIxHhLGGUMdLtFiE"; // Fallback key
      } catch (err) {
        console.error("Error in API key fetch:", err);
        // Fall back to hardcoded key only in case of error
        return "AIzaSyD_lT8RmSAMEHUlTEgNIxHhLGGUMdLtFiE"; // Fallback key
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
      try {
        const { data, error } = await supabase
          .from('locations')
          .select('id, name, lat, lng, slug')
          .order('name');
        
        if (error) {
          console.error('Error loading map locations:', error.message);
          toast.error('Error loading map locations');
          throw new Error(error.message);
        }
        
        if (!data || data.length === 0) {
          console.warn('No locations found in database');
        } else {
          console.log(`Found ${data.length} locations in database`);
        }
        
        return (data || []).map(location => ({
          id: location.id,
          name: location.name,
          latitude: location.lat,
          longitude: location.lng,
          slug: location.slug
        })) as MapLocation[];
      } catch (error: any) {
        console.error('Error in useMap query:', error.message);
        throw error;
      }
    },
    meta: {
      onError: (error: Error) => {
        console.error('Error fetching map locations:', error.message);
      }
    }
  });
};
