
import { useMemo, useCallback } from "react";
import { LoadScript, Libraries, GoogleMap as GoogleMapComponent } from "@react-google-maps/api";
import { useMapConfig } from "@/hooks/useMap";
import MapError from "./MapError";
import MapLoader from "./MapLoader";
import MapMarkers from "./MapMarkers";
import { MapErrorBoundary } from "./MapErrorBoundary";
import { MapProps } from "@/types/map";

const libraries: Libraries = ['places'];

const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  gestureHandling: 'cooperative'
} as const;

const mapContainerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "0.5rem"
} as const;

const GoogleMap = ({
  markers = [],
  highlightedMarker = null,
  showAllMarkers = true,
  zoom = 12,
  center = { lat: 40.7795, lng: -74.0324 },
  onClick
}: MapProps) => {
  const { apiKey, loadError, isLoading, fetchApiKey } = useMapConfig();

  // Memoize center to prevent unnecessary re-renders
  const mapCenter = useMemo(() => center, [center.lat, center.lng]);

  // Handle map load error
  const handleLoadError = useCallback((error: Error) => {
    console.error('Google Maps load error:', error);
    // Attempt to refresh the API key
    fetchApiKey();
  }, [fetchApiKey]);

  // Handle successful map load
  const handleLoad = useCallback(() => {
    console.log('Google Maps loaded successfully');
  }, []);

  if (loadError) {
    console.error('Map config load error:', loadError);
    return (
      <MapError 
        error={loadError} 
        onRetry={fetchApiKey} 
        isRetrying={isLoading}
        retryCount={0}
      />
    );
  }

  if (!apiKey || isLoading) {
    return <MapLoader />;
  }

  const visibleMarkers = showAllMarkers ? markers : markers.filter(m => m.slug === highlightedMarker);

  return (
    <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-md">
      <MapErrorBoundary>
        <LoadScript 
          googleMapsApiKey={apiKey}
          libraries={libraries}
          onLoad={handleLoad}
          onError={handleLoadError}
        >
          <GoogleMapComponent
            mapContainerStyle={mapContainerStyle}
            center={mapCenter}
            zoom={zoom}
            options={mapOptions}
            onClick={onClick}
          >
            {visibleMarkers.length > 0 && (
              <MapMarkers 
                markers={visibleMarkers} 
                hoveredMarker={highlightedMarker} 
              />
            )}
          </GoogleMapComponent>
        </LoadScript>
      </MapErrorBoundary>
    </div>
  );
};

export default GoogleMap;
