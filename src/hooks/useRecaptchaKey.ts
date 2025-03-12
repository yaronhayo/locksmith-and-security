
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useRecaptchaKey = () => {
  return useQuery({
    queryKey: ['recaptcha-key'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('settings')
        .select('value')
        .eq('key', 'recaptcha_site_key')
        .single();
      
      if (error) throw error;
      return data.value;
    }
  });
};
