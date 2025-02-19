
import { useState } from 'react';
import GoogleMap from '../map/GoogleMap';
import AreasList from './service-areas/AreasList';
import ServiceAreaFeatures from '../service-areas/shared/ServiceAreaFeatures';
import EmergencyCallout from './service-areas/EmergencyCallout';
import { useLocations } from '@/hooks/useLocations';
import LoadingSpinner from '../LoadingSpinner';
import GoogleMapsProvider from '../providers/GoogleMapsProvider';

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
          Professional locksmith services available throughout North Bergen and surrounding areas. 
          Fast response times and reliable service, available 24/7.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <AreasList 
            areas={locations} 
            hoveredArea={hoveredArea} 
            setHoveredArea={setHoveredArea} 
          />
          
          <div style={{ height: '600px' }} className="bg-white rounded-xl shadow-lg overflow-hidden">
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
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
