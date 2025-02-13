
import { ReactNode } from "react";
import PageLayout from "@/components/layouts/PageLayout";
import ServiceAreaHero from "./ServiceAreaHero";
import ServicesList from "./ServicesList";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Shield } from "lucide-react";
import Map from "@/components/Map";
import { serviceAreaLocations } from "../constants";
import { MapMarker } from "@/types/service-area";

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
  // Find the current area's coordinates
  const currentArea = serviceAreaLocations.find(area => area.name === areaName);
  const center = currentArea ? { lat: currentArea.lat, lng: currentArea.lng } : undefined;
  
  // Create markers for all service areas, ensuring title is provided
  const markers: MapMarker[] = serviceAreaLocations.map(area => ({
    lat: area.lat,
    lng: area.lng,
    title: area.name, // name is used as the required title
    slug: area.slug
  }));

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

        <div className="my-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Map 
              markers={markers} 
              center={center}
              zoom={13}
              hoveredMarker={currentArea?.slug || null}
            />
          </div>
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
