
import { GoogleMap } from "@react-google-maps/api";
import { useMapInstance } from "@/hooks/useMap";
import MapMarkers from "./MapMarkers";
import { MapMarker } from "@/types/service-area";
import { useCallback, useMemo } from "react";

const MAP_OPTIONS = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  gestureHandling: 'cooperative',
  noClear: true,
  clickableIcons: false
} as const;

const MAP_CONTAINER_STYLE = {
  width: "100%",
  height: "400px",
  borderRadius: "0.5rem"
} as const;

interface MapContainerProps {
  center: { lat: number; lng: number };
  zoom: number;
  markers?: MapMarker[];
  hoveredMarker?: string | null;
  onClick?: (e: google.maps.MapMouseEvent) => void;
}

const MapContainer = ({
  center,
  zoom,
  markers = [],
  hoveredMarker,
  onClick,
}: MapContainerProps) => {
  const { map, handleMapLoad } = useMapInstance({ center, zoom });

  const options = useMemo(() => MAP_OPTIONS, []);

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    handleMapLoad(mapInstance);
  }, [handleMapLoad]);

  return (
    <GoogleMap
      mapContainerStyle={MAP_CONTAINER_STYLE}
      center={center}
      zoom={zoom}
      options={options}
      onClick={onClick}
      onLoad={onLoad}
    >
      {markers && markers.length > 0 && (
        <MapMarkers 
          markers={markers} 
          hoveredMarker={hoveredMarker} 
        />
      )}
    </GoogleMap>
  );
};

export default MapContainer;
