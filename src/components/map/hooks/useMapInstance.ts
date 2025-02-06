import { useState, useEffect } from 'react';

interface UseMapInstanceProps {
  center: { lat: number; lng: number };
  zoom: number;
}

export const useMapInstance = ({ center, zoom }: UseMapInstanceProps) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (map) {
      map.setCenter(center);
      map.setZoom(zoom);
    }
  }, [map, center, zoom]);

  const handleMapLoad = (map: google.maps.Map) => {
    console.log('Map instance loaded successfully');
    setMap(map);
  };

  return { map, handleMapLoad };
};