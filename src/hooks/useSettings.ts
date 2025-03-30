
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

// Define a broader type that can be used for Settings
export type Settings = SiteSettings;

export const useSettings = () => {
  return useQuery({
    queryKey: ['settings'],
    queryFn: async () => {
      console.log("Fetching settings from Supabase");
      const { data, error } = await supabase
        .from('settings')
        .select('key, value');

      if (error) {
        console.error("Error fetching settings:", error);
        throw error;
      }

      if (!data || data.length === 0) {
        console.warn("No settings found in database");
        return {} as SiteSettings;
      }

      console.log("Settings fetched successfully, count:", data.length);
      
      const settings = data.reduce((acc, { key, value }) => {
        acc[key as keyof SiteSettings] = value;
        return acc;
      }, {} as SiteSettings);

      return settings;
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    gcTime: 1000 * 60 * 60, // Keep in garbage collection for 1 hour
    retry: 2,
  });
};
