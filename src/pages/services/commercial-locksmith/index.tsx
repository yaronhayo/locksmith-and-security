
import React from 'react';
import ServicesGrid from '@/components/sections/services/ServicesGrid';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const CommercialLocksmith = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Commercial Locksmith Services"
        description="Professional commercial locksmith solutions for businesses. Advanced security systems and expert installation services."
      />
      <ServicesGrid />
      <ServicesFeatures />
      <ServicesProof />
      <ServicesCTA />
    </main>
  );
};

export default CommercialLocksmith;
