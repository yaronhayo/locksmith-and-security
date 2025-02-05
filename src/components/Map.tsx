import { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import MapError from "./map/MapError";
import MapLoader from "./map/MapLoader";
import MapMarkers from "./map/MapMarkers";
import { useMapConfig } from "./map/useMapConfig";
import { MapLocation } from "@/types/map";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 40.7795,
  lng: -74.0324,
};

interface MapProps {
  markers?: MapLocation[];
  hoveredMarker?: string | null;
  center?: { lat: number; lng: number };
  zoom?: number;
}

const Map = ({
  markers = [],
  center = defaultCenter,
  zoom = 12,
  hoveredMarker = null
}: MapProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scriptError, setScriptError] = useState<string | null>(null);
  const { apiKey, loadError, isRetrying, fetchApiKey } = useMapConfig();

  if (loadError || scriptError) {
    return <MapError 
      error={loadError || scriptError} 
      onRetry={fetchApiKey} 
      isRetrying={isRetrying} 
    />;
  }

  if (!apiKey) {
    return <MapLoader />;
  }

  return (
    <div className="w-full h-[400px] relative rounded-lg overflow-hidden">
      <LoadScript 
        googleMapsApiKey={apiKey}
        onLoad={() => setIsLoaded(true)}
        onError={(error) => {
          console.error('Google Maps script error:', error);
          setScriptError('Failed to load Google Maps');
        }}
      >
        {!isLoaded && <MapLoader />}
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
          options={{
            disableDefaultUI: false,
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
          }}
        >
          <MapMarkers markers={markers} hoveredMarker={hoveredMarker} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;