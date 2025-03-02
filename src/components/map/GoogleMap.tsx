
import React, { CSSProperties, useEffect, useState } from "react";
import { GoogleMap as GoogleMapComponent, useJsApiLoader } from "@react-google-maps/api";
import MapLoader from "./MapLoader";
import MapMarkers from "./MapMarkers";
import MapError from "./MapError";
import { MapMarker } from "@/types/service-area";
import MapControls from "./MapControls";
import { useGoogleMap } from "./useGoogleMap";
import { toast } from "sonner";
import { useMapConfig, clearMapConfigCache } from '@/hooks/useMap';

const mapOptions: google.maps.MapOptions = {
  zoomControl: false, // We'll use our custom controls
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
  const { data: apiKey, isLoading: isKeyLoading, error: keyError, refetch } = useMapConfig();
  const [retryCount, setRetryCount] = useState(0);
  
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey || '',
    libraries: ['places'],
  });

  const {
    mapRef,
    isLoading: isMapLoading,
    mapError,
    visibleMarkers,
    onLoadCallback,
    onUnmountCallback,
    zoomIn,
    zoomOut,
    centerMap
  } = useGoogleMap(markers, highlightedMarker, showAllMarkers, zoom, center);

  const isLoading = isKeyLoading || !isLoaded || isMapLoading;
  const error = keyError || loadError || mapError;

  // Debug logging
  useEffect(() => {
    console.log("GoogleMap component rendered with", { 
      markers: markers.length,
      apiKey: !!apiKey,
      isKeyLoading,
      isLoaded,
      isMapLoading,
      error: error ? 'Error present' : 'No errors',
      retryCount
    });
    
    return () => {
      console.log("GoogleMap component unmounted");
    };
  }, [markers.length, apiKey, isKeyLoading, isLoaded, isMapLoading, error, retryCount]);

  // Handle errors
  useEffect(() => {
    if (error) {
      console.error("Map error in GoogleMap component:", error);
      toast.error("Map display error");
    }
  }, [error]);
  
  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    clearMapConfigCache();
    refetch();
    toast.info("Retrying map initialization...");
  };

  if (isKeyLoading) {
    return <MapLoader text="Loading map configuration..." />;
  }
  
  if (keyError) {
    return <MapError 
      error={`Failed to load Google Maps API key: ${keyError.message}`} 
      resetErrorBoundary={handleRetry} 
    />;
  }
  
  if (!apiKey) {
    return <MapError 
      error="Google Maps API key not found" 
      resetErrorBoundary={handleRetry} 
    />;
  }
  
  if (loadError) {
    return <MapError 
      error={`Error loading Google Maps: ${loadError.message}`} 
      resetErrorBoundary={handleRetry} 
    />;
  }
  
  if (!isLoaded) {
    return <MapLoader text="Loading Google Maps..." />;
  }
  
  if (mapError) {
    return <MapError 
      error={mapError} 
      resetErrorBoundary={handleRetry} 
    />;
  }

  return (
    <div className="relative w-full h-full">
      {isMapLoading && (
        <div className="absolute inset-0 z-10">
          <MapLoader text="Initializing map..." />
        </div>
      )}
      <div className={`w-full h-full ${isMapLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <GoogleMapComponent
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          options={mapOptions}
          onClick={onClick}
          onLoad={onLoadCallback}
          onUnmount={onUnmountCallback}
        >
          {!isMapLoading && visibleMarkers.length > 0 && (
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
