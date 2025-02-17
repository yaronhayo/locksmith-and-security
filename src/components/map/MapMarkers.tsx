
import { useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapMarker } from '@/types/service-area';
import { AdvancedMarkerElement } from '@react-google-maps/api';

interface MapMarkersProps {
  markers: MapMarker[];
  hoveredMarker: string | null;
}

const MapMarkers = ({ markers, hoveredMarker }: MapMarkersProps) => {
  const navigate = useNavigate();

  const handleMarkerClick = useCallback((slug?: string) => {
    if (slug) {
      navigate(`/service-areas/${slug}`);
    }
  }, [navigate]);

  const renderedMarkers = useMemo(() => 
    markers.map((marker, index) => {
      const position = { lat: marker.lat, lng: marker.lng };
      const isHovered = hoveredMarker === marker.slug;
      
      return (
        <AdvancedMarkerElement
          key={`${marker.slug || ''}-${index}`}
          position={position}
          title={marker.title}
          onClick={() => handleMarkerClick(marker.slug)}
          animation={isHovered ? google.maps.Animation.BOUNCE : undefined}
        />
      );
    }), [markers, hoveredMarker, handleMarkerClick]);

  return <>{renderedMarkers}</>;
};

export default MapMarkers;
