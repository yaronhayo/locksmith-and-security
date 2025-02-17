
import { useMemo } from "react";
import { GoogleMap as GoogleMapComponent } from "@react-google-maps/api";
import { useMapConfig } from "@/hooks/useMap";
import MapError from "./MapError";
import MapLoader from "./MapLoader";
import MapMarkers from "./MapMarkers";
import { MapErrorBoundary } from "./MapErrorBoundary";
import { MapProps } from "@/types/map";

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
  const { loadError, isLoading, isReady, fetchApiKey } = useMapConfig();

  // Memoize center to prevent unnecessary re-renders
  const mapCenter = useMemo(() => center, [center.lat, center.lng]);

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

  if (!isReady || isLoading) {
    return <MapLoader />;
  }

  const visibleMarkers = showAllMarkers ? markers : markers.filter(m => m.slug === highlightedMarker);

  return (
    <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-md">
      <MapErrorBoundary>
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
      </MapErrorBoundary>
    </div>
  );
};

export default GoogleMap;
