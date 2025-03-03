
import { useState, useRef, useCallback, useEffect } from "react";
import { mapPerformance } from "@/utils/performanceMonitoring";
import { MapMarker } from "@/types/service-area";

export const useGoogleMap = (
  markers: MapMarker[] = [],
  highlightedMarker: string | null = null,
  showAllMarkers: boolean = true,
  initialZoom: number = 12,
  initialCenter: { lat: number; lng: number } = { lat: 40.7795, lng: -74.0324 }
) => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);
  const loadStartTime = useRef(performance.now());
  
  const visibleMarkers = useCallback(() => 
    showAllMarkers ? markers : markers.filter(m => m.slug === highlightedMarker),
    [markers, showAllMarkers, highlightedMarker]
  );

  const updateMapView = useCallback(() => {
    if (!mapRef.current) return;
    
    const map = mapRef.current;
    const markers = visibleMarkers();
    
    if (markers.length > 1) {
      const bounds = new google.maps.LatLngBounds();
      markers.forEach(marker => {
        bounds.extend({ lat: marker.lat, lng: marker.lng });
      });
      map.fitBounds(bounds);
    } else if (markers.length === 1) {
      map.setCenter({ lat: markers[0].lat, lng: markers[0].lng });
      map.setZoom(initialZoom);
    } else {
      map.setCenter(initialCenter);
      map.setZoom(initialZoom);
    }
  }, [visibleMarkers, initialZoom, initialCenter]);

  const onLoadCallback = useCallback((map: google.maps.Map) => {
    try {
      const loadTime = performance.now() - loadStartTime.current;
      console.log(`Map loaded successfully in ${loadTime.toFixed(2)}ms`);
      mapPerformance.trackInstanceLoad(loadStartTime.current);
      
      mapRef.current = map;
      
      setTimeout(() => {
        setIsLoading(false);
        updateMapView();
      }, 200);
    } catch (error) {
      console.error("Error in map load callback:", error);
      setMapError("Failed to initialize map properly");
      setIsLoading(false);
    }
  }, [updateMapView]);

  const onUnmountCallback = useCallback(() => {
    console.log('Map unmounting');
    mapRef.current = null;
  }, []);

  useEffect(() => {
    console.log("GoogleMap component mounted");
    return () => {
      console.log("GoogleMap component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Markers updated:", { 
      total: markers.length, 
      visible: visibleMarkers().length,
      highlighted: highlightedMarker
    });
    
    if (mapRef.current && visibleMarkers().length > 0) {
      try {
        updateMapView();
      } catch (error) {
        console.error("Error updating map view:", error);
        setMapError("Failed to update map view");
      }
    }
  }, [markers, highlightedMarker, showAllMarkers, updateMapView, visibleMarkers]);
  
  const zoomIn = useCallback(() => {
    if (mapRef.current) {
      const currentZoom = mapRef.current.getZoom() || initialZoom;
      mapRef.current.setZoom(currentZoom + 1);
    }
  }, [initialZoom]);
  
  const zoomOut = useCallback(() => {
    if (mapRef.current) {
      const currentZoom = mapRef.current.getZoom() || initialZoom;
      mapRef.current.setZoom(currentZoom - 1);
    }
  }, [initialZoom]);
  
  const centerMap = useCallback(() => {
    updateMapView();
  }, [updateMapView]);

  return {
    mapRef,
    isLoading,
    mapError,
    visibleMarkers: visibleMarkers(),
    onLoadCallback,
    onUnmountCallback,
    zoomIn,
    zoomOut,
    centerMap
  };
};
