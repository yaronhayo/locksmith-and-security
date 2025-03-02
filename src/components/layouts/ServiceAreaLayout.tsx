
import React from 'react';
import PageLayout from './PageLayout';
import { type ServiceAreaProps } from '@/types/routes';

interface ServiceAreaLayoutProps extends ServiceAreaProps {
  children: React.ReactNode;
}

const ServiceAreaLayout: React.FC<ServiceAreaLayoutProps> = ({
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

export default ServiceAreaLayout;
