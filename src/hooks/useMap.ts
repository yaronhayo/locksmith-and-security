
import { useState, useCallback, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface MapConfig {
  center: { lat: number; lng: number };
  zoom: number;
}

const fetchMapApiKey = async () => {
  const { data, error } = await supabase
    .from('settings')
    .select('value')
    .eq('key', 'GOOGLE_MAPS_API_KEY')
    .single();

  if (error) throw error;
  return data.value;
};

export const useMapConfig = () => {
  const { 
    data: apiKey,
    error,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['googleMapsApiKey'],
    queryFn: fetchMapApiKey,
    staleTime: Infinity,
    gcTime: Infinity,
    retry: 3
  });

  return {
    apiKey,
    error: isError ? error : null,
    isLoading
  };
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
