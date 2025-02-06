import { Marker } from '@react-google-maps/api';
import { MapLocation } from '@/types/map';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface MapMarkersProps {
  markers: MapLocation[];
  hoveredMarker: string | null;
}

const MapMarkers = ({ markers, hoveredMarker }: MapMarkersProps) => {
  const navigate = useNavigate();

  console.log('MapMarkers render:', { markers, hoveredMarker });

  const handleMarkerClick = (slug?: string) => {
    if (slug) {
      navigate(`/service-areas/${slug}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {markers.map((marker, index) => (
        <Marker
          key={`${marker.slug || ''}-${index}`}
          position={{ lat: marker.lat, lng: marker.lng }}
          title={marker.title}
          onClick={() => handleMarkerClick(marker.slug)}
          animation={
            hoveredMarker === marker.slug
              ? window.google.maps.Animation.BOUNCE
              : undefined
          }
          icon={{
            url: `data:image/svg+xml,${encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${
                hoveredMarker === marker.slug ? '#0066FF' : '#2563eb'
              }" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            `)}`,
            scaledSize: new window.google.maps.Size(32, 32),
            anchor: new window.google.maps.Point(16, 32),
          }}
        />
      ))}
    </>
  );
};

export default MapMarkers;