
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useRecaptchaKey = () => {
  return useQuery({
    queryKey: ['recaptcha_key'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('settings')
        .select('value')
        .eq('key', 'recaptcha_site_key')
        .single();
      
      if (error) {
        throw new Error(error.message);
      }
      
      return data?.value as string;
    },
    meta: {
      onError: (error: Error) => {
        console.error('Error fetching reCAPTCHA key:', error.message);
      }
    }
  });
};
