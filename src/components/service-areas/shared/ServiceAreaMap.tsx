
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

// Custom error fallback
const MapErrorFallback = ({ error }: { error: Error }) => (
  <MapError error={`Failed to load map: ${error.message}`} />
);

const ServiceAreaMap = ({ locationName, lat, lng, isLoading = false }: ServiceAreaMapProps) => {
  const finishRenderTracking = trackComponentRender('ServiceAreaMap');
  const [mapReady, setMapReady] = useState(false);
  
  useEffect(() => {
    finishRenderTracking();
  }, [finishRenderTracking]);
  
  // Validate coordinates
  const validCoordinates = typeof lat === 'number' && !isNaN(lat) && 
                           typeof lng === 'number' && !isNaN(lng);
  
  // Prepare markers with validation
  const markers: MapMarker[] = validCoordinates ? [
    {
      lat,
      lng,
      title: `${locationName} Locksmith Services`,
      slug: locationName.toLowerCase().replace(/\s+/g, '-')
    }
  ] : [];
  
  // Simulate map loading for better UX
  useEffect(() => {
    if (!validCoordinates) {
      console.error("Invalid map coordinates:", { lat, lng });
      setMapReady(true);
      return;
    }

    const timer = setTimeout(() => {
      setMapReady(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [validCoordinates, lat, lng]);

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
        ) : !validCoordinates ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <MapError error={`Invalid coordinates for ${locationName}`} />
          </div>
        ) : (
          <ErrorBoundary FallbackComponent={MapErrorFallback}>
            <GoogleMapsProvider>
              <GoogleMap
                markers={markers}
                showAllMarkers={true}
                zoom={14}
                center={{ lat, lng }}
                fitBounds={false}
              />
            </GoogleMapsProvider>
          </ErrorBoundary>
        )}
      </div>
    </div>
  );
};

export default memo(ServiceAreaMap);
