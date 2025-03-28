
import { useCallback, useState, useEffect } from "react";
import { MapMarker } from "@/types/service-area";

export const useMapInteractions = (
  markers: MapMarker[] = [], 
  highlightedMarker: string | null = null, 
  showAllMarkers: boolean = true,
  initialZoom: number = 12
) => {
  const [zoomLevel, setZoomLevel] = useState(initialZoom);
  
  // Filter markers based on the highlighted marker
  const visibleMarkers = useCallback(() => {
    return showAllMarkers 
      ? markers 
      : markers.filter(m => m.slug === highlightedMarker);
  }, [markers, showAllMarkers, highlightedMarker]);
  
  // Zoom control functions
  const zoomIn = useCallback(() => {
    setZoomLevel(prev => Math.min(prev + 1, 20));
  }, []);
  
  const zoomOut = useCallback(() => {
    setZoomLevel(prev => Math.max(prev - 1, 1));
  }, []);
  
  // Center the map on markers
  const centerMap = useCallback(() => {
    // This function will be used by the parent component
    // to recenter the map through the Google Maps instance
    console.log("Centering map on markers");
  }, []);
  
  // Update zoom level when initialZoom changes
  useEffect(() => {
    setZoomLevel(initialZoom);
  }, [initialZoom]);
  
  return {
    zoomLevel,
    zoomIn,
    zoomOut,
    centerMap,
    visibleMarkers: visibleMarkers()
  };
};
