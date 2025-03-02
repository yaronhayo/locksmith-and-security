
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
      <h3 className="text-xl font-bold text-primary mb-3">Ready to Enhance Your Business Security?</h3>
      <p className="mb-4">
        Contact our commercial security experts today to schedule a consultation and discover how our access control solutions can protect your business.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button className="bg-secondary hover:bg-secondary/90" asChild>
          <a href="tel:2017482070">Call (201) 748-2070</a>
        </Button>
        <Button variant="outline" className="border-primary text-primary" asChild>
          <Link to="/contact">Request a Consultation</Link>
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
