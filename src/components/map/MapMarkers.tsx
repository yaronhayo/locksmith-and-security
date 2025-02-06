import { Marker } from '@react-google-maps/api';
import { MapLocation } from '@/types/map';
import { useNavigate } from 'react-router-dom';

interface MapMarkersProps {
  markers: MapLocation[];
  hoveredMarker: string | null;
}

const MapMarkers = ({ markers, hoveredMarker }: MapMarkersProps) => {
  const navigate = useNavigate();

  const handleMarkerClick = (slug?: string) => {
    if (slug) {
      navigate(`/service-areas/${slug}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {markers.map((marker, index) => {
        console.log('Rendering marker:', marker); // Debug log
        return (
          <Marker
            key={`${marker.slug || ''}-${index}`}
            position={{ lat: marker.lat, lng: marker.lng }}
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