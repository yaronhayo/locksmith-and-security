import { useState, useEffect } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';

interface MapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  markers?: Array<{ lat: number; lng: number; title?: string }>;
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
  center = { lat: 40.7828, lng: -74.0297 }, // Default to North Bergen
  zoom = 12, // Adjusted zoom to show more area
  markers = serviceAreaLocations // Use service area locations as default markers
}: MapProps) => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const mapContainerStyle = {
    width: '100%',
    height: '100%'
  };

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
    if (typeof window === 'undefined' || !window.google) {
      console.log('Google Maps not yet loaded');
      return null;
    }

    try {
      return {
        url: `data:image/svg+xml;utf-8,${encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="#1E3A8A" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        `)}`,
        scaledSize: new window.google.maps.Size(36, 36),
        anchor: new window.google.maps.Point(18, 36),
      };
    } catch (error) {
      console.error('Error creating marker icon:', error);
      return null;
    }
  };

  const onLoad = (map: google.maps.Map) => {
    console.log('Map loaded successfully');
    setMap(map);
    setIsLoaded(true);

    // Fit bounds to show all markers
    if (markers.length > 1) {
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach(marker => {
        bounds.extend({ lat: marker.lat, lng: marker.lng });
      });
      map.fitBounds(bounds);
    }
  };

  const onUnmount = () => {
    setMap(null);
    setIsLoaded(false);
  };

  const handleMarkerClick = (marker: any) => {
    if (marker.slug) {
      navigate(`/service-areas/${marker.slug}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <LoadScript 
        googleMapsApiKey="AIzaSyA836rCuy6AkrT3L2yT_rfxUPUphH_b6lw"
        onLoad={() => console.log("Script loaded")}
        onError={(error) => console.error('Script loading error:', error)}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
          options={options}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {isLoaded && markers.map((marker, index) => (
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