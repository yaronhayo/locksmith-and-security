
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
      console.log('Marker clicked, navigating to:', `/service-areas/${slug}`);
      navigate(`/service-areas/${slug}`);
    }
  }, [navigate]);

  const renderedMarkers = useMemo(() => 
    markers.map((marker, index) => {
      if (!marker || typeof marker.lat !== 'number' || typeof marker.lng !== 'number') {
        console.error('Invalid marker data:', marker);
        return null;
      }
      
      const position = { lat: marker.lat, lng: marker.lng };
      const isHovered = hoveredMarker === marker.slug;
      
      console.log(`Rendering marker for ${marker.title || 'Unnamed location'} at ${marker.lat},${marker.lng}`);
      
      return (
        <Marker
          key={`marker-${marker.slug || ''}-${index}`}
          position={position}
          title={marker.title}
          onClick={() => handleMarkerClick(marker.slug)}
          animation={isHovered && window.google?.maps?.Animation ? window.google.maps.Animation.BOUNCE : undefined}
          options={{
            optimized: true,
            visible: true,
            zIndex: isHovered ? 999 : 1
          }}
        />
      );
    }).filter(Boolean), [markers, hoveredMarker, handleMarkerClick]);

  return <>{renderedMarkers}</>;
};

export default MapMarkers;
