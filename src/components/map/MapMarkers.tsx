
import { useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapMarker } from '@/types/service-area';
import { Marker } from '@react-google-maps/api';

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
    markers.filter(marker => {
      // Filter out invalid markers
      return typeof marker.lat === 'number' && !isNaN(marker.lat) && 
             typeof marker.lng === 'number' && !isNaN(marker.lng);
    }).map((marker, index) => {
      const position = { lat: marker.lat, lng: marker.lng };
      const isHovered = hoveredMarker === marker.slug;
      
      return (
        <Marker
          key={`marker-${marker.slug || ''}-${index}`}
          position={position}
          title={marker.title}
          onClick={() => handleMarkerClick(marker.slug)}
          animation={isHovered ? window.google?.maps?.Animation?.BOUNCE : undefined}
          options={{
            optimized: false,
            visible: true,
            zIndex: isHovered ? 999 : 1
          }}
        />
      );
    }), [markers, hoveredMarker, handleMarkerClick]);

  return <>{renderedMarkers}</>;
};

export default MapMarkers;
