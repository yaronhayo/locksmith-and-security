
import { Marker } from '@react-google-maps/api';
import { MapMarker } from '@/types/service-area';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

interface MapMarkersProps {
  markers: MapMarker[];
  hoveredMarker: string | null;
}

const MapMarkers = ({ markers, hoveredMarker }: MapMarkersProps) => {
  const navigate = useNavigate();

  const handleMarkerClick = (slug?: string) => {
    if (slug) {
      navigate(`/service-areas/${slug}`);
    }
  };

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
        />
      );
    }), [markers, hoveredMarker, navigate]);

  return <>{renderedMarkers}</>;
};

export default MapMarkers;
