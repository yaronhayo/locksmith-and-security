import PageLayout from "@/components/layouts/PageLayout";
import ServiceAreaHero from "@/components/service-areas/weehawken/ServiceAreaHero";
import ServicesList from "@/components/service-areas/weehawken/ServicesList";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Shield } from "lucide-react";

const Weehawken = () => {
  return (
    <PageLayout
      title="Weehawken Locksmith Services | 24/7 Emergency Service"
      description="Professional locksmith services in Weehawken, NJ. Available 24/7 for residential, commercial, and automotive locksmith needs."
    >
      <div className="container mx-auto px-4 py-8">
        <ServiceAreaHero />
        
        <div className="my-16">
          <ServicesList />
        </div>

        <div className="bg-primary/5 rounded-lg p-8 my-16">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Why Choose Us in Weehawken?</h2>
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
            <a href="tel:+15513037874">Call (551) 303-7874</a>
          </Button>
        </div>

        <div className="my-16">
          <ReviewsSection />
        </div>
      </div>
    </PageLayout>
  );
};

export default Weehawken;