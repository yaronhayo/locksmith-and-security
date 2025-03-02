
import React from 'react';
import PageLayout from './PageLayout';
import { PageMetaProps } from '@/routes/types';

interface ServiceLayoutProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product" | "profile" | "book";
  children: React.ReactNode;
  schema?: any;
  breadcrumbs?: Array<{name: string, path: string}>;
  customBreadcrumbs?: Array<{name: string, path: string}>;
  noindex?: boolean;
  nofollow?: boolean;
  modifiedDate?: string;
  heroTitle?: string;
  heroDescription?: string;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType,
  children,
  schema,
  breadcrumbs,
  customBreadcrumbs,
  noindex,
  nofollow,
  modifiedDate,
  heroTitle,
  heroDescription,
}) => {
  return (
    <PageLayout
      title={title}
      description={description}
      keywords={keywords}
      canonicalUrl={canonicalUrl}
      ogImage={ogImage}
      ogType={ogType}
      breadcrumbs={breadcrumbs}
      customBreadcrumbs={customBreadcrumbs}
      noindex={noindex}
      nofollow={nofollow}
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
