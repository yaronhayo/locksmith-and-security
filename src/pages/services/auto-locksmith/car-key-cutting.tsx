
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { carServiceReviews } from '@/data/reviews/carServiceReviews';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';
import { CarKeyContent } from '@/components/services/car-key-cutting/CarKeyContent';
import { carKeyFaqs, carKeyServiceSchema, carKeyFaqSchema } from '@/components/services/car-key-cutting/CarKeySchema';
import { relatedAutomotiveServices } from '@/components/services/car-key-cutting/relatedServices';

const CarKeyCutting = () => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>Precision Car Key Cutting | Perfect-Fit Keys for Any Vehicle</title>
        <meta name="description" content="Experience the perfect key fit with our precision cutting technology. Expert technicians create flawlessly operating keys for any vehicle make and model." />
        <meta name="keywords" content="car key cutting, auto locksmith, car key duplication, car key copy, vehicle key cutting, auto keys" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/auto-locksmith/car-key-cutting" />
      </Helmet>
      
      <SchemaScripts 
        schemas={[
          { type: 'service', data: carKeyServiceSchema },
          { type: 'faq', data: carKeyFaqSchema }
        ]} 
      />
      
      <EnhancedServicesHero 
        title="Car Key Cutting Service"
        description="Professional car key cutting for all vehicle makes and models. Our certified technicians use advanced equipment to create precise, reliable car keys at competitive rates."
        serviceName="Car Key Cutting"
        serviceLabel="Auto Locksmith"
      />
      
      <ServicePageContent
        title="Professional Car Key Cutting Services"
        description="Expert car key cutting by certified automotive locksmiths"
        serviceName="Car Key Cutting"
        serviceCategory="Auto Locksmith"
        mainContent={<CarKeyContent />}
        faqs={carKeyFaqs}
        relatedServices={relatedAutomotiveServices}
      />
      
      <ServicesProof reviewsData={carServiceReviews.slice(0, 8)} />
    </main>
  );
};

export default CarKeyCutting;
