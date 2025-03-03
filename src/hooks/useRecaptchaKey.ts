
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

// Fallback key (Google's test key) in case fetching from Supabase fails
const FALLBACK_RECAPTCHA_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

export const useRecaptchaKey = () => {
  return useQuery({
    queryKey: ['recaptcha_key'],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from('settings')
          .select('value')
          .eq('key', 'recaptcha_site_key')
          .single();
        
        if (error) {
          console.error('Error fetching reCAPTCHA key:', error.message);
          return FALLBACK_RECAPTCHA_KEY;
        }
        
        return data?.value as string || FALLBACK_RECAPTCHA_KEY;
      } catch (error) {
        console.error('Exception fetching reCAPTCHA key:', error);
        return FALLBACK_RECAPTCHA_KEY;
      }
    },
    retry: 1,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    meta: {
      onError: (error: Error) => {
        console.error('Error in reCAPTCHA key query:', error.message);
      }
    }
  });
};
