import { useMemo } from "react";
import { LoadScript } from "@react-google-maps/api";
import { useMapConfig } from "./map/useMapConfig";
import { useMapScript } from "./map/hooks/useMapScript";
import MapError from "./map/MapError";
import MapLoader from "./map/MapLoader";
import MapContainer from "./map/MapContainer";
import { MapLocation } from "@/types/map";

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
  const { apiKey, loadError, isRetrying, retryCount, fetchApiKey } = useMapConfig();
  const { isLoaded, loadScriptProps, handleScriptLoad, handleScriptError } = useMapScript(apiKey || '');

  // Memoize the center to prevent unnecessary re-renders
  const mapCenter = useMemo(() => center, [center.lat, center.lng]);

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
        <MapContainer
          center={mapCenter}
          zoom={zoom}
          markers={markers}
          hoveredMarker={hoveredMarker}
          onClick={onClick}
          isLoaded={isLoaded}
        />
      </LoadScript>
    </div>
  );
};

export default Map;