import { useState, useEffect, useMemo } from "react";
import { GoogleMap, LoadScript, Libraries } from "@react-google-maps/api";
import { useMapConfig } from "./map/useMapConfig";
import MapError from "./map/MapError";
import MapLoader from "./map/MapLoader";
import MapMarkers from "./map/MapMarkers";
import { MapLocation } from "@/types/map";

// Constants defined outside component to prevent recreation
const MAP_LIBRARIES: Libraries = ["places", "marker"] as const;

const MAP_OPTIONS = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  gestureHandling: 'cooperative'
} as const;

const MAP_CONTAINER_STYLE = {
  width: "100%",
  height: "400px",
  borderRadius: "0.5rem"
} as const;

interface MapProps {
  markers?: MapLocation[];
  hoveredMarker?: string | null;
  center?: { lat: number; lng: number };
  zoom?: number;
  onClick?: (e: google.maps.MapMouseEvent) => void;
}

const Map = ({
  markers = [],
  center = { lat: 40.7795, lng: -74.0324 },
  zoom = 12,
  hoveredMarker = null,
  onClick,
}: MapProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const { apiKey, loadError, isRetrying, retryCount, fetchApiKey } = useMapConfig();

  // Memoize the center to prevent unnecessary re-renders
  const mapCenter = useMemo(() => center, [center.lat, center.lng]);

  // Memoize the LoadScript options
  const loadScriptProps = useMemo(() => ({
    googleMapsApiKey: apiKey || '',
    libraries: MAP_LIBRARIES,
  }), [apiKey]);

  useEffect(() => {
    if (map) {
      map.setCenter(mapCenter);
      map.setZoom(zoom);
    }
  }, [map, mapCenter, zoom]);

  const handleScriptLoad = () => {
    console.log('Google Maps script loaded successfully');
    setIsLoaded(true);
  };

  const handleScriptError = (err: Error) => {
    console.error('Error loading Google Maps script:', err);
  };

  const handleMapLoad = (map: google.maps.Map) => {
    console.log('Map instance loaded successfully');
    setMap(map);
  };

  if (loadError) {
    console.error('Map load error:', loadError);
    return (
      <MapError 
        error={loadError} 
        onRetry={fetchApiKey} 
        isRetrying={isRetrying}
        retryCount={retryCount}
      />
    );
  }

  if (!apiKey) {
    console.log('Waiting for API key...');
    return <MapLoader />;
  }

  return (
    <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-md">
      <LoadScript 
        {...loadScriptProps}
        onLoad={handleScriptLoad}
        onError={handleScriptError}
      >
        <GoogleMap
          mapContainerStyle={MAP_CONTAINER_STYLE}
          center={mapCenter}
          zoom={zoom}
          options={MAP_OPTIONS}
          onClick={onClick}
          onLoad={handleMapLoad}
        >
          {isLoaded && markers && markers.length > 0 && (
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