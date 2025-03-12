
import React, { useCallback } from "react";
import { GoogleMap as GoogleMapComponent } from "@react-google-maps/api";
import MapLoader from "./MapLoader";
import MapMarkers from "./MapMarkers";
import MapError from "./MapError";
import MapControls from "./MapControls";
import { MapMarker } from "@/types/service-area";
import { useGoogleMap } from "./useGoogleMap";
import { useScripts } from "@/components/providers/ScriptsProvider";
import { ScriptLoadError } from "@/components/providers/ScriptsProvider";

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

const GoogleMap = ({
  markers = [],
  highlightedMarker = null,
  showAllMarkers = true,
  zoom = 12,
  center = { lat: 40.7795, lng: -74.0324 },
  onClick
}: GoogleMapProps) => {
  const { googleMapsStatus, googleMapsError, reloadGoogleMaps } = useScripts();
  
  const {
    mapRef,
    isLoading,
    mapError,
    visibleMarkers,
    onLoadCallback,
    onUnmountCallback,
    zoomIn,
    zoomOut,
    centerMap
  } = useGoogleMap(markers, highlightedMarker, showAllMarkers, zoom, center);

  const handleMapError = useCallback(() => {
    console.error("Map error occurred");
    // Attempt to recover by reloading Google Maps
    reloadGoogleMaps();
  }, [reloadGoogleMaps]);

  // Register error handling on window
  React.useEffect(() => {
    const originalOnError = window.onerror;
    window.onerror = (message, source, lineno, colno, error) => {
      if (source?.includes('maps.googleapis.com') || message?.toString().includes('google')) {
        console.error("Google Maps error detected:", message);
        handleMapError();
      }
      // Call the original handler if it exists
      if (originalOnError) {
        return originalOnError(message, source, lineno, colno, error);
      }
      return false;
    };

    return () => {
      window.onerror = originalOnError;
    };
  }, [handleMapError]);

  // Show error if Google Maps failed to load
  if (googleMapsStatus === 'error') {
    return <ScriptLoadError error={googleMapsError} />;
  }

  // Show error if there was a map-specific error
  if (mapError) {
    return <MapError error={mapError} />;
  }
  
  // Show loading state if Google Maps is still loading
  if (googleMapsStatus === 'loading') {
    return <MapLoader />;
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
          mapContainerStyle={{ width: '100%', height: '100%' }}
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

export default React.memo(GoogleMap);
