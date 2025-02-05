import { useState } from 'react';
import { LoadScript, GoogleMap } from '@react-google-maps/api';
import { defaultMapCenter, defaultMapZoom, mapStyles } from '@/config/constants';
import { MapLocation } from '@/types/map';
import MapError from './map/MapError';
import MapLoader from './map/MapLoader';
import MapMarkers from './map/MapMarkers';
import { useMapConfig } from './map/useMapConfig';

interface MapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  markers?: MapLocation[];
  hoveredMarker?: string | null;
}

const mapContainerStyle = {
  width: '100%',
  height: '600px',
  borderRadius: '0.5rem'
};

const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: true,
  scaleControl: true,
  streetViewControl: true,
  rotateControl: true,
  fullscreenControl: true,
  styles: mapStyles
};

const Map = ({ 
  center = defaultMapCenter,
  zoom = defaultMapZoom,
  markers = [],
  hoveredMarker = null
}: MapProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { apiKey, loadError, isRetrying, fetchApiKey } = useMapConfig();

  if (loadError) {
    return <MapError error={loadError} onRetry={fetchApiKey} isRetrying={isRetrying} />;
  }

  if (!apiKey) {
    return <MapLoader />;
  }

  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-lg h-[600px]">
      <LoadScript 
        googleMapsApiKey={apiKey}
        onLoad={() => setIsLoaded(true)}
        onError={() => setLoadError('Failed to load Google Maps')}
      >
        {!isLoaded && <MapLoader />}
        
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
          options={mapOptions}
          onLoad={() => setIsLoaded(true)}
        >
          {isLoaded && (
            <MapMarkers 
              markers={markers} 
              hoveredMarker={hoveredMarker} 
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;