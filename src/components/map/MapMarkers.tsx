
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
      
      return (
        <Marker
          key={`marker-${marker.slug || ''}-${index}`}
          position={position}
          title={marker.title}
          onClick={() => handleMarkerClick(marker.slug)}
          animation={isHovered && window.google?.maps ? window.google.maps.Animation.BOUNCE : undefined}
          icon={{
            url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='44' viewBox='0 0 24 24' fill='none' stroke='%23000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'%3E%3C/path%3E%3Ccircle cx='12' cy='10' r='3'%3E%3C/circle%3E%3C/svg%3E",
            scaledSize: window.google?.maps ? new window.google.maps.Size(32, 44) : undefined,
            anchor: window.google?.maps ? new window.google.maps.Point(16, 44) : undefined,
          }}
        />
      );
    }), [markers, hoveredMarker, handleMarkerClick]);

  // Log for debugging
  console.log('Rendering markers:', markers.length);

  return <>{renderedMarkers}</>;
};

export default MapMarkers;
