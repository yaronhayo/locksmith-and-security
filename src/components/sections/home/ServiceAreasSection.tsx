
import { useState } from 'react';
import { useLocations } from '@/hooks/useLocations';
import LoadingSpinner from '@/components/LoadingSpinner';
import GoogleMapsProvider from '@/components/providers/GoogleMapsProvider';
import GoogleMap from '@/components/map/GoogleMap';
import AreasList from '@/components/sections/service-areas/AreasList';
import { ServiceAreaLocation } from '@/types/service-area';

const ServiceAreasSection = () => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const { data: locations, isLoading, error } = useLocations();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !locations) {
    console.error('Error loading locations:', error);
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-red-500">Error loading service areas. Please try again later.</div>
      </div>
    );
  }

  const mapMarkers = locations.map(location => ({
    lat: location.lat,
    lng: location.lng,
    title: location.name,
    slug: location.slug
  }));

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Our Service Areas</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We provide professional locksmith services throughout North Bergen and surrounding areas. 
          Fast response times and reliable service, available 24/7.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="h-[500px] lg:h-[600px] relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <GoogleMapsProvider>
              <GoogleMap 
                markers={mapMarkers}
                highlightedMarker={hoveredArea}
                showAllMarkers={true}
                zoom={11}
                center={{ lat: 40.7795, lng: -74.0324 }}
              />
            </GoogleMapsProvider>
          </div>
          
          <AreasList 
            areas={locations as ServiceAreaLocation[]} 
            hoveredArea={hoveredArea} 
            setHoveredArea={setHoveredArea}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
