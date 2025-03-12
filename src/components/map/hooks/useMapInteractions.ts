
import { useCallback, useState } from "react";
import { MapMarker } from "@/types/service-area";

export const useMapInteractions = (
  markers: MapMarker[] = [],
  highlightedMarker: string | null = null,
  showAllMarkers: boolean = true,
  initialZoom: number = 12
) => {
  const [zoomLevel, setZoomLevel] = useState(initialZoom);
  
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
  
  const visibleMarkers = showAllMarkers 
    ? markers 
    : highlightedMarker 
      ? markers.filter(marker => marker.slug === highlightedMarker)
      : markers;

  return {
    zoomLevel,
    zoomIn,
    zoomOut,
    centerMap,
    visibleMarkers
  };
};
