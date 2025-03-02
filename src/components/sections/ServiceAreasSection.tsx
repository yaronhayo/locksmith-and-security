
import { useState, useEffect, useMemo, lazy, Suspense, memo } from 'react';
import GoogleMap from '../map/GoogleMap';
import AreasList from './service-areas/AreasList';
import EmergencyCallout from './service-areas/EmergencyCallout';
import { useLocations } from '@/hooks/useLocations';
import LoadingSpinner from '../LoadingSpinner';
import GoogleMapsProvider from '../providers/GoogleMapsProvider';
import MapError from '../map/MapError';
import { ErrorBoundary } from 'react-error-boundary';
import { Skeleton } from '@/components/ui/skeleton';

// Create a map loading component
const MapLoadingPlaceholder = () => (
  <div className="h-[600px] bg-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-gray-500">Loading map...</p>
    </div>
  </div>
);

// Create a locations loading component
const LocationsLoadingPlaceholder = () => (
  <div className="space-y-4">
    <Skeleton className="h-8 w-3/4" />
    <div className="space-y-2">
      {Array(5).fill(0).map((_, i) => (
        <Skeleton key={i} className="h-12 w-full" />
      ))}
    </div>
  </div>
);

const ServiceAreasSection = () => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [mapKey, setMapKey] = useState(0); // Force re-render key
  const { data: locations, isLoading, error } = useLocations();

  // Log locations data for debugging
  useEffect(() => {
    if (locations) {
      console.log("Locations data loaded:", { count: locations.length });
    }
    if (error) {
      console.error("Error loading locations:", error);
    }
  }, [locations, error]);

  // Force re-render map after component is fully mounted
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapKey(prev => prev + 1);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Memoize map markers to prevent unnecessary recalculations
  const mapMarkers = useMemo(() => {
    if (!locations) return [];
    
    return locations.map(location => ({
      lat: location.lat,
      lng: location.lng,
      title: location.name,
      slug: location.slug
    }));
  }, [locations]);

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-2/3 mx-auto mb-4" />
            <Skeleton className="h-6 w-3/4 mx-auto" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <LocationsLoadingPlaceholder />
            <MapLoadingPlaceholder />
          </div>
        </div>
      </section>
    );
  }

  if (error || !locations) {
    return (
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 flex justify-center items-center min-h-[400px]">
          <MapError error={error?.message || 'Error loading service areas'} />
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Our Service Areas</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Professional locksmith services available throughout North Bergen and surrounding areas. 
          Fast response times and reliable service, available 24/7.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <AreasList 
            areas={locations} 
            hoveredArea={hoveredArea} 
            setHoveredArea={setHoveredArea} 
          />
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{ height: '600px' }}>
            <ErrorBoundary FallbackComponent={MapError} key={`map-error-boundary-${mapKey}`}>
              <GoogleMapsProvider>
                <GoogleMap 
                  key={`google-map-${mapKey}`}
                  markers={mapMarkers}
                  highlightedMarker={hoveredArea}
                  showAllMarkers={true}
                  zoom={11}
                  center={{ lat: 40.7795, lng: -74.0324 }}
                />
              </GoogleMapsProvider>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ServiceAreasSection);
