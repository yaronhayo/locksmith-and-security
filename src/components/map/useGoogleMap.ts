
import { useState, useRef, useCallback, useEffect } from "react";
import { mapPerformance } from "@/utils/performanceMonitoring";
import { MapMarker } from "@/types/service-area";
import { toast } from "sonner";

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
  const isMapInitialized = useRef(false);
  
  const visibleMarkers = useCallback(() => 
    showAllMarkers ? markers : markers.filter(m => m.slug === highlightedMarker),
    [markers, showAllMarkers, highlightedMarker]
  );

  const updateMapView = useCallback(() => {
    if (!mapRef.current) {
      console.log("Cannot update map view - map not initialized");
      return;
    }
    
    try {
      const map = mapRef.current;
      const visibleMarkersList = visibleMarkers();
      console.log("Updating map view with markers:", visibleMarkersList.length);
      
      if (visibleMarkersList.length > 1) {
        const bounds = new google.maps.LatLngBounds();
        visibleMarkersList.forEach(marker => {
          bounds.extend({ lat: marker.lat, lng: marker.lng });
        });
        map.fitBounds(bounds);
        
        // Set minimum zoom level so we don't zoom in too far when only a few markers
        const listener = google.maps.event.addListener(map, 'idle', () => {
          if (map.getZoom() > 15) map.setZoom(15);
          google.maps.event.removeListener(listener);
        });
      } else if (visibleMarkersList.length === 1) {
        map.setCenter({ lat: visibleMarkersList[0].lat, lng: visibleMarkersList[0].lng });
        map.setZoom(initialZoom);
      } else {
        map.setCenter(initialCenter);
        map.setZoom(initialZoom);
      }
    } catch (error) {
      console.error("Error updating map view:", error);
      setMapError("Failed to update map view");
      toast.error("Map error: Failed to update view");
    }
  }, [visibleMarkers, initialZoom, initialCenter]);

  const onLoadCallback = useCallback((map: google.maps.Map) => {
    try {
      const loadTime = performance.now() - loadStartTime.current;
      console.log(`Map loaded successfully in ${loadTime.toFixed(2)}ms`);
      mapPerformance.trackInstanceLoad(loadStartTime.current);
      
      mapRef.current = map;
      isMapInitialized.current = true;
      
      // Slight delay to make sure everything is ready
      setTimeout(() => {
        setIsLoading(false);
        updateMapView();
      }, 200);
    } catch (error) {
      console.error("Error in map load callback:", error);
      setMapError("Failed to initialize map properly");
      toast.error("Map initialization error");
      setIsLoading(false);
    }
  }, [updateMapView]);

  const onUnmountCallback = useCallback(() => {
    console.log('Map unmounting');
    
    // Clean up any listeners if needed
    if (mapRef.current) {
      // No listeners to clean in this implementation, but if we add any, they should be cleaned here
      mapRef.current = null;
      isMapInitialized.current = false;
    }
  }, []);

  // Debug logging for component lifecycle
  useEffect(() => {
    console.log("GoogleMap hook initialized with markers:", markers.length);
    
    return () => {
      console.log("GoogleMap hook unmounted");
    };
  }, [markers.length]);

  // Update markers when they change
  useEffect(() => {
    console.log("Markers updated:", { 
      total: markers.length, 
      visible: visibleMarkers().length,
      highlighted: highlightedMarker
    });
    
    if (mapRef.current && isMapInitialized.current && !isLoading) {
      try {
        updateMapView();
      } catch (error) {
        console.error("Error updating map view:", error);
        setMapError("Failed to update map view");
        toast.error("Failed to update map");
      }
    }
  }, [markers, highlightedMarker, showAllMarkers, updateMapView, visibleMarkers, isLoading]);
  
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
