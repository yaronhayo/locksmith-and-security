
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import BookingForm from "@/components/BookingForm";

interface EnhancedServicesHeroProps {
  title: string;
  description: string;
  serviceName: string;
  serviceLabel: string;
  preselectedService?: string;
}

const EnhancedServicesHero: React.FC<EnhancedServicesHeroProps> = ({
  title,
  description,
  serviceName,
  serviceLabel,
  preselectedService
}) => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary to-primary-hover text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left column - Hero content */}
          <div>
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-white/20 text-white/90 text-sm font-medium">
              {serviceLabel}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">{description}</p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-primary text-lg hover:text-primary-hover"
              asChild
            >
              <a href="tel:2017482070" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                (201) 748-2070
              </a>
            </Button>
          </div>
          
          {/* Right column - Booking form */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
            <div className="mb-4 text-center">
              <h2 className="text-2xl font-semibold">Book Our Services</h2>
              <p className="text-white/80">Complete the form below for a quick response</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <BookingForm preselectedService={preselectedService} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServicesHero;
