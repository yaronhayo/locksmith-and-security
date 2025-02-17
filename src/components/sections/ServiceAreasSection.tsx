
import { useState } from 'react';
import GoogleMap from '../map/GoogleMap';
import AreasList from './service-areas/AreasList';
import ServiceAreaFeatures from '../service-areas/shared/ServiceAreaFeatures';
import EmergencyCallout from './service-areas/EmergencyCallout';
import { useLocations } from '@/hooks/useLocations';
import LoadingSpinner from '../LoadingSpinner';

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

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-red-500">Error loading service areas. Please try again later.</div>
      </div>
    );
  }

  const mapMarkers = locations?.map(location => ({
    lat: location.lat,
    lng: location.lng,
    title: location.name,
    slug: location.slug
  })) || [];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          Service Areas
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-16">
          Professional locksmith services available throughout North Bergen and surrounding areas in New Jersey. 
          Fast response times and reliable service, available 24/7 for your security needs.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <AreasList 
            areas={locations || []} 
            hoveredArea={hoveredArea} 
            setHoveredArea={setHoveredArea} 
          />
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[600px]">
            <GoogleMap 
              markers={mapMarkers}
              highlightedMarker={hoveredArea}
              showAllMarkers={true}
              zoom={11}
              center={{ lat: 40.7795, lng: -74.0324 }}
            />
          </div>
        </div>

        <ServiceAreaFeatures />
        <EmergencyCallout />
      </div>
    </section>
  );
};

export default ServiceAreasSection;
