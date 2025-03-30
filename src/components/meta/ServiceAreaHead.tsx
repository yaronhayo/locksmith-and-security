
import React from 'react';
import SEOHead from './SEOHead';
import { createServiceAreaSchema } from './schema/ServiceAreaSchema';
import { createFAQSchema } from './schema/FAQSchema';
import { useSettings } from '@/hooks/useSettings';

interface Question {
  question: string;
  answer: string;
}

interface ServiceAreaHeadProps {
  areaName: string;
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage?: string;
  faqs?: Question[];
  geoCoordinates?: {
    latitude: number;
    longitude: number;
  };
  services?: string[];
  modifiedDate?: string;
  publishedDate?: string;
  noindex?: boolean;
  areaServedRegion?: string;
}

const ServiceAreaHead: React.FC<ServiceAreaHeadProps> = ({
  areaName,
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "/lovable-uploads/1bbeb1e6-5581-4e09-9600-7d1859bb17c5.png",
  faqs = [],
  geoCoordinates,
  services = [],
  modifiedDate = new Date().toISOString(),
  publishedDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString(),
  noindex = false,
  areaServedRegion = "NJ"
}) => {
  const settings = useSettings();
  const baseUrl = "https://247locksmithandsecurity.com";
  
  // Build schemas
  const schemas = [
    {
      type: 'serviceArea',
      data: createServiceAreaSchema({
        areaName,
        areaDescription: description,
        baseUrl,
        settings: settings.data || {},
        canonicalUrl,
        services,
        geoCoordinates,
        dateModified: modifiedDate,
        datePublished: publishedDate,
        areaServedRegion
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

  // Construct geoRegion from state
  const geoRegion = `US-${areaServedRegion}`;
  
  // ICBM format for coordinates
  const icbm = geoCoordinates ? `${geoCoordinates.latitude}, ${geoCoordinates.longitude}` : undefined;
  
  // GeoPosition format
  const geoPosition = geoCoordinates ? `${geoCoordinates.latitude};${geoCoordinates.longitude}` : undefined;

  // Optimize title for SEO (50-60 characters is ideal)
  const optimizedTitle = title.length > 60 ? title.substring(0, 57) + "..." : title;
  
  // Optimize description for SEO (150-155 characters is ideal)
  const optimizedDescription = description.length > 155 ? description.substring(0, 152) + "..." : description;

  return (
    <SEOHead
      title={optimizedTitle}
      description={optimizedDescription}
      keywords={keywords}
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
      geoRegion={geoRegion}
      geoPlaceName={areaName}
      geoPosition={geoPosition}
      icbm={icbm}
      author={`${settings.data?.company_name || 'Locksmith & Security LLC'} - ${areaName}`}
    />
  );
};

export default ServiceAreaHead;
