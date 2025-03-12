
import React, { useCallback, useEffect, useState } from "react";
import { GoogleMap as GoogleMapComponent } from "@react-google-maps/api";
import MapLoader from "./MapLoader";
import MapMarkers from "./MapMarkers";
import MapError from "./MapError";
import MapControls from "./MapControls";
import { MapMarker } from "@/types/service-area";
import { clearApiKeyCache } from "@/hooks/useApiKeys";
import { useMapInitialization } from "./hooks/useMapInitialization";
import { useMapInteractions } from "./hooks/useMapInteractions";

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
  fitBounds?: boolean;
}

const GoogleMap = ({
  markers = [],
  highlightedMarker = null,
  showAllMarkers = true,
  zoom = 12,
  center = { lat: 40.7795, lng: -74.0324 },
  onClick,
  fitBounds = false
}: GoogleMapProps) => {
  const {
    mapRef,
    isLoading,
    mapError,
    onLoadCallback,
    onUnmountCallback
  } = useMapInitialization();
  
  const {
    zoomLevel,
    zoomIn,
    zoomOut,
    centerMap,
    visibleMarkers,
    setZoomLevel
  } = useMapInteractions(markers, highlightedMarker, showAllMarkers, zoom);

  const [mapReady, setMapReady] = useState(false);

  // Function to fit bounds to show all markers
  const fitMapBounds = useCallback(() => {
    if (mapRef.current && visibleMarkers.length > 0 && mapReady && window.google?.maps) {
      try {
        const bounds = new window.google.maps.LatLngBounds();
        
        visibleMarkers.forEach(marker => {
          bounds.extend({ lat: marker.lat, lng: marker.lng });
        });
        
        // Add padding to the bounds
        mapRef.current.fitBounds(bounds, {
          top: 50, right: 50, bottom: 50, left: 50
        });
        
        // Ensure we don't zoom in too far on single markers
        const currentZoom = mapRef.current.getZoom();
        if (currentZoom && currentZoom > 15) {
          mapRef.current.setZoom(15);
        }
        
        // Similarly, don't zoom out too far
        if (currentZoom && currentZoom < 9 && visibleMarkers.length < 5) {
          mapRef.current.setZoom(9);
        }
      } catch (error) {
        console.error("Error fitting map bounds:", error);
      }
    }
  }, [mapRef, visibleMarkers, mapReady]);

  // Apply bounds fitting when markers change or when explicitly requested
  useEffect(() => {
    if (fitBounds && visibleMarkers.length > 0 && mapReady) {
      setTimeout(() => {
        fitMapBounds();
      }, 100); // Small delay to ensure map is fully initialized
    }
  }, [fitBounds, visibleMarkers, fitMapBounds, mapReady]);

  const handleMapError = useCallback(() => {
    console.error("Map error occurred");
    clearApiKeyCache('maps');
  }, []);

  // Handle map load completion
  const handleMapLoad = useCallback((map: google.maps.Map) => {
    console.log("Map loaded in GoogleMap component");
    onLoadCallback(map);
    setMapReady(true);
    
    // Set initial zoom
    if (zoom) {
      setZoomLevel(zoom);
    }
  }, [onLoadCallback, zoom, setZoomLevel]);

  // Register error handling on window
  useEffect(() => {
    const originalOnError = window.onerror;
    window.onerror = (message, source, lineno, colno, error) => {
      if (source?.includes('maps.googleapis.com') || message?.toString().includes('google')) {
        console.error("Google Maps error detected:", message);
        handleMapError();
      }
      if (originalOnError) {
        return originalOnError(message, source, lineno, colno, error);
      }
      return false;
    };

    return () => {
      window.onerror = originalOnError;
    };
  }, [handleMapError]);

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
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={zoomLevel}
          options={mapOptions}
          onClick={onClick}
          onLoad={handleMapLoad}
          onUnmount={onUnmountCallback}
        >
          {mapReady && visibleMarkers.length > 0 && (
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
          onFitBounds={fitMapBounds}
        />
      </div>
    </div>
  );
};

export default React.memo(GoogleMap);
