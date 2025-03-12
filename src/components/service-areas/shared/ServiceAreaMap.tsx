
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
  
  useEffect(() => {
    finishRenderTracking();
  }, [finishRenderTracking]);
  
  // Validate coordinates
  if (typeof lat !== 'number' || typeof lng !== 'number' || isNaN(lat) || isNaN(lng)) {
    console.error(`Invalid coordinates for ${locationName}: lat=${lat}, lng=${lng}`);
    return (
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Serving {locationName}, NJ</h3>
        </div>
        <div className="h-[400px] flex items-center justify-center">
          <MapError error={`Invalid coordinates for ${locationName}`} />
        </div>
      </div>
    );
  }
  
  const markers: MapMarker[] = [
    {
      lat,
      lng,
      title: `${locationName} Locksmith Services`,
      slug: locationName.toLowerCase().replace(/\s+/g, '-')
    }
  ];
  
  console.log(`ServiceAreaMap: Creating map for ${locationName} at ${lat},${lng}`);
  
  // Simulate map loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapReady(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

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
          <ErrorBoundary FallbackComponent={MapError}>
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
