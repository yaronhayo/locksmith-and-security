
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePhoneNumber } from "@/utils/phoneUtils";
import { Phone } from "lucide-react";

const CallToAction = () => {
  const { phoneNumber, phoneHref } = usePhoneNumber();
  
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
      <h3 className="text-xl font-bold text-primary mb-3">Ready to Enhance Your Business Security?</h3>
      <p className="mb-4">
        Contact our commercial security experts today to schedule a consultation and discover how our access control solutions can protect your business.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button className="bg-secondary hover:bg-secondary/90" asChild>
          <a href={phoneHref} className="flex items-center">
            <Phone className="mr-2 h-4 w-4" />
            Call {phoneNumber}
          </a>
        </Button>
        <Button variant="outline" className="border-primary text-primary" asChild>
          <Link to="/contact">Request a Consultation</Link>
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
