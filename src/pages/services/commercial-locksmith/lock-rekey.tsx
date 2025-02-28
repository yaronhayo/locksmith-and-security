
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const CommercialLockRekey = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Commercial Lock Rekey"
        description="Professional commercial lock rekeying by certified technicians. Expert security solutions for your business."
      />
      <ServicesFeatures />
      <ServicesProof category="commercial" />
      <ServicesCTA />
    </main>
  );
};

export default CommercialLockRekey;
