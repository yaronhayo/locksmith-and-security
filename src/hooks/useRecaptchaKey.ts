
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Cache key to prevent excessive database queries
let cachedRecaptchaKey: string | null = null;

export const useRecaptchaKey = () => {
  return useQuery({
    queryKey: ['recaptcha-key'],
    queryFn: async () => {
      // Return cached key if available
      if (cachedRecaptchaKey) {
        console.log('Using cached reCAPTCHA site key');
        return cachedRecaptchaKey;
      }
      
      console.log('Fetching reCAPTCHA site key from database...');
      try {
        const { data, error } = await supabase
          .from('settings')
          .select('value')
          .eq('key', 'recaptcha_site_key')
          .single();
        
        if (error) {
          console.error('Error fetching reCAPTCHA key:', error);
          throw error;
        }
        
        if (!data?.value) {
          console.error('No reCAPTCHA key found in settings');
          throw new Error('reCAPTCHA site key not found in settings');
        }
        
        // Cache the key
        cachedRecaptchaKey = data.value;
        console.log('reCAPTCHA key fetched and cached successfully');
        return cachedRecaptchaKey;
      } catch (error) {
        console.error('Failed to fetch reCAPTCHA site key:', error);
        throw error;
      }
    },
    staleTime: Infinity, // Keep the key indefinitely until manual invalidation
    gcTime: Infinity,    // Don't garbage collect the query
    retry: 3,            // Try up to 3 times if the request fails
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 10000),
    meta: {
      onError: (error: Error) => {
        console.error('reCAPTCHA key error:', error);
        toast.error('Failed to load security verification. Some features may be limited.');
      }
    }
  });
};

export const clearRecaptchaKeyCache = () => {
  cachedRecaptchaKey = null;
  console.log('reCAPTCHA key cache cleared');
};
