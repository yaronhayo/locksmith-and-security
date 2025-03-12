
import { useCallback, useState, useRef } from "react";

export const useMapInitialization = () => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);
  
  const onLoadCallback = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
    try {
      // Add any map initialization logic here
      setIsLoading(false);
    } catch (error) {
      console.error("Map initialization error:", error);
      setMapError("Failed to initialize map");
      setIsLoading(false);
    }
  }, []);
  
  const onUnmountCallback = useCallback(() => {
    mapRef.current = null;
  }, []);
  
  return {
    mapRef,
    isLoading,
    mapError,
    onLoadCallback,
    onUnmountCallback
  };
};
