
import { Marker } from '@react-google-maps/api';
import { MapLocation } from '@/types/map';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

interface MapMarkersProps {
  markers: MapLocation[];
  hoveredMarker: string | null;
}

const MapMarkers = ({ markers, hoveredMarker }: MapMarkersProps) => {
  const navigate = useNavigate();

  console.log('MapMarkers render:', { 
    markerCount: markers.length,
    markers: markers,
    hoveredMarker 
  });

  const handleMarkerClick = (slug?: string) => {
    if (slug) {
      navigate(`/service-areas/${slug}`);
      window.scrollTo(0, 0);
    }
  };

  // Memoize markers to prevent unnecessary re-renders
  const renderedMarkers = useMemo(() => 
    markers.map((marker, index) => {
      const position = { lat: marker.lat, lng: marker.lng };
      
      console.log('Rendering marker:', { 
        position, 
        title: marker.title,
        slug: marker.slug 
      });

      return (
        <Marker
          key={`${marker.slug || ''}-${index}`}
          position={position}
          title={marker.title}
          onClick={() => handleMarkerClick(marker.slug)}
          animation={
            hoveredMarker === marker.slug
              ? google.maps.Animation.BOUNCE
              : undefined
          }
        />
      );
    }), [markers, hoveredMarker, navigate]);

  return <>{renderedMarkers}</>;
};

export default MapMarkers;
