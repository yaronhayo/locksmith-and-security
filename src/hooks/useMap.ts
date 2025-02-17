
import { useState, useCallback, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface MapConfig {
  center: { lat: number; lng: number };
  zoom: number;
}

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

      console.log('API key fetched successfully');
      return data.value.toString();
    },
    staleTime: Infinity,
    retry: false
  });
};

export const useMapInstance = ({ center, zoom }: MapConfig) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance);
  }, []);

  useEffect(() => {
    if (map) {
      map.setCenter(center);
      map.setZoom(zoom);
    }
  }, [map, center, zoom]);

  return { map, onLoad };
};
