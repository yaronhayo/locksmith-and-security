
import { useMemo, useCallback, useRef, useState, useEffect } from "react";
import { GoogleMap as GoogleMapComponent } from "@react-google-maps/api";
import MapLoader from "./MapLoader";
import MapMarkers from "./MapMarkers";
import MapError from "./MapError";
import { MapMarker } from "@/types/service-area";
import { CSSProperties } from "react";
import { mapPerformance } from "@/utils/performanceMonitoring";

const mapOptions: google.maps.MapOptions = {
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
  height: '100%',
  minHeight: '500px'
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
  const [isLoading, setIsLoading] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);
  const loadStartTime = useRef(performance.now());
  
  // Log when component mounts/unmounts to track lifecycle
  useEffect(() => {
    console.log("GoogleMap component mounted");
    return () => {
      console.log("GoogleMap component unmounted");
    };
  }, []);

  const visibleMarkers = useMemo(() => 
    showAllMarkers ? markers : markers.filter(m => m.slug === highlightedMarker),
    [markers, showAllMarkers, highlightedMarker]
  );

  useEffect(() => {
    // Log when markers change
    console.log("Markers updated:", { 
      total: markers.length, 
      visible: visibleMarkers.length,
      highlighted: highlightedMarker
    });
    
    if (mapRef.current && visibleMarkers.length > 0) {
      try {
        updateMapView();
      } catch (error) {
        console.error("Error updating map view:", error);
      }
    }
  }, [visibleMarkers, highlightedMarker]);

  const updateMapView = useCallback(() => {
    if (!mapRef.current) return;
    
    const map = mapRef.current;
    
    if (visibleMarkers.length > 1) {
      const bounds = new google.maps.LatLngBounds();
      visibleMarkers.forEach(marker => {
        bounds.extend({ lat: marker.lat, lng: marker.lng });
      });
      map.fitBounds(bounds);
    } else if (visibleMarkers.length === 1) {
      map.setCenter({ lat: visibleMarkers[0].lat, lng: visibleMarkers[0].lng });
      map.setZoom(zoom);
    } else {
      map.setCenter(center);
      map.setZoom(zoom);
    }
  }, [visibleMarkers, zoom, center]);

  const onLoadCallback = useCallback((map: google.maps.Map) => {
    try {
      const loadTime = performance.now() - loadStartTime.current;
      console.log(`Map loaded successfully in ${loadTime.toFixed(2)}ms`);
      mapPerformance.trackInstanceLoad(loadStartTime.current);
      
      mapRef.current = map;
      
      // Delay setting isLoading to false to ensure map is fully rendered
      setTimeout(() => {
        setIsLoading(false);
        updateMapView();
      }, 200);
    } catch (error) {
      console.error("Error in map load callback:", error);
      setMapError("Failed to initialize map properly");
      setIsLoading(false);
    }
  }, [updateMapView]);

  const onUnmountCallback = useCallback(() => {
    console.log('Map unmounting');
    mapRef.current = null;
  }, []);

  const onErrorCallback = useCallback((error: Error) => {
    console.error("Google Map error:", error);
    setMapError(error.message || "An error occurred while loading the map");
    setIsLoading(false);
  }, []);

  if (mapError) {
    return <MapError error={mapError} />;
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <MapLoader />
        </div>
      )}
      <div className={`w-full h-full ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <GoogleMapComponent
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          options={mapOptions}
          onClick={onClick}
          onLoad={onLoadCallback}
          onUnmount={onUnmountCallback}
          onError={onErrorCallback}
        >
          {!isLoading && visibleMarkers.length > 0 && (
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
