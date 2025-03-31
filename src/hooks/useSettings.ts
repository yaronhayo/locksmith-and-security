
import { useState, useEffect } from 'react';

export interface SiteSettings {
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
}

export const useSettings = () => {
  const [data, setData] = useState<SiteSettings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        // In a real app, you would fetch this from an API or database
        // For now, we'll use default values
        setData({
          company_name: "Locksmith & Security LLC",
          company_phone: "(201) 748-2070",
          company_address: "5800 Kennedy Blvd",
          company_city: "North Bergen",
          company_state: "NJ",
          company_zip: "07047",
          company_lat: "40.7795",
          company_lng: "-74.0324",
          base_url: "https://247locksmithandsecurity.com",
          default_meta_title: "Professional Locksmith Services | 24/7 Locksmith & Security LLC",
          default_meta_description: "Expert locksmith services for residential, commercial and automotive needs. 24/7 emergency service, fast response times, and competitive rates.",
          GOOGLE_MAPS_API_KEY: ""
        });
        setIsLoading(false);
      } catch (err) {
        setError(err as Error);
        setIsLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return { data, isLoading, error };
};
