import { ReactNode } from "react";
import PageLayout from "@/components/layouts/PageLayout";
import ServiceAreaHero from "./ServiceAreaHero";
import ServicesList from "./ServicesList";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Shield } from "lucide-react";

interface ServiceAreaLayoutProps {
  title: string;
  description: string;
  areaName: string;
  schema?: object;
  children?: ReactNode;
}

const ServiceAreaLayout = ({ 
  title, 
  description, 
  areaName,
  schema,
  children 
}: ServiceAreaLayoutProps) => {
  return (
    <PageLayout
      title={title}
      description={description}
      schema={schema}
    >
      <div className="container mx-auto px-4 py-8">
        <ServiceAreaHero areaName={areaName} />
        
        <div className="my-16">
          <ServicesList areaName={areaName} />
        </div>

        {children}

        <div className="bg-primary/5 rounded-lg p-8 my-16">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Why Choose Us in {areaName}?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully certified professional locksmith services</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">24/7 Availability</h3>
                <p className="text-gray-600">Emergency services available any time</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Fast Response</h3>
                <p className="text-gray-600">Quick arrival to your location</p>
              </div>
            </div>
          </div>
          <Button size="lg" asChild>
            <a href="tel:2017482070">Call (201) 748-2070</a>
          </Button>
        </div>

        <div className="my-16">
          <ReviewsSection />
        </div>
      </div>
    </PageLayout>
  );
};

export default ServiceAreaLayout;