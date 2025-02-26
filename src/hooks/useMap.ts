
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useMapConfig = () => {
  return useQuery({
    queryKey: ['GOOGLE_MAPS_API_KEY'],
    queryFn: async () => {
      console.log('Fetching Google Maps API key...');
      const { data, error } = await supabase
        .from('settings')
        .select('value')
        .eq('value', 'GOOGLE_MAPS_API_KEY')
        .single();

      if (error) {
        console.error('Error fetching API key:', error);
        throw new Error('Failed to fetch Google Maps API key from settings');
      }
      
      if (!data?.value) {
        console.error('No API key found in settings');
        throw new Error('Google Maps API key not found in settings table. Please ensure GOOGLE_MAPS_API_KEY is set.');
      }

      console.log('API key fetched successfully');
      return data.value;
    },
    staleTime: Infinity,
    gcTime: Infinity,
    retry: 1,
    meta: {
      errorMessage: 'Failed to load Google Maps configuration'
    }
  });
};
