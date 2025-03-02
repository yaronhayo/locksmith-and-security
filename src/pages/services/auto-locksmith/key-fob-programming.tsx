
import React from 'react';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesCTA from '@/components/sections/services/ServicesCTA';
import ServicesFeatures from '@/components/sections/services/ServicesFeatures';
import ServicesProof from '@/components/sections/services/ServicesProof';
import ServicePageContent from '@/components/sections/services/service-page';
import { keyFobProgrammingFaqs, keyFobProgrammingRelatedServices } from '@/components/services/key-fob-programming/KeyFobProgrammingSchema';

const KeyFobProgramming = () => {
  return (
    <main className="flex-grow">
      <ServicesHero 
        title="Key Fob Programming Service"
        description="Professional key fob programming by certified technicians. Expert service for all vehicle makes and models."
      />
      <ServicePageContent
        title="Key Fob Programming Services"
        description="Professional key fob programming for all vehicle makes and models by certified technicians."
        serviceName="Key Fob Programming"
        serviceCategory="auto"
        mainContent={
          <>
            <p>At Locksmith & Security, we provide professional key fob programming services for all types of vehicles. Whether you've purchased a new key fob or need to reprogram an existing one, our skilled technicians can help.</p>
            <p>Our key fob programming service is fast, reliable, and performed by certified automotive locksmiths with years of experience.</p>
          </>
        }
        faqs={keyFobProgrammingFaqs}
        relatedServices={keyFobProgrammingRelatedServices}
      />
      <ServicesFeatures />
      <ServicesProof category="car" />
      <ServicesCTA />
    </main>
  );
};

export default KeyFobProgramming;
