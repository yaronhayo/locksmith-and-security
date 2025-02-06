import { Marker } from '@react-google-maps/api';
import { MapLocation } from '@/types/map';
import { useNavigate } from 'react-router-dom';

interface MapMarkersProps {
  markers: MapLocation[];
  hoveredMarker: string | null;
}

const MapMarkers = ({ markers, hoveredMarker }: MapMarkersProps) => {
  const navigate = useNavigate();

  console.log('MapMarkers render:', { 
    markersCount: markers.length, 
    hoveredMarker,
    markerSlugs: markers.map(m => m.slug).join(', ')
  });

  const handleMarkerClick = (slug?: string) => {
    if (slug) {
      console.log('Marker clicked:', slug);
      navigate(`/service-areas/${slug}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {markers.map((marker, index) => {
        const position = { lat: marker.lat, lng: marker.lng };
        
        console.log('Rendering marker:', { 
          index, 
          title: marker.title, 
          position,
          isHovered: hoveredMarker === marker.slug 
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
      })}
    </>
  );
};

export default MapMarkers;