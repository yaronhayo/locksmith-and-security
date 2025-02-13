
import { useState, useEffect, useRef } from 'react';

interface UseMapInstanceProps {
  center: { lat: number; lng: number };
  zoom: number;
}

export const useMapInstance = ({ center, zoom }: UseMapInstanceProps) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    if (map) {
      map.setCenter(center);
      map.setZoom(zoom);
    }
  }, [map, center, zoom]);

  // Cleanup map instance on unmount
  useEffect(() => {
    return () => {
      if (mapRef.current) {
        // Remove event listeners and cleanup
        google.maps.event.clearInstanceListeners(mapRef.current);
        mapRef.current = null;
      }
    };
  }, []);

  const handleMapLoad = (map: google.maps.Map) => {
    console.log('Map instance loaded successfully');
    mapRef.current = map;
    setMap(map);
  };

  return { map, handleMapLoad };
};

// Export type for better type safety
export type MapInstanceHookResult = ReturnType<typeof useMapInstance>;
