
import React from 'react';
import SEOHead from './SEOHead';
import { createServiceSchema } from './schema/ServiceSchema';
import { createFAQSchema } from './schema/FAQSchema';
import { useSettings } from '@/hooks/useSettings';

interface Question {
  question: string;
  answer: string;
}

interface ServicePageHeadProps {
  title: string;
  description: string;
  serviceName: string;
  serviceCategory: string;
  mainKeywords: string;
  canonicalUrl: string;
  ogImage?: string;
  faqs?: Question[];
  modifiedDate?: string;
  publishedDate?: string;
  noindex?: boolean;
  relatedServices?: string[];
}

const ServicePageHead: React.FC<ServicePageHeadProps> = ({
  title,
  description,
  serviceName,
  serviceCategory,
  mainKeywords,
  canonicalUrl,
  ogImage = "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
  faqs = [],
  modifiedDate = new Date().toISOString(),
  publishedDate,
  noindex = false,
  relatedServices = []
}) => {
  const settings = useSettings();
  const baseUrl = "https://247locksmithandsecurity.com";
  
  // Build schemas
  const schemas = [
    {
      type: 'service',
      data: createServiceSchema({
        title,
        description,
        baseUrl,
        settings: settings.data || {},
        canonicalUrl
      })
    }
  ];
  
  // Add FAQ schema if FAQs exist
  if (faqs && faqs.length > 0) {
    schemas.push({
      type: 'faq',
      data: createFAQSchema({ questions: faqs }).data
    });
  }

  return (
    <SEOHead
      title={title}
      description={description}
      keywords={mainKeywords}
      canonicalUrl={canonicalUrl}
      schemas={schemas}
      ogImage={ogImage}
      noindex={noindex}
      nofollow={false}
      modifiedDate={modifiedDate}
      publishedDate={publishedDate}
      ogType="website"
      twitterCardType="summary_large_image"
      baseUrl={baseUrl}
    />
  );
};

export default ServicePageHead;
