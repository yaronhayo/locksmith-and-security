
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { MapLocation } from '@/types/map';

export const useMap = () => {
  return useQuery({
    queryKey: ['map_locations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('service_areas')
        .select('id, name, latitude, longitude')
        .order('name');
      
      if (error) {
        throw new Error(error.message);
      }
      
      return (data || []) as MapLocation[];
    },
    meta: {
      onError: (error: Error) => {
        console.error('Error fetching map locations:', error.message);
      }
    }
  });
};
