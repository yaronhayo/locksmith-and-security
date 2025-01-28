import { useState, useEffect } from 'react';
import { LoadScript } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import MapContainer from './map/MapContainer';
import MapMarker from './map/MapMarker';
import MapError from './map/MapError';

interface MapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  markers?: Array<{ lat: number; lng: number; title?: string; slug?: string }>;
  hoveredMarker?: string | null;
}

const serviceAreaLocations = [
  { lat: 40.7828, lng: -74.0297, title: "North Bergen", slug: "north-bergen" },
  { lat: 40.7282, lng: -74.0776, title: "Jersey City", slug: "jersey-city" },
  { lat: 40.7795, lng: -74.0246, title: "Union City", slug: "union-city" },
  { lat: 40.7857, lng: -74.0143, title: "West New York", slug: "west-new-york" },
  { lat: 40.7799, lng: -74.0566, title: "Secaucus", slug: "secaucus" },
  { lat: 40.7684, lng: -74.0287, title: "Weehawken", slug: "weehawken" },
  { lat: 40.7453, lng: -74.0279, title: "Hoboken", slug: "hoboken" },
  { lat: 40.7920, lng: -74.0037, title: "Guttenberg", slug: "guttenberg" }
];

const Map = ({ 
  center = { lat: 40.7828, lng: -74.0297 },
  zoom = 12,
  markers = serviceAreaLocations,
  hoveredMarker = null
}: MapProps) => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const [mapHeight, setMapHeight] = useState('600px');
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    const updateMapHeight = () => {
      if (window.innerWidth < 640) {
        setMapHeight('400px');
      } else if (window.innerWidth < 768) {
        setMapHeight('500px');
      } else {
        setMapHeight('600px');
      }
    };

    updateMapHeight();
    window.addEventListener('resize', updateMapHeight);
    return () => window.removeEventListener('resize', updateMapHeight);
  }, []);

  const onLoad = (map: google.maps.Map) => {
    setMapInstance(map);
    setIsLoaded(true);

    if (markers.length > 1) {
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach(marker => {
        bounds.extend({ lat: marker.lat, lng: marker.lng });
      });
      map.fitBounds(bounds);
    }
  };

  const handleMarkerClick = (marker: any) => {
    if (marker.slug) {
      navigate(`/service-areas/${marker.slug}`);
      window.scrollTo(0, 0);
    }
  };

  if (loadError) {
    return <MapError error={loadError} />;
  }

  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ height: mapHeight }}>
      <LoadScript 
        googleMapsApiKey="AIzaSyA836rCuy6AkrT3L2yT_rfxUPUphH_b6lw"
        onError={(error: Error) => setLoadError(error.message)}
      >
        <MapContainer
          center={center}
          zoom={zoom}
          onLoad={onLoad}
        >
          {isLoaded && markers.map((marker, index) => (
            <MapMarker
              key={index}
              lat={marker.lat}
              lng={marker.lng}
              title={marker.title}
              slug={marker.slug}
              isHovered={hoveredMarker === marker.slug}
              onClick={() => handleMarkerClick(marker)}
            />
          ))}
        </MapContainer>
      </LoadScript>
    </div>
  );
};

export default Map;