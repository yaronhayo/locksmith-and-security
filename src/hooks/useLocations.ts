
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { ServiceAreaLocation } from '@/types/service-area';

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
        title: location.title || `${location.name} Locksmith Services`
      })) as ServiceAreaLocation[];
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    meta: {
      errorMessage: 'Failed to load service area locations'
    }
  });
};
