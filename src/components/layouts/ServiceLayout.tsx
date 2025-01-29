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
}: ServiceLayoutProps) => {
  const serviceSchema = createServiceSchema({
    serviceName,
    serviceDescription: description,
    serviceUrl,
    imageUrl: ogImage
  });

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: serviceName, item: serviceUrl }
  ];

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
      keywords={keywords}
      isLoading={isLoading}
      breadcrumbs={breadcrumbs}
    >
      {children}
    </PageLayout>
  );
};

export default ServiceLayout;