
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { ServiceAreaLocation } from '@/types/service-area';
import { toast } from 'sonner';

export const useLocations = () => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: async () => {
      console.log('Fetching locations from Supabase...');
      const { data, error } = await supabase
        .from('locations')
        .select('*')
        .order('name');

      if (error) {
        console.error('Error fetching locations:', error);
        throw new Error(`Failed to fetch locations: ${error.message}`);
      }

      if (!data) {
        console.error('No locations data returned');
        throw new Error('No locations data available');
      }

      console.log('Locations fetched successfully:', data);

      return data.map(location => ({
        name: location.name,
        slug: location.slug,
        description: location.description || '',
        lat: Number(location.lat),
        lng: Number(location.lng),
        title: location.title || `${location.name} Locksmith Services`,
        // Add structured data properties for better SEO
        postalCode: location.postal_code || '',
        region: 'NJ',
        country: 'US',
        // Add neighborhood data if available
        neighborhoods: location.neighborhoods || [],
        // Add business data
        businessName: `Locksmith & Security LLC - ${location.name}`,
        telephone: "(201) 748-2070",
        priceRange: "$$"
      })) as ServiceAreaLocation[];
    },
    staleTime: 60 * 60 * 1000, // Cache for 1 hour
    gcTime: 24 * 60 * 60 * 1000, // Keep in cache for 24 hours
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
    meta: {
      errorMessage: 'Failed to load service area locations'
    },
    onError: (error) => {
      console.error('Location fetch error:', error);
      toast.error('Could not load service locations. Please try again later.');
    }
  });
};
