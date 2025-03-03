
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
  const isMapInitialized = useRef(false);
  const markersProcessed = useRef(false);
  const isMounted = useRef(true);
  
  // Memoize visible markers
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
    if (!mapRef.current || !isMapInitialized.current || !isMounted.current) {
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
        // Handle multiple markers - fit bounds
        const bounds = new google.maps.LatLngBounds();
        visibleMarkersList.forEach(marker => {
          if (marker && typeof marker.lat === 'number' && typeof marker.lng === 'number') {
            bounds.extend({ lat: marker.lat, lng: marker.lng });
          }
        });
        
        // Only proceed if we have valid markers
        if (!bounds.isEmpty()) {
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
          const listener = google.maps.event.addListener(map, 'idle', function() {
            if (!isMounted.current || !map) {
              google.maps.event.removeListener(listener);
              return;
            }
            
            if (map.getZoom() && map.getZoom() > 15) map.setZoom(15);
            google.maps.event.removeListener(listener);
          });
        } else {
          // Fallback if bounds are empty
          map.setCenter(initialCenter);
          map.setZoom(initialZoom);
        }
      } else if (visibleMarkersList.length === 1 && 
                typeof visibleMarkersList[0].lat === 'number' && 
                typeof visibleMarkersList[0].lng === 'number') {
        // Handle single marker
        map.setCenter({ lat: visibleMarkersList[0].lat, lng: visibleMarkersList[0].lng });
        map.setZoom(initialZoom);
      } else {
        // Fallback to default view
        map.setCenter(initialCenter);
        map.setZoom(initialZoom);
      }
    } catch (error) {
      console.error("Error updating map view:", error);
      if (isMounted.current) {
        setMapError("Failed to update map view");
      }
    }
  }, [visibleMarkers, initialZoom, initialCenter]);

  const onLoadCallback = useCallback((map: google.maps.Map) => {
    if (!isMounted.current) return;
    
    try {
      const loadTime = performance.now() - loadStartTime.current;
      mapPerformance.trackInstanceLoad(loadStartTime.current);
      
      if (import.meta.env.DEV) {
        console.log("Google Map loaded successfully after", loadTime.toFixed(2), "ms");
      }
      
      mapRef.current = map;
      
      // Reset error state if previously set
      if (mapError) {
        setMapError(null);
      }
      
      // Slight delay to ensure everything is loaded
      setTimeout(() => {
        if (!isMounted.current) return;
        
        isMapInitialized.current = true;
        markersProcessed.current = false;
        setIsLoading(false);
        updateMapView();
      }, 300);
    } catch (error) {
      console.error("Error in map load callback:", error);
      if (isMounted.current) {
        setMapError("Failed to initialize map properly");
        setIsLoading(false);
      }
    }
  }, [updateMapView, mapError]);

  const onUnmountCallback = useCallback(() => {
    if (import.meta.env.DEV) {
      console.log("Map unmounted");
    }
    
    // Clear all Google Maps event listeners
    if (mapRef.current) {
      // Remove all event listeners (as much as possible)
      google.maps.event.clearInstanceListeners(mapRef.current);
      
      // Explicitly null the reference
      mapRef.current = null;
    }
    
    isMapInitialized.current = false;
    markersProcessed.current = false;
  }, []);

  // Set up the component mounting state
  useEffect(() => {
    isMounted.current = true;
    
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Update markers when they change
  useEffect(() => {
    if (!isLoading && isMapInitialized.current && mapRef.current && isMounted.current) {
      if (import.meta.env.DEV) {
        console.log("Markers or highlighted marker changed, updating map");
      }
      
      markersProcessed.current = false;
      updateMapView();
    }
  }, [markers, highlightedMarker, showAllMarkers, updateMapView, isLoading]);
  
  const zoomIn = useCallback(() => {
    if (mapRef.current && isMounted.current) {
      const currentZoom = mapRef.current.getZoom() || initialZoom;
      mapRef.current.setZoom(currentZoom + 1);
    }
  }, [initialZoom]);
  
  const zoomOut = useCallback(() => {
    if (mapRef.current && isMounted.current) {
      const currentZoom = mapRef.current.getZoom() || initialZoom;
      mapRef.current.setZoom(currentZoom - 1);
    }
  }, [initialZoom]);
  
  const centerMap = useCallback(() => {
    if (isMounted.current) {
      markersProcessed.current = false;
      updateMapView();
    }
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
