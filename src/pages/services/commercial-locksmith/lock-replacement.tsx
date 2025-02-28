
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const CommercialLockReplacement = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Commercial Lock Replacement"
        description="Professional commercial lock replacement by certified technicians. Expert installation of high-security commercial grade locks."
      />
      <ServicesFeatures />
      <ServicesProof category="commercial" />
      <ServicesCTA />
    </main>
  );
};

export default CommercialLockReplacement;
