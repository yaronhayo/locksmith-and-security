
import React from 'react';
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CTASectionProps {
  categoryName: string;
}

const CTASection: React.FC<CTASectionProps> = ({ categoryName }) => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Professional {categoryName} Services?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Our team of experienced locksmiths is ready to help with all your {categoryName.toLowerCase()} security needs. 
            We provide reliable service throughout North Bergen and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="tel:2017482070" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call (201) 748-2070
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact" className="flex items-center gap-2">
                Request Service
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
