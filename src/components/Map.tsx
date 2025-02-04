import { useState, useEffect, useMemo, useCallback } from 'react';
import { LoadScript, GoogleMap } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import MapMarker from './map/MapMarker';
import MapLoadingState from './map/MapLoadingState';
import MapErrorState from './map/MapErrorState';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

interface MapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  markers?: ReadonlyArray<{ lat: number; lng: number; title?: string; slug?: string }>;
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
] as const;

const GOOGLE_MAPS_API_KEY = "AIzaSyBWC79s2TOCQPRUKSlG8J-yYfQqeKsPuVk";

const Map = ({ 
  center = { lat: 40.7828, lng: -74.0297 },
  zoom = 12,
  markers = serviceAreaLocations,
  hoveredMarker = null
}: MapProps) => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const mapHeight = useMemo(() => {
    if (typeof window === 'undefined') return '600px';
    if (window.innerWidth < 640) return '400px';
    if (window.innerWidth < 768) return '500px';
    return '600px';
  }, []);

  const mapContainerStyle = useMemo(() => ({
    width: '100%',
    height: mapHeight,
    borderRadius: '0.5rem'
  }), [mapHeight]);

  const options = useMemo(() => ({
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
  }), []);

  const getMarkerIcon = useCallback((isHovered: boolean) => ({
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: isHovered ? '#2563EB' : '#1E3A8A',
    fillOpacity: 1,
    strokeWeight: isHovered ? 2 : 0,
    strokeColor: '#ffffff',
    scale: isHovered ? 12 : 10
  }), []);

  const handleMarkerClick = useCallback((marker: typeof markers[number]) => {
    if (marker.slug) {
      navigate(`/service-areas/${marker.slug}`);
      window.scrollTo(0, 0);
    }
  }, [navigate]);

  const handleRetry = useCallback(() => {
    setLoadError(null);
    setRetryCount(prev => prev + 1);
  }, []);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMapInstance(map);
    setIsLoaded(true);
    console.log('Google Maps loaded successfully');

    if (markers.length > 1) {
      const bounds = new google.maps.LatLngBounds();
      markers.forEach(marker => {
        bounds.extend({ lat: marker.lat, lng: marker.lng });
      });
      map.fitBounds(bounds);
    }
  }, [markers]);

  const handleLoadError = useCallback((error: Error) => {
    console.error('Google Maps loading error:', error);
    setLoadError(error.message);
  }, []);

  if (loadError) {
    return <MapErrorState error={loadError} onRetry={handleRetry} />;
  }

  if (!isLoaded) {
    return <MapLoadingState />;
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div 
        className="relative w-full rounded-lg overflow-hidden shadow-lg" 
        style={{ height: mapHeight }}
        role="region" 
        aria-label="Service areas map"
      >
        <LoadScript 
          googleMapsApiKey={GOOGLE_MAPS_API_KEY}
          onError={handleLoadError}
          onLoad={() => console.log('Google Maps script loaded')}
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={zoom}
            options={options}
            onLoad={onLoad}
          >
            {isLoaded && markers.map((marker, index) => (
              <MapMarker
                key={`${marker.slug}-${index}`}
                lat={marker.lat}
                lng={marker.lng}
                title={marker.title}
                slug={marker.slug}
                isHovered={hoveredMarker === marker.slug}
                onClick={() => handleMarkerClick(marker)}
                getMarkerIcon={getMarkerIcon}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </ErrorBoundary>
  );
};

export default Map;