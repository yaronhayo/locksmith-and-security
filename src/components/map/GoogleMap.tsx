
import { useMemo, useCallback } from "react";
import { GoogleMap as GoogleMapComponent } from "@react-google-maps/api";
import { useMapConfig } from "@/hooks/useMap";
import MapError from "./MapError";
import MapLoader from "./MapLoader";
import MapMarkers from "./MapMarkers";
import { MapMarker } from "@/types/service-area";

const mapOptions = {
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  gestureHandling: 'cooperative'
};

interface GoogleMapProps {
  markers?: MapMarker[];
  highlightedMarker?: string | null;
  showAllMarkers?: boolean;
  zoom?: number;
  center?: { lat: number; lng: number };
  onClick?: (e: google.maps.MapMouseEvent) => void;
}

const containerStyle = {
  width: '100%',
  height: '100%'
};

const GoogleMap = ({
  markers = [],
  highlightedMarker = null,
  showAllMarkers = true,
  zoom = 12,
  center = { lat: 40.7795, lng: -74.0324 },
  onClick
}: GoogleMapProps) => {
  const { isLoading, error: apiKeyError } = useMapConfig();

  const visibleMarkers = useMemo(() => 
    showAllMarkers ? markers : markers.filter(m => m.slug === highlightedMarker),
    [markers, showAllMarkers, highlightedMarker]
  );

  const onLoadCallback = useCallback((map: google.maps.Map) => {
    console.log('Map loaded successfully');
    
    // Fit bounds to markers if there are any
    if (visibleMarkers.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      visibleMarkers.forEach(marker => {
        bounds.extend({ lat: marker.lat, lng: marker.lng });
      });
      map.fitBounds(bounds, 50); // 50px padding
    }
  }, [visibleMarkers]);

  if (isLoading) return <MapLoader />;
  if (apiKeyError) return <MapError error={apiKeyError.message} />;

  return (
    <div className="w-full h-full relative">
      <GoogleMapComponent
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        options={mapOptions}
        onClick={onClick}
        onLoad={onLoadCallback}
      >
        <MapMarkers
          markers={visibleMarkers}
          hoveredMarker={highlightedMarker}
        />
      </GoogleMapComponent>
    </div>
  );
};

export default GoogleMap;
