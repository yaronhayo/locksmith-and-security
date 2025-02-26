
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const EmergencyExitDevice = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Emergency Exit Device Installation"
        description="Professional emergency exit device installation. Expert installation of panic bars and push-to-exit devices."
      />
      <ServicesFeatures />
      <ServicesProof />
      <ServicesCTA />
    </main>
  );
};

export default EmergencyExitDevice;
