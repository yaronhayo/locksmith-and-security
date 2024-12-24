import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Building2 } from "lucide-react";
import BookingForm from "@/components/BookingForm";

const BusinessLockoutHero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6 items-start h-screen">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Business Lockout Solutions
        </h1>
        <p className="text-base text-white/90 mb-6">
          Professional commercial locksmith service in North Bergen. 
          Fast response, expert solutions, and minimal business disruption.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" variant="secondary" asChild className="text-lg">
            <a href="tel:5513037874" className="flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              (551) 303-7874
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg bg-white/10 text-white hover:bg-white/20">
            Get Free Quote
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          <div className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-secondary" />
            <span className="text-white">All Business Types</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-6 w-6 text-secondary" />
            <span className="text-white">24/7 Service</span>
          </div>
          <div className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-secondary" />
            <span className="text-white">Fast Response</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-4 shadow-2xl">
        <div className="text-center mb-2">
          <h2 className="text-xl font-bold text-gray-900">Request Emergency Service</h2>
          <p className="text-sm text-gray-600">Get help within 15-30 minutes</p>
        </div>
        <BookingForm />
      </div>
    </div>
  );
};

export default BusinessLockoutHero;