
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

// Define query keys for different API keys
export const API_KEYS = {
  GOOGLE_MAPS: 'GOOGLE_MAPS_API_KEY',
  RECAPTCHA: 'recaptcha_site_key',
} as const;

export type ApiKeyType = typeof API_KEYS[keyof typeof API_KEYS];

/**
 * Hook to fetch API keys from Supabase
 * @param keyName The name of the API key to fetch
 * @returns The API key query result
 */
export const useApiKey = (keyName: ApiKeyType) => {
  return useQuery({
    queryKey: ['api-key', keyName],
    queryFn: async () => {
      console.log(`Fetching API key: ${keyName}`);
      
      const { data, error } = await supabase
        .from('settings')
        .select('value')
        .eq('key', keyName)
        .single();

      if (error) {
        console.error(`Error fetching ${keyName}:`, error);
        throw error;
      }
      
      if (!data?.value) {
        console.error(`No ${keyName} found in settings`);
        throw new Error(`${keyName} not found in settings`);
      }

      console.log(`${keyName} fetched successfully`);
      return data.value;
    },
    staleTime: Infinity, // API keys rarely change
    gcTime: Infinity,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
  });
};

// Specific hooks for different API keys
export const useGoogleMapsApiKey = () => useApiKey(API_KEYS.GOOGLE_MAPS);
export const useRecaptchaKey = () => useApiKey(API_KEYS.RECAPTCHA);

// Function to invalidate API key cache
export const invalidateApiKey = (keyName: ApiKeyType) => {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ['api-key', keyName] });
  console.log(`${keyName} cache invalidated`);
  
  // For Google Maps, also dispatch an event to notify components
  if (keyName === API_KEYS.GOOGLE_MAPS) {
    document.dispatchEvent(new Event('google-maps-key-changed'));
  }
};
