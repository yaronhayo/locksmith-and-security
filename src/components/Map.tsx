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
};

const libraries: Libraries = ["places", "marker"];

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
  const [isLoaded, setIsLoaded] = useState(false);
  const { apiKey, loadError, isRetrying, retryCount, fetchApiKey } = useMapConfig();

  console.log('Map render:', { markers, isLoaded, apiKey });

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
    <div className="w-full h-[400px] relative rounded-lg overflow-hidden">
      <LoadScript 
        googleMapsApiKey={apiKey}
        libraries={libraries}
        onLoad={() => {
          console.log('Google Maps script loaded successfully');
          setIsLoaded(true);
        }}
        onError={(err) => {
          console.error('Error loading Google Maps script:', err);
        }}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
          options={mapOptions}
          onClick={onClick}
          onLoad={() => {
            console.log('Map instance loaded successfully');
          }}
        >
          {markers && markers.length > 0 && (
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