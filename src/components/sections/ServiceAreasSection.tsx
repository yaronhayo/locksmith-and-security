
import { useState, useEffect, useMemo, memo } from 'react';
import GoogleMap from '../map/GoogleMap';
import AreasList from './service-areas/AreasList';
import { useLocations } from '@/hooks/useLocations';
import LoadingSpinner from '../LoadingSpinner';
import GoogleMapsProvider from '../providers/GoogleMapsProvider';
import MapError from '../map/MapError';
import { ErrorBoundary } from 'react-error-boundary';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';

// Create a map loading component
const MapLoadingPlaceholder = () => (
  <div className="h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] bg-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner size="lg" text="Loading map..." />
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
  const [isMapVisible, setIsMapVisible] = useState(false);
  const { data: locations, isLoading, error } = useLocations();

  // Set up intersection observer to lazy load the map when it comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsMapVisible(true);
          // Force re-render map after it becomes visible
          setMapKey(prev => prev + 1);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const sectionElement = document.getElementById('service-areas-section');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      observer.disconnect();
    };
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
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50" id="service-areas-section">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Skeleton className="h-8 sm:h-9 md:h-10 w-2/3 mx-auto mb-3 sm:mb-4" />
            <Skeleton className="h-5 sm:h-6 w-3/4 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
            <LocationsLoadingPlaceholder />
            <MapLoadingPlaceholder />
          </div>
        </div>
      </section>
    );
  }

  if (error || !locations) {
    return (
      <div className="py-12 sm:py-16 md:py-20 bg-gray-50" id="service-areas-section">
        <div className="container mx-auto px-4 sm:px-6 flex justify-center items-center min-h-[400px]">
          <MapError error={error?.message || 'Error loading service areas'} />
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50" id="service-areas-section">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-primary">Our Service Areas</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Professional locksmith services available throughout North Bergen and surrounding areas. 
            Fast response times and reliable service, available 24/7.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AreasList 
              areas={locations} 
              hoveredArea={hoveredArea} 
              setHoveredArea={setHoveredArea} 
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px]"
          >
            {isMapVisible ? (
              <ErrorBoundary FallbackComponent={MapError} key={`map-error-boundary-${mapKey}`}>
                <GoogleMapsProvider>
                  <GoogleMap 
                    key={`google-map-${mapKey}`}
                    markers={mapMarkers}
                    highlightedMarker={hoveredArea}
                    showAllMarkers={true}
                    zoom={11}
                    center={{ lat: 40.7795, lng: -74.0324 }}
                    fitBounds={true}
                  />
                </GoogleMapsProvider>
              </ErrorBoundary>
            ) : (
              <MapLoadingPlaceholder />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(ServiceAreasSection);
