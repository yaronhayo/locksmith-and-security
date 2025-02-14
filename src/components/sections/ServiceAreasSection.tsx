
import { useState } from 'react';
import { motion } from 'framer-motion';
import Map from '../Map';
import AreasList from './service-areas/AreasList';
import ServiceAreaFeatures from '../service-areas/shared/ServiceAreaFeatures';
import EmergencyCallout from './service-areas/EmergencyCallout';
import { MapMarker, ServiceAreaLocation } from '@/types/service-area';
import { useLocations } from '@/hooks/useLocations';
import LoadingSpinner from '../LoadingSpinner';
import { useMapConfig } from '@/hooks/useMap';

const ServiceAreasSection = () => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const { data: locations, isLoading: locationsLoading, error: locationsError } = useLocations();
  const { apiKey, loadError: mapError, isRetrying } = useMapConfig();
  
  // Map locations to markers format with required title
  const markers: MapMarker[] = locations?.map(area => ({
    lat: area.lat,
    lng: area.lng,
    title: area.name,
    slug: area.slug
  })) || [];

  const isLoading = locationsLoading || isRetrying;
  const error = locationsError || mapError;

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

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Service Areas
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional locksmith services available throughout North Bergen and surrounding areas in New Jersey. 
            Fast response times and reliable service, available 24/7 for your security needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <AreasList 
            areas={locations || []} 
            hoveredArea={hoveredArea} 
            setHoveredArea={setHoveredArea} 
          />
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {apiKey ? (
              <Map 
                markers={markers} 
                hoveredMarker={hoveredArea}
                zoom={11}
                center={{ lat: 40.7795, lng: -74.0324 }}
              />
            ) : (
              <div className="flex justify-center items-center h-[400px]">
                <LoadingSpinner />
              </div>
            )}
          </motion.div>
        </div>

        <ServiceAreaFeatures />
        <EmergencyCallout />
      </div>
    </section>
  );
};

export default ServiceAreasSection;
