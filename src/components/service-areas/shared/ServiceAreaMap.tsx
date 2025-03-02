
import { lazy, Suspense, memo, useState, useEffect, useCallback } from "react";
import { MapMarker } from "@/types/service-area";
import { ErrorBoundary } from "react-error-boundary";
import MapError from "@/components/map/MapError";
import LoadingSpinner from "@/components/LoadingSpinner";
import { toast } from "sonner";

// Dynamically import components with code splitting
const GoogleMapsProvider = lazy(() => 
  import(/* webpackChunkName: "google-maps-provider" */ "@/components/providers/GoogleMapsProvider")
);
const GoogleMap = lazy(() => 
  import(/* webpackChunkName: "google-map" */ "@/components/map/GoogleMap")
);

// Dynamically import tracking function when needed
const loadPerformanceTracking = () => import("@/utils/performanceMonitoring").then(m => m.trackComponentRender);

interface ServiceAreaMapProps {
  locationName: string;
  lat: number;
  lng: number;
  isLoading?: boolean;
}

const ServiceAreaMap = ({ locationName, lat, lng, isLoading = false }: ServiceAreaMapProps) => {
  const [mapReady, setMapReady] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const mapInstanceKey = `map-instance-${retryCount}-${locationName.toLowerCase().replace(/\s+/g, '-')}`;
  
  useEffect(() => {
    let finishTracking: (() => number) | undefined;
    
    // Only load the performance tracking code when needed
    loadPerformanceTracking().then(trackComponentRender => {
      finishTracking = trackComponentRender('ServiceAreaMap');
    });
    
    // Simulate map loading for better UX
    const timer = setTimeout(() => {
      setMapReady(true);
    }, 800);
    
    return () => {
      clearTimeout(timer);
      if (finishTracking) finishTracking();
    };
  }, []);

  const handleMapError = useCallback((error: Error) => {
    console.error("Service area map error:", error);
    setMapError(error.message || "Failed to load location map");
    toast.error("Map error: " + (error.message || "Failed to load"));
  }, []);

  const handleRetry = useCallback(() => {
    console.log("Retrying map load...");
    setMapError(null);
    setRetryCount(prev => prev + 1);
    toast.info("Retrying map load...");
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
            <Suspense fallback={<LoadingSpinner size="lg" text="Loading map components..." />}>
              <GoogleMapsProvider>
                <GoogleMap
                  markers={markers}
                  showAllMarkers={true}
                  zoom={14}
                  center={{ lat, lng }}
                  key={mapInstanceKey}
                />
              </GoogleMapsProvider>
            </Suspense>
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
