
import { useMemo, useCallback, useRef } from "react";
import { GoogleMap as GoogleMapComponent } from "@react-google-maps/api";
import MapLoader from "./MapLoader";
import MapMarkers from "./MapMarkers";
import { MapMarker } from "@/types/service-area";
import { CSSProperties } from "react";

const mapOptions: google.maps.MapOptions = {
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

const containerStyle: CSSProperties = {
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
  const mapRef = useRef<google.maps.Map | null>(null);

  const visibleMarkers = useMemo(() => 
    showAllMarkers ? markers : markers.filter(m => m.slug === highlightedMarker),
    [markers, showAllMarkers, highlightedMarker]
  );

  const onLoadCallback = useCallback((map: google.maps.Map) => {
    console.log('Map loaded successfully');
    mapRef.current = map;
    
    if (visibleMarkers.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      visibleMarkers.forEach(marker => {
        bounds.extend({ lat: marker.lat, lng: marker.lng });
      });
      map.fitBounds(bounds);
    }
  }, [visibleMarkers]);

  const onUnmountCallback = useCallback(() => {
    console.log('Map unmounting');
    mapRef.current = null;
  }, []);

  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-0 bg-gray-100">
        <GoogleMapComponent
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          options={mapOptions}
          onClick={onClick}
          onLoad={onLoadCallback}
          onUnmount={onUnmountCallback}
        >
          {visibleMarkers.length > 0 && (
            <MapMarkers
              markers={visibleMarkers}
              hoveredMarker={highlightedMarker}
            />
          )}
        </GoogleMapComponent>
      </div>
    </div>
  );
};

export default GoogleMap;
