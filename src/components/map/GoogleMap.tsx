
import { useMemo } from "react";
import { LoadScript, Libraries } from "@react-google-maps/api";
import { useMapConfig } from "@/hooks/useMap";
import MapError from "./MapError";
import MapLoader from "./MapLoader";
import MapContainer from "./MapContainer";
import { MapErrorBoundary } from "./MapErrorBoundary";
import { MapMarker, MapProps } from "@/types/service-area";

// Define libraries outside component to prevent recreation
const libraries: Libraries = ['places'];

const GoogleMap = ({
  markers = [],
  highlightedMarker = null,
  showAllMarkers = true,
  zoom = 12,
  center = { lat: 40.7795, lng: -74.0324 },
  onClick
}: MapProps) => {
  const { apiKey, loadError, isRetrying, retryCount, fetchApiKey } = useMapConfig();

  // Memoize LoadScript props
  const loadScriptProps = useMemo(() => ({
    googleMapsApiKey: apiKey || '',
    libraries,
    language: 'en',
    region: 'US',
    loading: 'async'
  }), [apiKey]);

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

  const visibleMarkers = showAllMarkers ? markers : markers.filter(m => m.slug === highlightedMarker);

  return (
    <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-md">
      <MapErrorBoundary>
        <LoadScript {...loadScriptProps}>
          <MapContainer
            center={center}
            zoom={zoom}
            markers={visibleMarkers}
            hoveredMarker={highlightedMarker}
            onClick={onClick}
          />
        </LoadScript>
      </MapErrorBoundary>
    </div>
  );
};

export default GoogleMap;
