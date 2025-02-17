
import { useState, useCallback, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface MapConfig {
  center: { lat: number; lng: number };
  zoom: number;
}

export const useMapConfig = () => {
  return useQuery({
    queryKey: ['googleMapsApiKey'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('settings')
        .select('value')
        .eq('key', 'GOOGLE_MAPS_API_KEY')
        .maybeSingle();

      if (error) throw error;
      
      if (!data?.value) {
        throw new Error('Google Maps API key not found');
      }

      return data.value;
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
