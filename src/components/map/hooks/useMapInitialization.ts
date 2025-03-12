
import { useCallback, useState, useRef, useEffect } from "react";

export const useMapInitialization = () => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);
  
  const onLoadCallback = useCallback((map: google.maps.Map) => {
    console.log("Map loaded successfully in initialization hook");
    mapRef.current = map;
    try {
      // Add any map initialization logic here
      // Ensure the map has valid center coordinates
      if (!map.getCenter()) {
        map.setCenter({ lat: 40.7795, lng: -74.0324 });
      }
      
      setIsLoading(false);
    } catch (error) {
      console.error("Map initialization error:", error);
      setMapError("Failed to initialize map");
      setIsLoading(false);
    }
  }, []);
  
  const onUnmountCallback = useCallback(() => {
    console.log("Map unmounted");
    mapRef.current = null;
  }, []);

  // Safety timeout to prevent infinite loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading) {
        console.warn("Map loading timeout - forcing load complete");
        setIsLoading(false);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [isLoading]);
  
  return {
    mapRef,
    isLoading,
    mapError,
    onLoadCallback,
    onUnmountCallback
  };
};
