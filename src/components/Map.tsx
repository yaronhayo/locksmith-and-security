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

const getMapHeight = () => {
  if (typeof window === 'undefined') return '600px';
  return window.innerWidth < 640 ? '400px' : window.innerWidth < 768 ? '500px' : '600px';
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

  const getMarkerIcon = useCallback((isHovered: boolean) => ({
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: isHovered ? '#2563EB' : '#1E3A8A',
    fillOpacity: 1,
    strokeWeight: isHovered ? 2 : 0,
    strokeColor: '#ffffff',
    scale: isHovered ? 12 : 10
  }), []);

  if (loadError) {
    return (
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-center space-y-4">
          <p className="text-red-500">Error loading map: {loadError}</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full rounded-lg overflow-hidden shadow-lg" 
      style={{ height: getMapHeight() }}
      role="region" 
      aria-label="Service areas map"
    >
      <LoadScript 
        googleMapsApiKey={GOOGLE_MAPS_API_KEY}
        onError={(error) => setLoadError(error.message)}
      >
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
        
        <GoogleMap
          mapContainerStyle={{
            width: '100%',
            height: getMapHeight(),
            borderRadius: '0.5rem'
          }}
          center={center}
          zoom={zoom}
          options={{
            ...mapOptions,
            backgroundColor: '#e5e7eb'
          }}
          onLoad={() => setIsLoaded(true)}
        >
          {isLoaded && markers.map((marker, index) => (
            <Marker
              key={`${marker.slug}-${index}`}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={getMarkerIcon(hoveredMarker === marker.slug)}
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