import React from "react";
import PageLayout from "./PageLayout";
import { createServiceSchema } from "@/schemas/servicesSchema";
import { LucideIcon } from "lucide-react";

export interface ServiceLayoutProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  isLoading?: boolean;
  serviceName: string;
  serviceUrl: string;
  faqSchema?: Array<{ question: string; answer: string }>;
  serviceArea?: string;
  availability?: string;
  benefits?: string[];
  icon?: LucideIcon;
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
  availability = "24/7 Emergency Service Available",
  benefits
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
    >
      {children}
      {benefits && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Service Benefits</h3>
          <ul className="list-disc pl-5 space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}
    </PageLayout>
  );
};

export default ServiceLayout;