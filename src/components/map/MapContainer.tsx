
import { GoogleMap } from "@react-google-maps/api";
import { useMapInstance } from "@/hooks/useMap";
import MapMarkers from "./MapMarkers";
import { MapMarker } from "@/types/service-area";
import { useMemo } from "react";

const MAP_OPTIONS = {
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  gestureHandling: 'cooperative',
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    }
  ]
};

const MAP_CONTAINER_STYLE = {
  width: "100%",
  height: "100%",
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
  const { map, onLoad } = useMapInstance({ center, zoom });
  const options = useMemo(() => MAP_OPTIONS, []);

  console.log('MapContainer render:', {
    hasCenter: !!center,
    zoom,
    markerCount: markers.length,
    mapInstance: !!map
  });

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
