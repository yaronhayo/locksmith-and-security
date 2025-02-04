import { useState, useCallback } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from "lucide-react";
import { GOOGLE_MAPS_API_KEY, defaultMapCenter, defaultMapZoom, mapStyles } from '@/config/constants';
import { MapLocation } from '@/types/map';

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
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const handleMarkerClick = useCallback((slug?: string) => {
    if (slug) {
      navigate(`/service-areas/${slug}`);
      window.scrollTo(0, 0);
    }
  }, [navigate]);

  if (!GOOGLE_MAPS_API_KEY) {
    console.error('Google Maps API key is missing');
    return (
      <div className="w-full h-[600px] flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-center space-y-4">
          <p className="text-red-500">Error: Google Maps API key is not configured</p>
          <p className="text-sm text-gray-600">Please check your environment variables</p>
        </div>
      </div>
    );
  }

  if (loadError) {
    console.error('Map loading error:', loadError);
    return (
      <div className="w-full h-[600px] flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-center space-y-4">
          <p className="text-red-500">Error loading map: {loadError}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-lg h-[600px]">
      <LoadScript 
        googleMapsApiKey={GOOGLE_MAPS_API_KEY}
        onError={(error) => {
          console.error('LoadScript error:', error);
          setLoadError(error.message);
        }}
        onLoad={() => {
          console.log('Google Maps script loaded successfully');
        }}
        libraries={["places"]}
      >
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
        
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
          options={mapOptions}
          onLoad={() => {
            console.log('Map loaded successfully');
            setIsLoaded(true);
          }}
        >
          {isLoaded && markers.map((marker, index) => (
            <Marker
              key={`${marker.slug}-${index}`}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.title}
              onClick={() => handleMarkerClick(marker.slug)}
              animation={hoveredMarker === marker.slug ? google.maps.Animation.BOUNCE : undefined}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;