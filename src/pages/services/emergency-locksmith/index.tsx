
import React from 'react';
import ServicesGrid from '@/components/sections/services/ServicesGrid';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';

const EmergencyLocksmith = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="24/7 Emergency Locksmith Services"
        description="Professional emergency locksmith services available 24/7. Fast response times and expert solutions for all your lockout emergencies."
      />
      <ServicesGrid />
      <ServicesFeatures />
      <ServicesProof />
      <ServicesCTA />
    </main>
  );
};

export default EmergencyLocksmith;
