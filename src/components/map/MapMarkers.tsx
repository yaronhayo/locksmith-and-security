
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

  const handleMarkerClick = useCallback((slug?: string) => {
    if (slug) {
      navigate(`/service-areas/${slug}`);
    }
  }, [navigate]);

  // Cleanup markers on unmount
  useEffect(() => {
    return () => {
      // Clean up markers on component unmount
      markersRef.current.forEach((marker) => {
        if (marker) {
          marker.setMap(null);
        }
      });
      markersRef.current = [];
    };
  }, []);

  const handleMarkerLoad = useCallback((marker: google.maps.Marker, index: number) => {
    markersRef.current[index] = marker;
  }, []);

  const handleMarkerUnmount = useCallback((index: number) => {
    if (markersRef.current[index]) {
      markersRef.current[index]?.setMap(null);
      markersRef.current[index] = null;
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
          animation={isHovered ? google.maps.Animation.BOUNCE : undefined}
          onLoad={(marker) => handleMarkerLoad(marker, index)}
          onUnmount={() => handleMarkerUnmount(index)}
        />
      );
    }), [markers, hoveredMarker, handleMarkerClick, handleMarkerLoad, handleMarkerUnmount]);

  return <>{renderedMarkers}</>;
};

export default MapMarkers;
