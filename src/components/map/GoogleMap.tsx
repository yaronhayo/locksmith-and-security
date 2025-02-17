
import { useMemo, useCallback, useRef } from "react";
import { GoogleMap as GoogleMapComponent, LoadScript, LoadScriptNext } from "@react-google-maps/api";
import { useMapConfig } from "@/hooks/useMap";
import MapError from "./MapError";
import MapLoader from "./MapLoader";
import MapMarkers from "./MapMarkers";
import { MapMarker } from "@/types/service-area";

const libraries: ("places")[] = ['places'];

const mapOptions = {
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  gestureHandling: 'cooperative'
};

interface GoogleMapProps {
  markers?: MapMarker[];
  highlightedMarker?: string | null;
  showAllMarkers?: boolean;
  zoom?: number;
  center?: { lat: number; lng: number };
  onClick?: (e: google.maps.MapMouseEvent) => void;
}

const containerStyle = {
  width: '100%',
  height: '100%'
};

const GoogleMap = ({
  markers = [],
  highlightedMarker = null,
  showAllMarkers = true,
  zoom = 12,
  center = { lat: 40.7795, lng: -74.0324 },
  onClick
}: GoogleMapProps) => {
  const { data: apiKey, error: apiKeyError, isLoading } = useMapConfig();
  const scriptLoadingAttempted = useRef(false);

  const visibleMarkers = useMemo(() => 
    showAllMarkers ? markers : markers.filter(m => m.slug === highlightedMarker),
    [markers, showAllMarkers, highlightedMarker]
  );

  const onLoadCallback = useCallback(() => {
    console.log('Map loaded successfully');
  }, []);

  const onUnmountCallback = useCallback(() => {
    scriptLoadingAttempted.current = false;
  }, []);

  if (isLoading) return <MapLoader />;
  if (apiKeyError) return <MapError error={apiKeyError.message} />;
  if (!apiKey) return <MapError error="Google Maps API key not found" />;

  // Check if Google Maps script is already loaded
  if (window.google?.maps && !scriptLoadingAttempted.current) {
    return (
      <div className="w-full h-full relative">
        <GoogleMapComponent
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          options={mapOptions}
          onClick={onClick}
          onLoad={onLoadCallback}
          onUnmount={onUnmountCallback}
        >
          {visibleMarkers.map((marker, index) => (
            <MapMarkers
              key={`${marker.slug || ''}-${index}`}
              markers={[marker]}
              hoveredMarker={highlightedMarker}
            />
          ))}
        </GoogleMapComponent>
      </div>
    );
  }

  scriptLoadingAttempted.current = true;

  return (
    <div className="w-full h-full relative">
      <LoadScriptNext 
        googleMapsApiKey={apiKey} 
        libraries={libraries}
        loadingElement={<MapLoader />}
      >
        <GoogleMapComponent
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          options={mapOptions}
          onClick={onClick}
          onLoad={onLoadCallback}
          onUnmount={onUnmountCallback}
        >
          {visibleMarkers.map((marker, index) => (
            <MapMarkers
              key={`${marker.slug || ''}-${index}`}
              markers={[marker]}
              hoveredMarker={highlightedMarker}
            />
          ))}
        </GoogleMapComponent>
      </LoadScriptNext>
    </div>
  );
};

export default GoogleMap;
