
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

// Fallback settings to use if database query fails
const FALLBACK_SETTINGS: SiteSettings = {
  company_name: "Locksmith & Security LLC",
  company_phone: "(201) 748-2070",
  company_address: "7211 Bergenline Ave",
  company_city: "North Bergen",
  company_state: "NJ",
  company_zip: "07047",
  company_lat: "40.7828",
  company_lng: "-74.0297",
  base_url: "https://247locksmithandsecurity.com",
  default_meta_title: "24/7 Emergency Locksmith Services",
  default_meta_description: "Professional locksmith services. Available 24/7 for all your security needs.",
  GOOGLE_MAPS_API_KEY: ""
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
          return FALLBACK_SETTINGS; // Return fallback settings object
        }

        if (!data || data.length === 0) {
          console.warn('No settings found in database, using fallback values');
          return FALLBACK_SETTINGS;
        }

        // Convert the data into a settings object
        const settings = data.reduce((acc, { key, value }) => {
          acc[key as keyof SiteSettings] = value;
          return acc;
        }, {} as SiteSettings);

        // Merge with fallback settings to ensure all properties exist
        return { ...FALLBACK_SETTINGS, ...settings };
      } catch (error: any) {
        console.error('Error in settings query:', error.message);
        return FALLBACK_SETTINGS; // Return fallback settings object on error
      }
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    gcTime: 1000 * 60 * 60, // Keep in garbage collection for 1 hour
    retry: 2, // Retry twice
    retryDelay: 1000, // Wait 1 second between retries
    meta: {
      onError: (error: Error) => {
        console.error('Error fetching settings:', error.message);
      }
    }
  });
};
