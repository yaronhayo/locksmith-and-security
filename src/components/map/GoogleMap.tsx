
import { useMemo, useCallback, lazy, Suspense } from "react";
import { useMapConfig } from "@/hooks/useMap";
import MapError from "./MapError";
import MapLoader from "./MapLoader";
import { MapMarker } from "@/types/service-area";
import { mapPerformance } from "@/utils/performanceMonitoring";

// Lazy load the Google Maps components
const GoogleMapComponent = lazy(() => import('@react-google-maps/api').then(module => ({
  default: module.GoogleMap
})));
const LoadScript = lazy(() => import('@react-google-maps/api').then(module => ({
  default: module.LoadScript
})));
const MapMarkers = lazy(() => import('./MapMarkers'));

const libraries: ("places")[] = ['places'];

const mapOptions = {
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  gestureHandling: 'cooperative'
};

const containerStyle = {
  width: '100%',
  height: '100%'
};

interface GoogleMapProps {
  markers?: MapMarker[];
  highlightedMarker?: string | null;
  showAllMarkers?: boolean;
  zoom?: number;
  center?: { lat: number; lng: number };
  onClick?: (e: google.maps.MapMouseEvent) => void;
}

const GoogleMap = ({
  markers = [],
  highlightedMarker = null,
  showAllMarkers = true,
  zoom = 12,
  center = { lat: 40.7795, lng: -74.0324 },
  onClick
}: GoogleMapProps) => {
  const { data: apiKey, error: apiKeyError, isLoading } = useMapConfig();

  const visibleMarkers = useMemo(() => 
    showAllMarkers ? markers : markers.filter(m => m.slug === highlightedMarker),
    [markers, showAllMarkers, highlightedMarker]
  );

  const onLoadCallback = useCallback(() => {
    mapPerformance.trackInstanceLoad(performance.now());
  }, []);

  const onScriptLoad = useCallback(() => {
    mapPerformance.trackScriptLoad(performance.now());
  }, []);

  if (isLoading) return <MapLoader />;
  if (apiKeyError) return <MapError error={apiKeyError.message} />;
  if (!apiKey) return <MapError error="Google Maps API key not found" />;

  return (
    <div className="w-full h-full relative">
      <Suspense fallback={<MapLoader />}>
        <LoadScript 
          googleMapsApiKey={apiKey} 
          libraries={libraries}
          onLoad={onScriptLoad}
        >
          <GoogleMapComponent
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
            options={mapOptions}
            onClick={onClick}
            onLoad={onLoadCallback}
          >
            {visibleMarkers.map((marker, index) => (
              <MapMarkers
                key={`${marker.slug || ''}-${index}`}
                markers={[marker]}
                hoveredMarker={highlightedMarker}
              />
            ))}
          </GoogleMapComponent>
        </LoadScript>
      </Suspense>
    </div>
  );
};

export default GoogleMap;
