import { useState } from 'react';
import { Clock, Phone, Shield } from 'lucide-react';
import Map from '../Map';
import AreasList from './service-areas/AreasList';
import AreaFeature from './service-areas/AreaFeature';
import EmergencyCallout from './service-areas/EmergencyCallout';
import AreaHeader from './service-areas/AreaHeader';
import { serviceAreas, features } from '@/data/serviceAreasData';

const ServiceAreasSection = () => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  
  const markers = serviceAreas.map(area => ({
    lat: area.lat,
    lng: area.lng,
    title: area.name,
    slug: area.slug
  }));

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AreaHeader />

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <AreasList 
            areas={serviceAreas} 
            hoveredArea={hoveredArea} 
            setHoveredArea={setHoveredArea} 
          />
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Map markers={markers} hoveredMarker={hoveredArea} />
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <AreaFeature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        <EmergencyCallout />
      </div>
    </section>
  );
};

export default ServiceAreasSection;