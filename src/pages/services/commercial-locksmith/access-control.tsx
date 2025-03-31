
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';
import { accessControlSchema, accessControlFAQSchema, accessControlFaqs } from '@/components/services/access-control/AccessControlSchema';
import AccessControlContent from '@/components/services/access-control/AccessControlContent';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { commercialReviews } from '@/data/reviews/commercialReviews';
import { relatedCommercialServices } from '@/components/services/access-control/relatedServices';

const AccessControl = () => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>Access Control Systems | Modern Security Management Solutions</title>
        <meta name="description" content="Gain complete visibility and control over who enters your facility with customizable electronic access solutions that eliminate key management headaches." />
        <meta name="keywords" content="access control, door access control, card readers, biometric access, electronic locks, keyless entry, commercial security" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/commercial-locksmith/access-control" />
      </Helmet>
      
      <SchemaScripts 
        schemas={[
          { type: 'service', data: accessControlSchema },
          { type: 'faq', data: accessControlFAQSchema }
        ]} 
      />
      
      <EnhancedServicesHero 
        title="Access Control Systems"
        description="Professional access control system design, installation and maintenance for enhanced business security. Our certified technicians deliver customized solutions for any facility."
        serviceName="Access Control"
        serviceLabel="Commercial Security"
      />
      
      <ServicePageContent
        title="Professional Access Control Solutions"
        description="Expert installation and maintenance of advanced access control systems"
        serviceName="Access Control"
        serviceCategory="Commercial Locksmith"
        mainContent={<AccessControlContent />}
        faqs={accessControlFaqs}
        relatedServices={relatedCommercialServices}
      />
      
      <ServicesProof reviewsData={commercialReviews.slice(0, 8)} />
    </main>
  );
};

export default AccessControl;
