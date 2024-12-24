import React from "react";
import PageLayout from "./PageLayout";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceLayoutProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  benefits?: string[];
  service?: string;
  callToAction?: string;
  schema?: Record<string, any>;
}

const ServiceLayout = ({ 
  title, 
  description, 
  children, 
  icon: Icon, 
  benefits,
  service,
  callToAction,
  schema 
}: ServiceLayoutProps) => {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Locksmith & Security LLC",
      "image": "/og-image.png",
      "telephone": "+15513037874",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "North Bergen",
        "addressRegion": "NJ",
        "postalCode": "07047",
        "addressCountry": "US"
      }
    }
  };

  return (
    <PageLayout
      title={title}
      description={description}
      schema={schema || defaultSchema}
      className="min-h-screen"
    >
      <div className="hero-gradient">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto text-center text-white">
            {Icon && <Icon className="w-16 h-16 mx-auto mb-4 text-secondary" />}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg" asChild>
                <a href="tel:5513037874" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  (551) 303-7874
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 text-white hover:bg-white/20">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            {children}
          </div>

          {benefits && (
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">Why Choose Our Service?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                        <span className="text-secondary text-sm">✓</span>
                      </div>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {service && callToAction && (
            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">{callToAction}</h2>
              <p className="text-gray-600 mb-6">
                Professional {service} service available 24/7. Call now for immediate assistance.
              </p>
              <Button size="lg" asChild>
                <a href="tel:5513037874" className="flex items-center justify-center">
                  <Phone className="mr-2" />
                  Call (551) 303-7874
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default ServiceLayout;