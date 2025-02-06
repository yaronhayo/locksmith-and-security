
import { GoogleMap } from "@react-google-maps/api";
import { useMapInstance } from "./hooks/useMapInstance";
import MapMarkers from "./MapMarkers";
import { MapLocation } from "@/types/map";
import { useEffect } from "react";

const MAP_OPTIONS = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  gestureHandling: 'cooperative'
} as const;

const MAP_CONTAINER_STYLE = {
  width: "100%",
  height: "400px",
  borderRadius: "0.5rem"
} as const;

interface MapContainerProps {
  center: { lat: number; lng: number };
  zoom: number;
  markers?: MapLocation[];
  hoveredMarker?: string | null;
  onClick?: (e: google.maps.MapMouseEvent) => void;
  isLoaded: boolean;
}

const MapContainer = ({
  center,
  zoom,
  markers = [],
  hoveredMarker,
  onClick,
  isLoaded
}: MapContainerProps) => {
  const { map, handleMapLoad } = useMapInstance({ center, zoom });

  useEffect(() => {
    if (map) {
      map.setCenter(center);
      map.setZoom(zoom);
    }
  }, [map, center, zoom]);

  console.log('MapContainer render:', { isLoaded, markerCount: markers.length });

  return (
    <GoogleMap
      mapContainerStyle={MAP_CONTAINER_STYLE}
      center={center}
      zoom={zoom}
      options={MAP_OPTIONS}
      onClick={onClick}
      onLoad={handleMapLoad}
    >
      {isLoaded && markers && markers.length > 0 && (
        <MapMarkers 
          markers={markers} 
          hoveredMarker={hoveredMarker} 
        />
      )}
    </GoogleMap>
  );
};

export default MapContainer;
