
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

type ApiKeyType = 'GOOGLE_MAPS_API_KEY' | 'recaptcha_site_key';

export const API_KEY_QUERY_KEYS = {
  GOOGLE_MAPS: ['api-key', 'google-maps'] as const,
  RECAPTCHA: ['api-key', 'recaptcha'] as const,
};

/**
 * Fetches API keys from Supabase settings table
 */
export const useApiKey = (keyName: ApiKeyType) => {
  return useQuery({
    queryKey: keyName === 'GOOGLE_MAPS_API_KEY' 
      ? API_KEY_QUERY_KEYS.GOOGLE_MAPS 
      : API_KEY_QUERY_KEYS.RECAPTCHA,
    queryFn: async () => {
      console.log(`Fetching ${keyName} from Supabase...`);
      
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
        throw new Error(`API key "${keyName}" not found in settings`);
      }
      
      console.log(`${keyName} fetched successfully`);
      return data.value;
    },
    staleTime: Infinity, // API keys don't change often
    gcTime: Infinity,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
  });
};

// Export specific hooks for different keys
export const useGoogleMapsApiKey = () => useApiKey('GOOGLE_MAPS_API_KEY');
export const useRecaptchaKey = () => useApiKey('recaptcha_site_key');

// Add cache clear function
export const clearApiKeyCache = (keyType: 'maps' | 'recaptcha' | 'all') => {
  const queryClient = useQueryClient();
  
  if (keyType === 'maps' || keyType === 'all') {
    queryClient.invalidateQueries({ queryKey: API_KEY_QUERY_KEYS.GOOGLE_MAPS });
    console.log('Google Maps API key cache cleared');
  }
  
  if (keyType === 'recaptcha' || keyType === 'all') {
    queryClient.invalidateQueries({ queryKey: API_KEY_QUERY_KEYS.RECAPTCHA });
    console.log('reCAPTCHA key cache cleared');
  }
  
  // Trigger script reloading by dispatching events
  if (keyType === 'maps' || keyType === 'all') {
    document.dispatchEvent(new Event('reload-google-maps'));
  }
  
  if (keyType === 'recaptcha' || keyType === 'all') {
    document.dispatchEvent(new Event('reload-recaptcha'));
  }
};
