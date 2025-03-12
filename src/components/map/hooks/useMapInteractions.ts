
import { useCallback, useState, useEffect } from "react";
import { MapMarker } from "@/types/service-area";

export const useMapInteractions = (
  markers: MapMarker[] = [],
  highlightedMarker: string | null = null,
  showAllMarkers: boolean = true,
  initialZoom: number = 12
) => {
  const [zoomLevel, setZoomLevel] = useState(initialZoom);
  
  // Reset zoom level when markers change
  useEffect(() => {
    setZoomLevel(initialZoom);
  }, [markers, initialZoom]);
  
  const zoomIn = useCallback(() => {
    setZoomLevel(prev => Math.min(prev + 1, 20));
  }, []);
  
  const zoomOut = useCallback(() => {
    setZoomLevel(prev => Math.max(prev - 1, 1));
  }, []);
  
  const centerMap = useCallback(() => {
    if (highlightedMarker && markers.length) {
      const marker = markers.find(m => m.slug === highlightedMarker);
      return marker ? { lat: marker.lat, lng: marker.lng } : null;
    }
    return null;
  }, [highlightedMarker, markers]);
  
  // Filter visible markers based on showAllMarkers flag
  const visibleMarkers = useCallback(() => {
    if (!markers.length) return [];
    
    if (showAllMarkers) {
      return markers;
    } else if (highlightedMarker) {
      return markers.filter(marker => marker.slug === highlightedMarker);
    }
    
    return markers;
  }, [markers, showAllMarkers, highlightedMarker])();

  return {
    zoomLevel,
    zoomIn,
    zoomOut,
    centerMap,
    visibleMarkers,
    setZoomLevel
  };
};
