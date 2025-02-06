import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Map from '../Map';
import AreasList from './service-areas/AreasList';
import ServiceAreaFeatures from '../service-areas/shared/ServiceAreaFeatures';
import EmergencyCallout from './service-areas/EmergencyCallout';
import { supabase } from '@/integrations/supabase/client';
import { MapLocation } from '@/types/map';
import { ServiceAreaLocation } from '../service-areas/types';

const ServiceAreasSection = () => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [locations, setLocations] = useState<ServiceAreaLocation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const { data, error } = await supabase
          .from('locations')
          .select('*');
        
        if (error) {
          console.error('Error fetching locations:', error);
          return;
        }

        if (data) {
          setLocations(data.map(location => ({
            name: location.name,
            slug: location.slug,
            description: location.description || '',
            lat: Number(location.lat),
            lng: Number(location.lng)
          })));
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocations();
  }, []);

  // Map locations to markers format
  const markers: MapLocation[] = locations.map(area => ({
    lat: area.lat,
    lng: area.lng,
    title: area.name,
    slug: area.slug
  }));

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
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
            areas={locations} 
            hoveredArea={hoveredArea} 
            setHoveredArea={setHoveredArea} 
          />
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <Map 
              markers={markers} 
              hoveredMarker={hoveredArea}
              zoom={11}
              center={{ lat: 40.7795, lng: -74.0324 }}
            />
          </motion.div>
        </div>

        <ServiceAreaFeatures />
        <EmergencyCallout />
      </div>
    </section>
  );
};

export default ServiceAreasSection;