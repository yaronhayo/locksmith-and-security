
import { GoogleMap } from "@react-google-maps/api";
import { useMapInstance } from "@/hooks/useMap";
import MapMarkers from "./MapMarkers";
import { MapMarker } from "@/types/service-area";
import { useEffect, useMemo, useCallback } from "react";

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

  // Memoize map options to prevent unnecessary re-renders
  const options = useMemo(() => ({
    ...MAP_OPTIONS,
    noClear: true, // Prevent map from being cleared between renders
    clickableIcons: false, // Disable POI clicks
    restriction: {
      latLngBounds: {
        north: 41.0,
        south: 40.5,
        east: -73.8,
        west: -74.3,
      },
      strictBounds: true
    }
  }), []);

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    console.log('Map instance loading:', { center, zoom });
    handleMapLoad(mapInstance);
  }, [handleMapLoad, center, zoom]);

  useEffect(() => {
    if (map) {
      map.setCenter(center);
      map.setZoom(zoom);
    }
  }, [map, center, zoom]);

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
