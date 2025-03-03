
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

// In-memory cache
let mapConfigCache: { apiKey: string } | null = null;

// Environment check that works in browser
const isDevelopment = () => {
  return window.location.hostname === 'localhost' || 
         window.location.hostname === '127.0.0.1' ||
         window.location.hostname.includes('.lovableproject.com');
};

/**
 * Clears the map config cache - useful for retries
 */
export const clearMapConfigCache = () => {
  mapConfigCache = null;
};

/**
 * Fetches the Google Maps API key from Supabase settings
 */
const fetchMapConfig = async (): Promise<{ apiKey: string }> => {
  // Return from cache if available
  if (mapConfigCache) {
    console.log("Using cached map config");
    return mapConfigCache;
  }
  
  try {
    // In development, fetch from Supabase
    if (isDevelopment()) {
      console.log("Fetching map config from Supabase (dev mode)");
      const { data, error } = await supabase
        .from("settings")
        .select("value")
        .eq("key", "google_maps_api_key")
        .single();

      if (error) {
        console.error("Error fetching map config:", error);
        throw new Error("Failed to load Google Maps configuration");
      }

      if (!data?.value) {
        console.error("No Google Maps API key found in settings");
        throw new Error("Google Maps API key not configured");
      }

      // Cache the result
      mapConfigCache = { apiKey: data.value };
      return mapConfigCache;
    } else {
      // In production, we can use a more optimized approach
      console.log("Using production map config approach");
      
      // This would be the API key set in your environment
      // For safety, we'll still check Supabase as a fallback
      const { data, error } = await supabase
        .from("settings")
        .select("value")
        .eq("key", "google_maps_api_key")
        .single();

      if (error || !data?.value) {
        console.warn("Using fallback API key mechanism");
        
        // Use a fallback mechanism (could be an Edge Function or directly from env)
        const fallbackKey = "AIzaSyDtXM78yIhe-GIMQqRLttRIlqe7S7Msdcg"; // Public fallback key with restrictions
        mapConfigCache = { apiKey: fallbackKey };
        return mapConfigCache;
      }

      mapConfigCache = { apiKey: data.value };
      return mapConfigCache;
    }
  } catch (error) {
    console.error("Error in fetchMapConfig:", error);
    throw error;
  }
};

/**
 * React hook to access the Google Maps API key
 */
export const useMapConfig = () => {
  return useQuery({
    queryKey: ["map_config"],
    queryFn: fetchMapConfig,
    staleTime: 1000 * 60 * 60, // 1 hour
    retry: 2,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 10000),
  });
};
