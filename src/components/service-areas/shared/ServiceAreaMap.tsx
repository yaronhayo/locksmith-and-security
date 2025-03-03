
import GoogleMapsProvider from "@/components/providers/GoogleMapsProvider";
import GoogleMap from "@/components/map/GoogleMap";
import { MapMarker } from "@/types/service-area";
import { ErrorBoundary } from "react-error-boundary";
import MapError from "@/components/map/MapError";
import { memo, useState, useEffect, useCallback, useRef } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { trackComponentRender } from "@/utils/performanceMonitoring";

interface ServiceAreaMapProps {
  locationName: string;
  lat: number;
  lng: number;
  isLoading?: boolean;
}

const ServiceAreaMap = ({ locationName, lat, lng, isLoading = false }: ServiceAreaMapProps) => {
  const finishRenderTracking = trackComponentRender('ServiceAreaMap');
  const [mapReady, setMapReady] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const isMounted = useRef(true);
  const mapInstanceKey = `map-instance-${retryCount}-${locationName.toLowerCase().replace(/\s+/g, '-')}`;
  const readyTimeoutRef = useRef<number | null>(null);
  const retryTimeoutRef = useRef<number | null>(null);
  
  // Cleanup function for timeouts
  const cleanupTimeouts = useCallback(() => {
    if (readyTimeoutRef.current !== null) {
      clearTimeout(readyTimeoutRef.current);
      readyTimeoutRef.current = null;
    }
    
    if (retryTimeoutRef.current !== null) {
      clearTimeout(retryTimeoutRef.current);
      retryTimeoutRef.current = null;
    }
  }, []);
  
  useEffect(() => {
    isMounted.current = true;
    finishRenderTracking();
    
    // Simulate map loading for better UX
    readyTimeoutRef.current = setTimeout(() => {
      if (isMounted.current) {
        setMapReady(true);
      }
    }, 600);
    
    return () => {
      isMounted.current = false;
      cleanupTimeouts();
    };
  }, [finishRenderTracking, cleanupTimeouts]);

  const handleMapError = useCallback((error: Error) => {
    if (!isMounted.current) return;
    
    console.error("Service area map error:", error);
    setMapError(error.message || "Failed to load location map");
  }, []);

  const handleRetry = useCallback(() => {
    if (!isMounted.current) return;
    
    // Prevent duplicate retries
    if (retryTimeoutRef.current) return;
    
    console.log("Retrying map load...");
    
    retryTimeoutRef.current = window.setTimeout(() => {
      if (isMounted.current) {
        setMapError(null);
        setRetryCount(prev => prev + 1);
      }
      retryTimeoutRef.current = null;
    }, 300);
  }, []);
  
  const markers: MapMarker[] = [
    {
      lat,
      lng,
      title: `${locationName} Locksmith Services`,
      slug: locationName.toLowerCase().replace(/\s+/g, '-')
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">Serving {locationName}, NJ</h3>
        <p className="text-sm text-gray-600">Fast response to all areas of {locationName}</p>
      </div>
      <div className="h-[400px] relative">
        {(isLoading || !mapReady) ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <LoadingSpinner size="lg" text="Preparing map..." />
          </div>
        ) : (
          <ErrorBoundary 
            FallbackComponent={({ error, resetErrorBoundary }) => (
              <MapError error={error.message} resetErrorBoundary={resetErrorBoundary} />
            )}
            onError={handleMapError}
            key={`map-error-boundary-${retryCount}`}
            onReset={handleRetry}
          >
            <GoogleMapsProvider>
              <GoogleMap
                markers={markers}
                showAllMarkers={true}
                zoom={14}
                center={{ lat, lng }}
                key={mapInstanceKey}
              />
            </GoogleMapsProvider>
          </ErrorBoundary>
        )}
        {mapError && (
          <div className="absolute inset-0 bg-white/90 flex items-center justify-center">
            <MapError 
              error={mapError} 
              resetErrorBoundary={handleRetry}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(ServiceAreaMap);
