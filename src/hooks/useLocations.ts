
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { ServiceAreaLocation } from '@/components/service-areas/types';

const fetchLocations = async (): Promise<ServiceAreaLocation[]> => {
  const { data, error } = await supabase
    .from('locations')
    .select('*');
  
  if (error) {
    throw new Error(`Failed to fetch locations: ${error.message}`);
  }

  return data.map(location => ({
    name: location.name,
    slug: location.slug,
    description: location.description || '',
    lat: Number(location.lat),
    lng: Number(location.lng),
    title: location.title || `${location.name} Locksmith Services | 24/7 Emergency Service`
  }));
};

export const useLocations = () => {
  return useQuery<ServiceAreaLocation[]>({
    queryKey: ['locations'],
    queryFn: fetchLocations,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    meta: {
      errorMessage: 'Failed to load service area locations'
    }
  });
};
