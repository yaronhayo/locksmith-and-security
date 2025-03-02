
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { commercialReviews } from '@/data/reviews';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';
import { CommercialLockReplacementContent } from '@/components/services/commercial-lock-replacement/CommercialLockReplacementContent';
import { commercialLockReplacementFaqs, commercialLockReplacementServiceSchema, commercialLockReplacementFaqSchema } from '@/components/services/commercial-lock-replacement/CommercialLockReplacementSchema';
import { relatedCommercialServices } from '@/components/services/commercial-lock-replacement/relatedServices';

const CommercialLockReplacement = () => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>Professional Commercial Lock Replacement | Business Security Solutions</title>
        <meta name="description" content="Expert commercial lock replacement services by certified locksmiths. Upgrade your business security with professional installation of high-grade commercial locks." />
        <meta name="keywords" content="commercial lock replacement, business locks, mortise locks, commercial door hardware, high-security locks, exit devices, ADA compliant locks, panic hardware" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/commercial-locksmith/lock-replacement" />
      </Helmet>
      
      <SchemaScripts 
        schemas={[
          { type: 'service', data: commercialLockReplacementServiceSchema },
          { type: 'faq', data: commercialLockReplacementFaqSchema }
        ]} 
      />
      
      <EnhancedServicesHero 
        title="Commercial Lock Replacement Service"
        description="Professional lock replacement solutions for your business. Our certified technicians provide expert installation of high-quality commercial-grade locks to enhance your business security."
        serviceName="Commercial Lock Replacement"
        serviceLabel="Commercial Locksmith"
      />
      
      <ServicePageContent
        title="Professional Commercial Lock Replacement"
        description="Expert commercial lock replacement solutions for enhanced business security"
        serviceName="Commercial Lock Replacement"
        serviceCategory="Commercial Locksmith"
        mainContent={<CommercialLockReplacementContent />}
        relatedServices={relatedCommercialServices}
        faqs={commercialLockReplacementFaqs}
      />
      
      <ServicesProof reviewsData={commercialReviews.slice(0, 8)} />
    </main>
  );
};

export default CommercialLockReplacement;
