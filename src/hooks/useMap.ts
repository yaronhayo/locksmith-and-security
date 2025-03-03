
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { MapLocation } from '@/types/map';
import { toast } from 'sonner';

// Cache key for map configuration
const MAP_CONFIG_CACHE_KEY = 'map_config';

// Function to clear map config cache
export const clearMapConfigCache = () => {
  localStorage.removeItem(MAP_CONFIG_CACHE_KEY);
  if (import.meta.env.DEV) {
    console.log('Map config cache cleared');
  }
};

// Helper function to validate API key format
const isValidApiKey = (key: string) => {
  // Google Maps API keys are typically alphanumeric and fairly long
  return typeof key === 'string' && key.length > 20;
};

// Hard-coded fallback API key as absolute last resort
// In production, this would be replaced with a proper error handler
const FALLBACK_API_KEY = process.env.VITE_GOOGLE_MAPS_API_KEY || "AIzaSyD_lT8RmSAMEHUlTEgNIxHhLGGUMdLtFiE";

// Hook to get Google Maps API key
export const useMapConfig = () => {
  return useQuery({
    queryKey: [MAP_CONFIG_CACHE_KEY],
    queryFn: async () => {
      try {
        if (import.meta.env.DEV) {
          console.log("Fetching Google Maps API key from settings...");
        }
        
        // First try environment variable (most reliable)
        if (import.meta.env.VITE_GOOGLE_MAPS_API_KEY && 
            isValidApiKey(import.meta.env.VITE_GOOGLE_MAPS_API_KEY)) {
          if (import.meta.env.DEV) {
            console.log("Using API key from environment variables");
          }
          return import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
        }
        
        // Then try to fetch from Supabase with uppercase key
        const { data, error } = await supabase
          .from('settings')
          .select('value')
          .eq('key', 'GOOGLE_MAPS_API_KEY')
          .maybeSingle();
        
        if (error) {
          console.error("Error fetching API key:", error.message);
          // Don't throw, continue to fallback options
        }
        
        if (data?.value && isValidApiKey(data.value)) {
          if (import.meta.env.DEV) {
            console.log("Found API key in settings");
          }
          return data.value;
        }
        
        if (import.meta.env.DEV) {
          console.log("GOOGLE_MAPS_API_KEY not found, trying lowercase...");
        }
        
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
          if (import.meta.env.DEV) {
            console.log("Found lowercase API key");
          }
          return result.data.value;
        }
        
        // Check for any other keys that might contain "google" and "maps"
        if (import.meta.env.DEV) {
          console.log("Trying to find any Google Maps related keys...");
        }
        
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
          if (import.meta.env.DEV) {
            console.log("Available settings:", settingsResult.data);
          }
          
          // Try to find a key that looks like a Google Maps API key
          for (const item of settingsResult.data) {
            if (item.value && isValidApiKey(item.value)) {
              if (import.meta.env.DEV) {
                console.log(`Found API key in setting: ${item.key}`);
              }
              return item.value;
            }
          }
        }
        
        // Fall back to hardcoded key as absolute last resort
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
    retry: 1, // Retry once before failing
    retryDelay: 1000, // 1 second between retries
    meta: {
      onError: (error: Error) => {
        console.error('Error fetching Google Maps API key:', error.message);
        
        // Only show in development to avoid user confusion
        if (import.meta.env.DEV) {
          toast.error('Error loading Maps configuration');
        }
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
          
          // Only show in development to avoid user confusion
          if (import.meta.env.DEV) {
            toast.error('Error loading map locations');
          }
          
          return []; // Return empty array instead of throwing
        }
        
        if (!data || data.length === 0) {
          console.warn('No locations found in database');
          return []; // Return empty array
        } else if (import.meta.env.DEV) {
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
    retry: 1, // Retry once before failing
    retryDelay: 1000, // 1 second between retries
    meta: {
      onError: (error: Error) => {
        console.error('Error fetching map locations:', error.message);
      }
    }
  });
};
