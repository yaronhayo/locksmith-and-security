
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import ServicePageContent from '@/components/sections/services/service-page';
import { SchemaScripts } from '@/components/meta/SchemaScripts';
import { Helmet } from 'react-helmet';
import { accessControlSchema, accessControlFAQSchema, accessControlFaqs } from '@/components/services/access-control/AccessControlSchema';
import AccessControlContent from '@/components/services/access-control/AccessControlContent';
import ServicesProof from '@/components/sections/services/ServicesProof';
import { commercialReviews } from '@/data/reviews';

const AccessControl = () => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>Access Control Systems | Commercial Security Solutions</title>
        <meta name="description" content="Professional access control system design, installation and maintenance for enhanced business security by certified technicians." />
        <meta name="keywords" content="access control, door access control, card readers, biometric access, electronic locks, keyless entry, commercial security" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/commercial-locksmith/access-control" />
      </Helmet>
      
      <SchemaScripts 
        schemas={[
          { type: 'service', data: accessControlSchema },
          accessControlFAQSchema
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
      />
      
      <ServicesProof reviewsData={commercialReviews.slice(0, 8)} />
    </main>
  );
};

export default AccessControl;
