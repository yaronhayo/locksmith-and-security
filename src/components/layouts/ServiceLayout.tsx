
import React from 'react';
import PageLayout from './PageLayout';
import { type ServiceProps } from '@/types/routes';

interface ServiceLayoutProps extends ServiceProps {
  children: React.ReactNode;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  description,
  breadcrumbs,
  children,
  modifiedDate,
  heroTitle,
  heroDescription,
  schema,
}) => {
  return (
    <PageLayout
      title={title}
      description={description}
      breadcrumbs={breadcrumbs}
      modifiedDate={modifiedDate}
      heroTitle={heroTitle}
      heroDescription={heroDescription}
      schema={schema}
      hideBreadcrumbs={false} // Explicitly set to false to show breadcrumbs in PageLayout
    >
      {children}
    </PageLayout>
  );
};

export default ServiceLayout;
