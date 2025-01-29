import React from "react";
import PageLayout from "./PageLayout";
import { createServiceSchema } from "@/schemas/servicesSchema";

interface ServiceLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  isLoading?: boolean;
  serviceName: string;
  serviceUrl: string;
  faqSchema?: Array<{ question: string; answer: string }>;
  serviceArea?: string;
  availability?: string;
}

const ServiceLayout = ({
  title,
  description,
  children,
  keywords,
  canonicalUrl,
  ogImage,
  isLoading = false,
  serviceName,
  serviceUrl,
  faqSchema,
  serviceArea = "North Bergen, NJ and surrounding areas",
  availability = "24/7 Emergency Service Available"
}: ServiceLayoutProps) => {
  const serviceSchema = createServiceSchema({
    serviceName,
    serviceDescription: description,
    serviceUrl,
    imageUrl: ogImage,
    serviceArea,
    availability
  });

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: serviceName, item: serviceUrl }
  ];

  const defaultKeywords = `${serviceName.toLowerCase()}, locksmith ${serviceArea.toLowerCase()}, 24/7 locksmith, emergency locksmith, professional locksmith services`;

  return (
    <PageLayout
      title={title}
      description={description}
      schema={serviceSchema}
      canonicalUrl={canonicalUrl}
      ogImage={ogImage}
      keywords={keywords || defaultKeywords}
      isLoading={isLoading}
      breadcrumbs={breadcrumbs}
      faqSchema={faqSchema}
    >
      {children}
    </PageLayout>
  );
};

export default ServiceLayout;