
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useMapConfig = () => {
  return useQuery({
    queryKey: ['google-maps-api-key'],
    queryFn: async () => {
      console.log('Fetching Google Maps API key...');
      const { data, error } = await supabase
        .from('settings')
        .select('value')
        .eq('key', 'GOOGLE_MAPS_API_KEY')
        .single();

      if (error) {
        console.error('Error fetching API key:', error);
        throw error;
      }
      
      if (!data?.value) {
        console.error('No API key found in settings');
        throw new Error('Google Maps API key not found');
      }

      const apiKey = data.value.toString().trim();
      console.log('API key found:', apiKey.substring(0, 5) + '...');
      return apiKey;
    },
    staleTime: Infinity // API key won't change often
  });
};
