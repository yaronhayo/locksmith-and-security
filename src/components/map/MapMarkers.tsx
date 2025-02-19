
import { useMemo, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapMarker } from '@/types/service-area';
import { Marker } from '@react-google-maps/api';

interface MapMarkersProps {
  markers: MapMarker[];
  hoveredMarker: string | null;
}

const MapMarkers = ({ markers, hoveredMarker }: MapMarkersProps) => {
  const navigate = useNavigate();
  const markersRef = useRef<(google.maps.Marker | null)[]>([]);
  const isUnmountingRef = useRef(false);

  const handleMarkerClick = useCallback((slug?: string) => {
    if (slug) {
      navigate(`/service-areas/${slug}`);
    }
  }, [navigate]);

  // Set unmounting flag to prevent cleanup operations if Google Maps is not available
  useEffect(() => {
    return () => {
      isUnmountingRef.current = true;
    };
  }, []);

  const handleMarkerLoad = useCallback((marker: google.maps.Marker, index: number) => {
    if (!isUnmountingRef.current) {
      markersRef.current[index] = marker;
    }
  }, []);

  const handleMarkerUnmount = useCallback((index: number) => {
    try {
      if (!isUnmountingRef.current && window.google?.maps && markersRef.current[index]) {
        markersRef.current[index]?.setMap(null);
        markersRef.current[index] = null;
      }
    } catch (error) {
      console.error('Error unmounting marker:', error);
    }
  }, []);

  const renderedMarkers = useMemo(() => 
    markers.map((marker, index) => {
      const position = { lat: marker.lat, lng: marker.lng };
      const isHovered = hoveredMarker === marker.slug;
      
      return (
        <Marker
          key={`${marker.slug || ''}-${index}`}
          position={position}
          title={marker.title}
          onClick={() => handleMarkerClick(marker.slug)}
          animation={isHovered && window.google?.maps ? google.maps.Animation.BOUNCE : undefined}
          onLoad={(marker) => handleMarkerLoad(marker, index)}
          onUnmount={() => handleMarkerUnmount(index)}
        />
      );
    }), [markers, hoveredMarker, handleMarkerClick, handleMarkerLoad, handleMarkerUnmount]);

  return <>{renderedMarkers}</>;
};

export default MapMarkers;
