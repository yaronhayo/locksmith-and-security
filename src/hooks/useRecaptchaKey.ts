
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

// Fallback key (Google's test key) in case fetching from Supabase fails
const FALLBACK_RECAPTCHA_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

export const useRecaptchaKey = () => {
  return useQuery({
    queryKey: ['recaptcha_key'],
    queryFn: async () => {
      try {
        console.log('Fetching reCAPTCHA key from Supabase');
        const { data, error } = await supabase
          .from('settings')
          .select('value')
          .eq('key', 'recaptcha_site_key')
          .single();
        
        if (error) {
          console.error('Error fetching reCAPTCHA key:', error.message);
          return FALLBACK_RECAPTCHA_KEY;
        }
        
        const siteKey = data?.value as string;
        
        if (!siteKey) {
          console.warn('No reCAPTCHA key found in database, using fallback key');
          return FALLBACK_RECAPTCHA_KEY;
        }
        
        console.log('Successfully retrieved reCAPTCHA key from Supabase:', siteKey.substring(0, 4) + '***');
        return siteKey;
      } catch (error) {
        console.error('Exception fetching reCAPTCHA key:', error);
        return FALLBACK_RECAPTCHA_KEY;
      }
    },
    retry: 1, // Reduced retry attempts to prevent excessive requests
    staleTime: 1000 * 60 * 60, // Cache for 60 minutes - increased to reduce API calls
    refetchOnWindowFocus: false,
    // Make sure the query doesn't fail permanently and always returns a usable key
    meta: {
      onError: (error: Error) => {
        console.error('Error in reCAPTCHA key query:', error.message);
      }
    }
  });
};
