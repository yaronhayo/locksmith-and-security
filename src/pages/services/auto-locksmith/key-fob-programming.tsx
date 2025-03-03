
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';
import { keyFobProgrammingServiceSchema, keyFobProgrammingFaqSchema, keyFobProgrammingFaqs } from '@/components/services/key-fob-programming/KeyFobProgrammingSchema';
import KeyFobProgrammingContent from '@/components/services/key-fob-programming/KeyFobProgrammingContent';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { carServiceReviews } from '@/data/reviews/carServiceReviews';
import { relatedAutomotiveServices } from '@/components/services/key-fob-programming/relatedServices';

const KeyFobProgramming = () => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>Key Fob Programming Service | Auto Locksmith Services</title>
        <meta name="description" content="Professional key fob programming by certified technicians. Expert service for all vehicle makes and models with same-day service and fair pricing." />
        <meta name="keywords" content="key fob programming, remote key programming, car key fob, car remote, automotive locksmith, car key programmer" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/auto-locksmith/key-fob-programming" />
      </Helmet>
      
      <SchemaScripts 
        schemas={[
          { type: 'service', data: keyFobProgrammingServiceSchema },
          { type: 'faq', data: keyFobProgrammingFaqSchema }
        ]} 
      />
      
      <EnhancedServicesHero 
        title="Key Fob Programming Service"
        description="Professional key fob programming services for all vehicle makes and models. Our certified technicians provide reliable, efficient solutions at competitive rates."
        serviceName="Key Fob Programming"
        serviceLabel="Auto Locksmith"
      />
      
      <ServicePageContent
        title="Professional Key Fob Programming"
        description="Expert key fob programming services by certified automotive locksmiths"
        serviceName="Key Fob Programming"
        serviceCategory="Auto Locksmith"
        mainContent={<KeyFobProgrammingContent />}
        faqs={keyFobProgrammingFaqs}
        relatedServices={relatedAutomotiveServices}
      />
      
      <ServicesProof reviewsData={carServiceReviews.slice(0, 8)} />
    </main>
  );
};

export default KeyFobProgramming;
