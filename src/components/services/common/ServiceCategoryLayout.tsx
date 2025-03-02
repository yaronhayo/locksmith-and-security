
import React from 'react';
import { useLocation } from 'react-router-dom';
import PageLayout from '@/components/layouts/PageLayout';
import CategoryHero from '@/components/sections/services/CategoryHero';
import { mapServicePathToOption } from '@/utils/servicePathMapper';

interface ServiceCategoryLayoutProps {
  title: string;
  description: string;
  keywords?: string;
  category: 'emergency' | 'residential' | 'commercial' | 'auto';
  children: React.ReactNode;
  features: {
    title: string;
    description: string;
  }[];
  canonicalUrl?: string;
}

const ServiceCategoryLayout: React.FC<ServiceCategoryLayoutProps> = ({
  title,
  description,
  keywords,
  category,
  children,
  features,
  canonicalUrl
}) => {
  const location = useLocation();
  const preselectedService = mapServicePathToOption(location.pathname);
  
  return (
    <PageLayout
      title={title}
      description={description}
      keywords={keywords}
      canonicalUrl={canonicalUrl}
    >
      <CategoryHero
        title={title}
        description={description}
        category={category}
        features={features}
        preselectedService={preselectedService}
      />
      
      {children}
    </PageLayout>
  );
};

export default ServiceCategoryLayout;
