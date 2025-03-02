
import { useState, useEffect, useMemo, Suspense, memo } from 'react';
import GoogleMap from '../map/GoogleMap';
import AreasList from './service-areas/AreasList';
import EmergencyCallout from './service-areas/EmergencyCallout';
import { useLocations } from '@/hooks/useLocations';
import LoadingSpinner from '../LoadingSpinner';
import GoogleMapsProvider from '../providers/GoogleMapsProvider';
import MapError from '../map/MapError';
import { ErrorBoundary } from 'react-error-boundary';
import { Skeleton } from '@/components/ui/skeleton';
import { ServiceAreaLocation } from '@/types/service-area';

const MapLoadingPlaceholder = () => (
  <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner size="lg" text="Loading map..." />
    </div>
  </div>
);

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
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const { data: locations, isLoading, error } = useLocations();
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    // Set a default timeout to show the map even if IntersectionObserver fails
    const defaultTimeout = setTimeout(() => {
      if (!isMapVisible) {
        console.log("Showing map after timeout");
        setIsMapVisible(true);
      }
    }, 3000);
    
    if (!('IntersectionObserver' in window)) {
      console.log("IntersectionObserver not supported, immediately showing map");
      setIsMapVisible(true);
      clearTimeout(defaultTimeout);
      return;
    }
    
    try {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            console.log("Map section is now visible, loading map");
            setIsMapVisible(true);
            setMapKey(prev => prev + 1);
            observer.disconnect();
            clearTimeout(defaultTimeout);
          }
        },
        { threshold: 0.1 }
      );

      const sectionElement = document.getElementById('service-areas-section');
      if (sectionElement) {
        observer.observe(sectionElement);
        console.log("Observing service-areas-section for visibility");
      } else {
        console.warn("Could not find service-areas-section element");
        setIsMapVisible(true);
        clearTimeout(defaultTimeout);
      }

      return () => {
        observer.disconnect();
        clearTimeout(defaultTimeout);
      };
    } catch (error) {
      console.error("Error setting up intersection observer:", error);
      setIsMapVisible(true);
      clearTimeout(defaultTimeout);
      return () => clearTimeout(defaultTimeout);
    }
  }, []);

  useEffect(() => {
    if (locations) {
      console.log("Locations data loaded:", { count: locations.length });
    }
    if (error) {
      console.error("Error loading locations:", error);
      setMapError(error.message || "Error loading service areas");
    }
  }, [locations, error]);

  const mapMarkers = useMemo(() => {
    if (!locations) return [];
    
    return locations.map(location => ({
      lat: location.lat,
      lng: location.lng,
      title: location.name,
      slug: location.slug
    }));
  }, [locations]);

  const handleMapError = (error: Error) => {
    console.error("Map error caught by error boundary:", error);
    setMapError(error.message || "Error displaying map");
  };

  const handleRetry = () => {
    console.log("Retrying map load...");
    setMapError(null);
    setRetryCount(prev => prev + 1);
    setMapKey(prev => prev + 1);
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50" id="service-areas-section">
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
      <div className="py-20 bg-gray-50" id="service-areas-section">
        <div className="container mx-auto px-4 flex justify-center items-center min-h-[400px]">
          <MapError 
            error={error?.message || 'Error loading service areas'} 
            resetErrorBoundary={handleRetry} 
          />
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50" id="service-areas-section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Our Service Areas</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Professional locksmith services available throughout North Bergen and surrounding areas. 
          Fast response times and reliable service, available 24/7.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="h-full flex">
            <AreasList 
              areas={locations as ServiceAreaLocation[]} 
              hoveredArea={hoveredArea} 
              setHoveredArea={setHoveredArea} 
            />
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full" style={{ minHeight: '500px' }}>
            {isMapVisible ? (
              <ErrorBoundary 
                FallbackComponent={({ error, resetErrorBoundary }) => (
                  <MapError error={error.message} resetErrorBoundary={resetErrorBoundary} />
                )}
                key={`map-error-boundary-${mapKey}-${retryCount}`}
                onError={handleMapError}
                onReset={handleRetry}
              >
                <GoogleMapsProvider>
                  <div className="h-full">
                    <GoogleMap 
                      key={`google-map-${mapKey}-${retryCount}`}
                      markers={mapMarkers}
                      highlightedMarker={hoveredArea}
                      showAllMarkers={true}
                      zoom={11}
                      center={{ lat: 40.7795, lng: -74.0324 }}
                    />
                  </div>
                </GoogleMapsProvider>
              </ErrorBoundary>
            ) : (
              <MapLoadingPlaceholder />
            )}
            
            {mapError && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/90 z-10">
                <MapError 
                  error={mapError} 
                  resetErrorBoundary={handleRetry} 
                />
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16">
        <EmergencyCallout />
      </div>
    </section>
  );
};

export default memo(ServiceAreasSection);
