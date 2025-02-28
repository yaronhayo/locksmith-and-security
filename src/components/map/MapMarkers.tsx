
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
    markers.map((marker, index) => {
      const position = { lat: marker.lat, lng: marker.lng };
      const isHovered = hoveredMarker === marker.slug;
      
      // Custom marker label options for better visibility
      const label = {
        text: marker.title,
        color: '#222222', // Dark text color for better contrast
        fontWeight: 'bold',
        fontSize: '14px',
        className: 'marker-label'
      };
      
      return (
        <Marker
          key={`${marker.slug || ''}-${index}`}
          position={position}
          title={marker.title}
          label={label}
          onClick={() => handleMarkerClick(marker.slug)}
          animation={isHovered ? google.maps.Animation.BOUNCE : undefined}
        />
      );
    }), [markers, hoveredMarker, handleMarkerClick]);

  return <>{renderedMarkers}</>;
};

export default MapMarkers;
