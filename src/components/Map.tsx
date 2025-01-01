import { useState, useEffect } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from "lucide-react";

interface MapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  markers?: Array<{ lat: number; lng: number; title?: string; slug?: string }>;
}

// Service area coordinates
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
  markers = serviceAreaLocations
}: MapProps) => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const [mapHeight, setMapHeight] = useState('600px');

  const mapContainerStyle = {
    width: '100%',
    height: mapHeight,
    borderRadius: '0.5rem'
  };

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

  const options = {
    disableDefaultUI: false,
    zoomControl: true,
    scrollwheel: true,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      }
    ]
  };

  const getMarkerIcon = () => {
    return {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: '#1E3A8A',
      fillOpacity: 1,
      strokeWeight: 0,
      scale: 10
    };
  };

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

  if (!window.google) {
    return (
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ height: mapHeight }}>
      <LoadScript googleMapsApiKey="AIzaSyA836rCuy6AkrT3L2yT_rfxUPUphH_b6lw">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
          options={options}
          onLoad={onLoad}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={getMarkerIcon()}
              title={marker.title}
              onClick={() => handleMarkerClick(marker)}
              cursor="pointer"
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;