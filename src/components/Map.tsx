import { useState } from "react";
import { GoogleMap, LoadScript, Libraries } from "@react-google-maps/api";
import { useMapConfig } from "./map/useMapConfig";
import MapError from "./map/MapError";
import MapLoader from "./map/MapLoader";
import MapMarkers from "./map/MapMarkers";
import { MapLocation } from "@/types/map";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "0.5rem",
};

const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ],
};

// Define libraries array outside component to prevent reloading
const libraries: Libraries = ["places"];

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
  const [mapLoaded, setMapLoaded] = useState(false);
  const { apiKey, loadError, isRetrying, retryCount, fetchApiKey } = useMapConfig();

  console.log('Map render:', { markers, mapLoaded, apiKey });

  if (loadError) {
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
    return <MapLoader />;
  }

  return (
    <div className="w-full h-[400px] relative rounded-lg overflow-hidden">
      <LoadScript 
        googleMapsApiKey={apiKey}
        libraries={libraries}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
          options={mapOptions}
          onClick={onClick}
          onLoad={() => {
            console.log('Google Map component loaded');
            setMapLoaded(true);
          }}
        >
          {mapLoaded && markers && markers.length > 0 && (
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