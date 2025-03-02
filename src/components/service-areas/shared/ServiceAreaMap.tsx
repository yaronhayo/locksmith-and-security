
import GoogleMapsProvider from "@/components/providers/GoogleMapsProvider";
import GoogleMap from "@/components/map/GoogleMap";
import { MapMarker } from "@/types/service-area";
import { ErrorBoundary } from "react-error-boundary";
import MapError from "@/components/map/MapError";
import { memo, useState, useEffect } from "react";
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
  
  useEffect(() => {
    finishRenderTracking();
    
    // Simulate map loading for better UX
    const timer = setTimeout(() => {
      setMapReady(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [finishRenderTracking]);
  
  const markers: MapMarker[] = [
    {
      lat,
      lng,
      title: `${locationName} Locksmith Services`,
      slug: locationName.toLowerCase().replace(/\s+/g, '-')
    }
  ];
  
  const handleMapError = (error: Error) => {
    console.error("Map error:", error);
    setMapError(error.message || "Failed to load map");
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">Serving {locationName}, NJ</h3>
        <p className="text-sm text-gray-600">Fast response to all areas of {locationName}</p>
      </div>
      <div className="h-[400px] relative">
        {(isLoading || !mapReady) ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <LoadingSpinner size="lg" text="Loading map..." />
          </div>
        ) : (
          <ErrorBoundary 
            FallbackComponent={MapError}
            onError={handleMapError}
          >
            <GoogleMapsProvider>
              <GoogleMap
                markers={markers}
                showAllMarkers={true}
                zoom={14}
                center={{ lat, lng }}
              />
            </GoogleMapsProvider>
          </ErrorBoundary>
        )}
        {mapError && <MapError error={mapError} />}
      </div>
    </div>
  );
};

export default memo(ServiceAreaMap);
