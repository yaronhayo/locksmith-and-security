
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { ServiceAreaLocation } from '@/types/service-area';

export const useLocations = () => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('locations')
        .select('*')
        .order('name');
      
      if (error) {
        throw new Error(error.message);
      }
      
      // Map database fields to ServiceAreaLocation type
      return (data || []).map(location => ({
        name: location.name,
        slug: location.slug,
        description: location.description || '',
        lat: location.lat,
        lng: location.lng,
        title: location.title || location.name
      })) as ServiceAreaLocation[];
    },
    meta: {
      onError: (error: Error) => {
        console.error('Error fetching locations:', error.message);
      }
    }
  });
};
