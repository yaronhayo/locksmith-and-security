import { useState } from 'react';
import { Clock, Phone, Shield } from 'lucide-react';
import Map from '../Map';
import AreasList from './service-areas/AreasList';
import ServiceFeatures from './service-areas/ServiceFeatures';
import EmergencyCallout from './service-areas/EmergencyCallout';
import AreaHeader from './service-areas/AreaHeader';
import AreaFeature from './service-areas/AreaFeature';
import { Area, Feature, MapMarker } from './service-areas/types';

const areas: Area[] = [
  {
    name: "North Bergen",
    slug: "north-bergen",
    description: "Professional locksmith services in North Bergen, NJ",
    lat: 40.7828,
    lng: -74.0297
  },
  {
    name: "Jersey City",
    slug: "jersey-city",
    description: "Expert locksmith solutions in Jersey City, NJ",
    lat: 40.7282,
    lng: -74.0776
  },
  {
    name: "Union City",
    slug: "union-city",
    description: "Reliable locksmith services in Union City, NJ",
    lat: 40.7795,
    lng: -74.0246
  },
  {
    name: "West New York",
    slug: "west-new-york",
    description: "Trusted locksmith services in West New York, NJ",
    lat: 40.7857,
    lng: -74.0143
  },
  {
    name: "Secaucus",
    slug: "secaucus",
    description: "Professional locksmith services in Secaucus, NJ",
    lat: 40.7799,
    lng: -74.0566
  },
  {
    name: "Weehawken",
    slug: "weehawken",
    description: "Expert locksmith solutions in Weehawken, NJ",
    lat: 40.7684,
    lng: -74.0287
  },
  {
    name: "Hoboken",
    slug: "hoboken",
    description: "Reliable locksmith services in Hoboken, NJ",
    lat: 40.7453,
    lng: -74.0279
  },
  {
    name: "Guttenberg",
    slug: "guttenberg",
    description: "Trusted locksmith services in Guttenberg, NJ",
    lat: 40.7920,
    lng: -74.0037
  }
];

const features: Feature[] = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Emergency locksmith services available around the clock in all service areas"
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Professional locksmith services backed by full insurance coverage"
  },
  {
    icon: Phone,
    title: "Fast Response",
    description: "15-30 minute response time throughout our service areas"
  }
];

const ServiceAreasSection = () => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  
  const markers: MapMarker[] = areas.map(area => ({
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
            areas={areas} 
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
