
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceAreasProps {
  serviceType: 'business' | 'storage-unit' | 'house' | 'car' | 'general';
  className?: string;
}

const ServiceAreas = ({ serviceType, className }: ServiceAreasProps) => {
  return (
    <div className={className}>
      <h3 className="text-2xl font-bold mb-4 mt-8">Service Areas</h3>
      <p className="mb-4">
        We provide {serviceType === 'general' ? 'locksmith' : `${serviceType} lockout`} services throughout North Bergen, Jersey City, Hoboken, Weehawken, Union City, West New York, Secaucus, Guttenberg, and surrounding areas in New Jersey. Our mobile locksmiths come to your location with all the necessary equipment to resolve your {serviceType === 'general' ? 'locksmith' : `${serviceType} lockout`} situation.
      </p>
    </div>
  );
};

export default ServiceAreas;
