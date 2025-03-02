
import React from 'react';
import PageLayout from "@/components/layouts/PageLayout";
import AccessControlContent from "@/components/services/access-control/AccessControlContent";
import { accessControlSchema } from '@/components/services/access-control/AccessControlSchema';

const AccessControl = () => {
  return (
    <PageLayout
      title="Access Control Systems | Commercial Security Solutions"
      description="Professional access control system design, installation and maintenance for enhanced business security by certified technicians."
      schema={accessControlSchema}
    >
      <AccessControlContent />
    </PageLayout>
  );
};

export default AccessControl;
