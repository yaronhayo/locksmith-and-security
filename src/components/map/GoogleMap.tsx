
import React, { CSSProperties, useState, useEffect, useRef } from "react";
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
  const componentId = useRef(`map-${Math.random().toString(36).substring(2, 9)}`);
  const isMounted = useRef(true);
  const mapCheckTimeout = useRef<number | null>(null);
  const retryTimeoutRef = useRef<number | null>(null);
  
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
  
  // Cleanup function to prevent memory leaks
  const cleanupTimeouts = () => {
    if (mapCheckTimeout.current !== null) {
      clearTimeout(mapCheckTimeout.current);
      mapCheckTimeout.current = null;
    }
    
    if (retryTimeoutRef.current !== null) {
      clearTimeout(retryTimeoutRef.current);
      retryTimeoutRef.current = null;
    }
  };
  
  useEffect(() => {
    // Set mounted flag
    isMounted.current = true;
    
    if (import.meta.env.DEV) {
      console.log(`GoogleMap(${componentId.current}) mounting with ${markers.length} markers`);
    }
    
    // If Google Maps fails to initialize completely, show a toast and set error state
    // Use ref for timeout to properly clean up
    mapCheckTimeout.current = window.setTimeout(() => {
      if (!isMounted.current) return;
      
      if (window.google && (!window.google.maps || !window.google.maps.Map)) {
        console.error("Google Maps failed to initialize properly");
        setMapInitFailed(true);
        
        // Only show error in development
        if (import.meta.env.DEV) {
          toast.error("Map failed to load properly. Retrying...");
        }
      }
    }, 5000);
    
    return () => {
      isMounted.current = false;
      
      // Clear timeouts to prevent memory leaks and post-unmount state updates
      cleanupTimeouts();
      
      if (import.meta.env.DEV) {
        console.log(`GoogleMap(${componentId.current}) unmounting`);
      }
    };
  }, [retryCount, markers.length]);
  
  const handleRetry = () => {
    if (!isMounted.current) return;
    
    // Clean up any existing timeouts
    cleanupTimeouts();
    
    // Prevent multiple rapid retries
    if (retryTimeoutRef.current) return;
    
    if (import.meta.env.DEV) {
      console.log("Retrying map load...");
    }
    
    // Use timeout to debounce retry attempts
    retryTimeoutRef.current = window.setTimeout(() => {
      if (isMounted.current) {
        setRetryCount(prev => prev + 1);
        setMapInitFailed(false);
        clearMapConfigCache();
        
        // Only show info toast in development
        if (import.meta.env.DEV) {
          toast.info("Retrying map load...");
        }
      }
      
      retryTimeoutRef.current = null;
    }, 300);
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
        {!isLoading && (
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
        )}
        
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
