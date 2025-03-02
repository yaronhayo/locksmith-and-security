
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
  const markersProcessed = useRef(false);
  
  // Memoize visible markers so we don't recalculate them unnecessarily
  const visibleMarkers = useCallback(() => {
    try {
      if (!markers || markers.length === 0) return [];
      return showAllMarkers ? markers : markers.filter(m => m.slug === highlightedMarker);
    } catch (error) {
      console.error("Error filtering markers:", error);
      return [];
    }
  }, [markers, showAllMarkers, highlightedMarker]);

  // Update map view safely
  const updateMapView = useCallback(() => {
    if (!mapRef.current || !isMapInitialized.current) {
      console.log("Map not initialized yet, skipping view update");
      return;
    }
    
    try {
      const map = mapRef.current;
      const visibleMarkersList = visibleMarkers();
      
      // Skip if already processed with the same markers
      if (markersProcessed.current && visibleMarkersList.length === 0) {
        return;
      }
      
      markersProcessed.current = true;
      
      if (visibleMarkersList.length > 1) {
        const bounds = new google.maps.LatLngBounds();
        visibleMarkersList.forEach(marker => {
          bounds.extend({ lat: marker.lat, lng: marker.lng });
        });
        
        // Add padding to bounds
        const ne = bounds.getNorthEast();
        const sw = bounds.getSouthWest();
        const latPadding = Math.abs(ne.lat() - sw.lat()) * 0.1;
        const lngPadding = Math.abs(ne.lng() - sw.lng()) * 0.1;
        
        bounds.extend({ 
          lat: ne.lat() + latPadding, 
          lng: ne.lng() + lngPadding 
        });
        bounds.extend({ 
          lat: sw.lat() - latPadding, 
          lng: sw.lng() - lngPadding 
        });
        
        map.fitBounds(bounds);
        
        // Set minimum zoom level
        const listener = google.maps.event.addListener(map, 'idle', () => {
          if (map.getZoom() && map.getZoom() > 15) map.setZoom(15);
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
    }
  }, [visibleMarkers, initialZoom, initialCenter]);

  const onLoadCallback = useCallback((map: google.maps.Map) => {
    try {
      const loadTime = performance.now() - loadStartTime.current;
      mapPerformance.trackInstanceLoad(loadStartTime.current);
      
      console.log("Google Map loaded successfully after", loadTime.toFixed(2), "ms");
      mapRef.current = map;
      
      // Reset error state if previously set
      if (mapError) {
        setMapError(null);
      }
      
      // Slight delay to ensure everything is loaded
      setTimeout(() => {
        isMapInitialized.current = true;
        markersProcessed.current = false;
        setIsLoading(false);
        updateMapView();
      }, 300);
    } catch (error) {
      console.error("Error in map load callback:", error);
      setMapError("Failed to initialize map properly");
      setIsLoading(false);
    }
  }, [updateMapView, mapError]);

  const onUnmountCallback = useCallback(() => {
    console.log("Map unmounted");
    mapRef.current = null;
    isMapInitialized.current = false;
    markersProcessed.current = false;
  }, []);

  // Update markers when they change
  useEffect(() => {
    if (!isLoading && isMapInitialized.current && mapRef.current) {
      console.log("Markers or highlighted marker changed, updating map");
      markersProcessed.current = false;
      updateMapView();
    }
  }, [markers, highlightedMarker, showAllMarkers, updateMapView, isLoading]);
  
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
    markersProcessed.current = false;
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
