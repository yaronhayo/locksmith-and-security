
import { useCallback, useEffect, useState, useMemo } from "react";
import { MapMarker } from "@/types/service-area";

export const useMapInteractions = (
  markers: MapMarker[],
  highlightedMarker: string | null,
  showAllMarkers: boolean,
  initialZoom: number
) => {
  const [zoomLevel, setZoomLevel] = useState(initialZoom);

  // Filter markers based on showAllMarkers and highlightedMarker
  const visibleMarkers = useMemo(() => {
    if (showAllMarkers) return markers;
    return markers.filter(marker => marker.slug === highlightedMarker);
  }, [markers, showAllMarkers, highlightedMarker]);

  const zoomIn = useCallback(() => {
    setZoomLevel(prev => Math.min(prev + 1, 20));
  }, []);

  const zoomOut = useCallback(() => {
    setZoomLevel(prev => Math.max(prev - 1, 1));
  }, []);

  const centerMap = useCallback(() => {
    setZoomLevel(initialZoom);
  }, [initialZoom]);

  // Reset zoom when markers or highlightedMarker changes
  useEffect(() => {
    setZoomLevel(initialZoom);
  }, [highlightedMarker, markers.length, initialZoom]);

  return {
    zoomLevel,
    zoomIn,
    zoomOut,
    centerMap,
    visibleMarkers
  };
};
