
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const AccessControl = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Access Control Systems"
        description="Professional access control system installation and maintenance by certified technicians. Expert security solutions for your business."
      />
      <ServicesFeatures />
      <ServicesProof />
      <ServicesCTA />
    </main>
  );
};

export default AccessControl;
