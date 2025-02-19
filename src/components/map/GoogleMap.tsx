
import { useMemo, useCallback, useRef, useEffect } from "react";
import { GoogleMap as GoogleMapComponent } from "@react-google-maps/api";
import MapError from "./MapError";
import MapLoader from "./MapLoader";
import MapMarkers from "./MapMarkers";
import { MapMarker } from "@/types/service-area";

const mapOptions = {
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  gestureHandling: 'cooperative',
  styles: [
    {
      featureType: "all",
      elementType: "geometry",
      stylers: [{ visibility: "on" }]
    }
  ]
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
  const mapRef = useRef<google.maps.Map | null>(null);
  const isInitializedRef = useRef(false);

  const visibleMarkers = useMemo(() => 
    showAllMarkers ? markers : markers.filter(m => m.slug === highlightedMarker),
    [markers, showAllMarkers, highlightedMarker]
  );

  const onLoadCallback = useCallback((map: google.maps.Map) => {
    if (isInitializedRef.current) {
      console.log('Map already initialized, skipping');
      return;
    }

    console.log('Map loaded successfully');
    mapRef.current = map;
    isInitializedRef.current = true;
    
    if (visibleMarkers.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      visibleMarkers.forEach(marker => {
        bounds.extend({ lat: marker.lat, lng: marker.lng });
      });
      map.fitBounds(bounds, 50);
    }
  }, [visibleMarkers]);

  const onUnmountCallback = useCallback(() => {
    console.log('Map unmounting');
    mapRef.current = null;
    isInitializedRef.current = false;
  }, []);

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      mapRef.current = null;
      isInitializedRef.current = false;
    };
  }, []);

  if (!window.google?.maps) return <MapLoader />;

  return (
    <div className="w-full h-full relative">
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
  );
};

export default GoogleMap;
