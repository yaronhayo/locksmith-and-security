
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { ServiceArea } from '@/types/serviceArea';

export const useLocations = () => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('service_areas')
        .select('*')
        .order('name');
      
      if (error) {
        throw new Error(error.message);
      }
      
      return (data || []) as ServiceArea[];
    },
    meta: {
      onError: (error: Error) => {
        console.error('Error fetching locations:', error.message);
      }
    }
  });
};
