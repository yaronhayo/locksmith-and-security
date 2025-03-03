
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type SiteSettings = {
  company_name: string;
  company_phone: string;
  company_address: string;
  company_city: string;
  company_state: string;
  company_zip: string;
  company_lat: string;
  company_lng: string;
  base_url: string;
  default_meta_title: string;
  default_meta_description: string;
  GOOGLE_MAPS_API_KEY: string;
};

export const useSettings = () => {
  return useQuery({
    queryKey: ['settings'],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from('settings')
          .select('key, value');

        if (error) {
          console.error('Error fetching settings:', error.message);
          return {} as SiteSettings; // Return empty object as fallback
        }

        const settings = data.reduce((acc, { key, value }) => {
          acc[key as keyof SiteSettings] = value;
          return acc;
        }, {} as SiteSettings);

        return settings;
      } catch (error: any) {
        console.error('Error in settings query:', error.message);
        return {} as SiteSettings; // Return empty object on error
      }
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    gcTime: 1000 * 60 * 60, // Keep in garbage collection for 1 hour
    meta: {
      onError: (error: Error) => {
        console.error('Error fetching settings:', error.message);
      }
    }
  });
};
