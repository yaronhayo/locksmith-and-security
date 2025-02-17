
import { useMemo } from "react";
import { LoadScript, Libraries } from "@react-google-maps/api";
import { useMapConfig } from "@/hooks/useMap";
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

  // Memoize the center to prevent unnecessary re-renders
  const mapCenter = useMemo(() => center, [center.lat, center.lng]);

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

  return (
    <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-md">
      <MapErrorBoundary>
        <LoadScript {...loadScriptProps}>
          <MapContainer
            center={mapCenter}
            zoom={zoom}
            markers={markers}
            hoveredMarker={hoveredMarker}
            onClick={onClick}
          />
        </LoadScript>
      </MapErrorBoundary>
    </div>
  );
};

export default Map;
