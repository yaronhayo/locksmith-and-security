import { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useMapConfig } from "./map/useMapConfig";
import MapError from "./map/MapError";
import MapLoader from "./map/MapLoader";
import { MapLocation } from "@/types/map";

const defaultCenter = {
  lat: 40.7795,
  lng: -74.0324,
};

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

interface MapProps {
  markers?: MapLocation[];
  hoveredMarker?: string | null;
  center?: { lat: number; lng: number };
  zoom?: number;
  onClick?: (e: google.maps.MapMouseEvent) => void;
}

const Map = ({
  markers = [],
  center = defaultCenter,
  zoom = 12,
  hoveredMarker = null,
  onClick,
}: MapProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { apiKey, loadError, isRetrying, retryCount, fetchApiKey } = useMapConfig();

  const handleMarkerClick = useCallback((slug?: string) => {
    if (slug) {
      window.location.href = `/service-areas/${slug}`;
    }
  }, []);

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
        onLoad={() => setIsLoaded(true)}
        libraries={["places"]}
      >
        {!isLoaded && <MapLoader />}
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
          options={mapOptions}
          onClick={onClick}
        >
          {markers.map((marker, index) => (
            <Marker
              key={`${marker.slug || ''}-${index}`}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.title}
              onClick={() => handleMarkerClick(marker.slug)}
              animation={
                hoveredMarker === marker.slug
                  ? google.maps.Animation.BOUNCE
                  : undefined
              }
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;