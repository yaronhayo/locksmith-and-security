
import { useMemo } from "react";
import { LoadScript, Libraries } from "@react-google-maps/api";
import { useMapConfig, useMapScript } from "@/hooks/useMap";
import MapError from "./map/MapError";
import MapLoader from "./map/MapLoader";
import MapContainer from "./map/MapContainer";
import { MapErrorBoundary } from "./map/MapErrorBoundary";
import { MapMarker } from "@/types/service-area";

// Define libraries outside component to prevent recreation
const libraries: Libraries = ['places'];

interface MapProps {
  markers?: MapMarker[];
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
  const { apiKey, loadError, isRetrying, retryCount, fetchApiKey } = useMapConfig();
  const { isLoaded, loadError: scriptError } = useMapScript(apiKey || '');

  // Memoize the center to prevent unnecessary re-renders
  const mapCenter = useMemo(() => center, [center.lat, center.lng]);

  // Show loading state while API key is being fetched or script is loading
  if (!apiKey || isRetrying) {
    console.log('Loading: Waiting for API key...', { apiKey, isRetrying });
    return <MapLoader />;
  }

  // Show error if there's an API key error or script loading error
  if (loadError || scriptError) {
    console.error('Map error:', loadError || scriptError);
    return (
      <MapError 
        error={loadError || scriptError} 
        onRetry={fetchApiKey} 
        isRetrying={isRetrying}
        retryCount={retryCount}
      />
    );
  }

  return (
    <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-md">
      <MapErrorBoundary>
        <LoadScript
          googleMapsApiKey={apiKey}
          libraries={libraries}
          language="en"
          region="US"
          loadingElement={<MapLoader />}
        >
          <MapContainer
            center={mapCenter}
            zoom={zoom}
            markers={markers}
            hoveredMarker={hoveredMarker}
            onClick={onClick}
            isLoaded={isLoaded}
          />
        </LoadScript>
      </MapErrorBoundary>
    </div>
  );
};

export default Map;
