
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import MasterKeyContent from '@/components/services/master-key/MasterKeyContent';
import { Helmet } from 'react-helmet';

const MasterKey = () => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>Master Key System Design & Installation | Locksmith & Security LLC</title>
        <meta name="description" content="Professional master key system design and implementation by certified technicians. Expert access control solutions for your business." />
        <meta name="keywords" content="master key system, commercial locksmith, access control, key hierarchy, restricted keyways, business security" />
        <link rel="canonical" href="https://247locksmithandsecurity.com/services/commercial-locksmith/master-key" />
      </Helmet>
      
      <EnhancedServicesHero 
        title="Master Key System Design & Installation"
        description="Professional master key system design and implementation by certified technicians. Expert access control solutions for your business."
        image="/lovable-uploads/88d354ba-8149-4bb1-9347-d5d0ff65dfe5.png"
        serviceName="Master Key System"
        serviceLabel="Commercial Locksmith Service"
      />
      
      <MasterKeyContent />
    </main>
  );
};

export default MasterKey;
