
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
  google_maps_api_key: string;
};

export const useSettings = () => {
  return useQuery({
    queryKey: ['settings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('settings')
        .select('key, value');

      if (error) throw error;

      const settings = data.reduce((acc, { key, value }) => {
        acc[key as keyof SiteSettings] = value;
        return acc;
      }, {} as SiteSettings);

      return settings;
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    gcTime: 1000 * 60 * 60, // Keep in garbage collection for 1 hour
  });
};
