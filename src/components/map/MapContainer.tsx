import { GoogleMap } from '@react-google-maps/api';
import { useCallback } from 'react';

interface MapContainerProps {
  center: { lat: number; lng: number };
  zoom: number;
  onLoad: (map: google.maps.Map) => void;
  children: React.ReactNode;
}

const MapContainer = ({ center, zoom, onLoad, children }: MapContainerProps) => {
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

  const handleLoad = useCallback((map: google.maps.Map) => {
    onLoad(map);
  }, [onLoad]);

  return (
    <GoogleMap
      mapContainerStyle={{
        width: '100%',
        height: '100%',
        borderRadius: '0.5rem'
      }}
      center={center}
      zoom={zoom}
      options={options}
      onLoad={handleLoad}
    >
      {children}
    </GoogleMap>
  );
};

export default MapContainer;