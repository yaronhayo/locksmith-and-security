
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const CarKeyDuplicate = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Car Key Duplication"
        description="Professional car key duplication services. Fast and accurate key copying for all vehicle types."
      />
      <ServicesFeatures />
      <ServicesProof />
      <ServicesCTA />
    </main>
  );
};

export default CarKeyDuplicate;
