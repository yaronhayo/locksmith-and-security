
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const GateLocks = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Gate Lock Installation & Repair"
        description="Professional gate lock services. Expert installation and repair of residential gate locks."
      />
      <ServicesFeatures />
      <ServicesProof />
      <ServicesCTA />
    </main>
  );
};

export default GateLocks;
