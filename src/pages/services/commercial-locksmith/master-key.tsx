
import React from 'react';
import EnhancedServicesHero from '@/components/sections/services/EnhancedServicesHero';
import MasterKeyContent from '@/components/services/master-key/MasterKeyContent';
import { Helmet } from 'react-helmet';

const MasterKey = () => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>Master Key Systems | Strategic Access Control for Businesses</title>
        <meta name="description" content="Implement sophisticated access hierarchies that simplify key management while enhancing security. Custom-designed master key systems for any facility." />
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
