import { useState, useEffect } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

interface MapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  markers?: Array<{ lat: number; lng: number; title?: string }>;
}

const Map = ({ 
  center = { lat: 40.7828, lng: -74.0297 }, // Default to North Bergen
  zoom = 13,
  markers = [{ lat: 40.7828, lng: -74.0297, title: "Locksmith & Security LLC" }]
}: MapProps) => {
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
  };

  const onUnmount = () => {
    setMap(null);
    setIsLoaded(false);
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
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;