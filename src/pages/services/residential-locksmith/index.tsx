
import React from 'react';
import ServicesGrid from '@/components/sections/services/ServicesGrid';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const ResidentialLocksmith = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Residential Locksmith Services"
        description="Professional residential locksmith solutions by certified technicians. Expert installation, repair, and maintenance services."
      />
      <ServicesGrid />
      <ServicesFeatures />
      <ServicesProof />
      <ServicesCTA />
    </main>
  );
};

export default ResidentialLocksmith;
