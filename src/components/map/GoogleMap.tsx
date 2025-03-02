
import React, { CSSProperties, useState, useEffect } from "react";
import { GoogleMap as GoogleMapComponent } from "@react-google-maps/api";
import MapLoader from "./MapLoader";
import MapMarkers from "./MapMarkers";
import MapError from "./MapError";
import { MapMarker } from "@/types/service-area";
import MapControls from "./MapControls";
import { useGoogleMap } from "./useGoogleMap";
import { clearMapConfigCache } from '@/hooks/useMap';
import { toast } from "sonner";

const mapOptions: google.maps.MapOptions = {
  zoomControl: false,
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
  const [retryCount, setRetryCount] = useState(0);
  const [mapInitFailed, setMapInitFailed] = useState(false);
  
  const {
    isLoading,
    mapError,
    visibleMarkers,
    onLoadCallback,
    onUnmountCallback,
    zoomIn,
    zoomOut,
    centerMap
  } = useGoogleMap(markers, highlightedMarker, showAllMarkers, zoom, center);
  
  useEffect(() => {
    // If Google Maps fails to initialize completely, show a toast and set error state
    const checkMapStatus = setTimeout(() => {
      if (window.google && (!window.google.maps || !window.google.maps.Map)) {
        console.error("Google Maps failed to initialize properly");
        toast.error("Map failed to load properly. Please refresh the page or try again later.");
        setMapInitFailed(true);
      }
    }, 5000);
    
    return () => clearTimeout(checkMapStatus);
  }, [retryCount]);
  
  const handleRetry = () => {
    console.log("Retrying map load...");
    setRetryCount(prev => prev + 1);
    setMapInitFailed(false);
    clearMapConfigCache();
    toast.info("Retrying map load...");
  };
  
  if (mapError || mapInitFailed) {
    return <MapError 
      error={mapError || "Google Maps failed to initialize properly"} 
      resetErrorBoundary={handleRetry} 
    />;
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <MapLoader text="Initializing map..." />
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
        >
          {!isLoading && visibleMarkers.length > 0 && (
            <MapMarkers
              markers={visibleMarkers}
              hoveredMarker={highlightedMarker}
            />
          )}
        </GoogleMapComponent>
        
        <MapControls 
          onZoomIn={zoomIn}
          onZoomOut={zoomOut}
          onCenterMap={centerMap}
        />
      </div>
    </div>
  );
};

export default GoogleMap;
