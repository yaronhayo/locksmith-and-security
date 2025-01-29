import React from "react";
import PageLayout from "./PageLayout";
import { createServiceSchema } from "@/schemas/servicesSchema";
import { cn } from "@/lib/utils";

interface ServiceLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  heroTitle?: string;
  heroDescription?: string;
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string;
  isLoading?: boolean;
  serviceName: string;
  serviceUrl: string;
  faqSchema?: Array<{ question: string; answer: string }>;
  serviceArea?: string;
  servicePrice?: string;
  availability?: string;
}

const ServiceLayout = ({
  title,
  description,
  children,
  className,
  heroTitle,
  heroDescription,
  canonicalUrl,
  ogImage,
  keywords,
  isLoading = false,
  serviceName,
  serviceUrl,
  faqSchema,
  serviceArea = "North Bergen, NJ and surrounding areas",
  servicePrice = "Varies based on service requirements",
  availability = "24/7 Emergency Service Available"
}: ServiceLayoutProps) => {
  const serviceSchema = createServiceSchema({
    serviceName,
    serviceDescription: description,
    serviceUrl,
    imageUrl: ogImage,
    serviceArea,
    servicePrice,
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
      title={`${title} | Professional Locksmith Services in North Bergen, NJ`}
      description={description}
      className={cn(className)}
      heroTitle={heroTitle}
      heroDescription={heroDescription}
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