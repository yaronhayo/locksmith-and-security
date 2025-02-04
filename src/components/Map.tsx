import { useState, useEffect, useMemo, useCallback } from 'react';
import { LoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

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
  const [scriptLoaded, setScriptLoaded] = useState(false);

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

  const getMarkerIcon = useCallback((isHovered: boolean) => ({
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: isHovered ? '#2563EB' : '#1E3A8A',
    fillOpacity: 1,
    strokeWeight: isHovered ? 2 : 0,
    strokeColor: '#ffffff',
    scale: isHovered ? 12 : 10
  }), []);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMapInstance(map);
    setIsLoaded(true);
    setScriptLoaded(true);

    if (markers.length > 1) {
      const bounds = new google.maps.LatLngBounds();
      markers.forEach(marker => {
        bounds.extend({ lat: marker.lat, lng: marker.lng });
      });
      map.fitBounds(bounds);
    }
  }, [markers]);

  const onLoadError = useCallback((error: Error) => {
    console.error('Error loading Google Maps:', error);
    setLoadError(error.message);
    setScriptLoaded(false);
  }, []);

  const handleMarkerClick = useCallback((marker: any) => {
    if (marker.slug) {
      navigate(`/service-areas/${marker.slug}`);
      window.scrollTo(0, 0);
    }
  }, [navigate]);

  if (loadError) {
    return (
      <Alert variant="destructive" className="my-4">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Error loading map: {loadError}. Please refresh the page or try again later.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div 
      className="relative w-full rounded-lg overflow-hidden shadow-lg" 
      style={{ height: mapHeight }}
      role="region" 
      aria-label="Service areas map"
    >
      <LoadScript 
        googleMapsApiKey="AIzaSyA836rCuy6AkrT3L2yT_rfxUPUphH_b6lw"
        onLoad={() => setScriptLoaded(true)}
        onError={onLoadError}
        loadingElement={
          <div className="w-full h-full flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-600">Loading map...</p>
            </div>
          </div>
        }
      >
        {scriptLoaded && (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={zoom}
            options={options}
            onLoad={onLoad}
          >
            {isLoaded && markers.map((marker, index) => (
              <MarkerF
                key={`${marker.slug}-${index}`}
                position={{ lat: marker.lat, lng: marker.lng }}
                icon={getMarkerIcon(hoveredMarker === marker.slug)}
                title={marker.title}
                onClick={() => handleMarkerClick(marker)}
                animation={hoveredMarker === marker.slug ? google.maps.Animation.BOUNCE : undefined}
              />
            ))}
          </GoogleMap>
        )}
      </LoadScript>
    </div>
  );
};

export default Map;