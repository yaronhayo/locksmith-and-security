
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import DynamicPhoneNumber from "@/components/common/DynamicPhoneNumber";
import { usePhoneNumber } from "@/utils/phoneUtils";

interface ServiceCtaSectionProps {
  serviceName: string;
}

const ServiceCtaSection: React.FC<ServiceCtaSectionProps> = ({ serviceName }) => {
  const { phoneHref } = usePhoneNumber();
  
  return (
    <div className="bg-gradient-to-r from-primary to-primary-hover rounded-lg overflow-hidden shadow-lg text-white p-8 mt-12">
      <h3 className="text-2xl font-bold mb-4">Need {serviceName} Service Now?</h3>
      <p className="mb-6 text-white/90">Our team is ready to help you with professional, reliable service. Contact us now for immediate assistance.</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          variant="secondary" 
          size="lg" 
          className="w-full sm:w-auto justify-center text-primary font-semibold hover:bg-secondary-hover hover:text-primary-dark"
          asChild
        >
          <a href={phoneHref} className="flex items-center justify-center">
            <Phone className="mr-2 h-5 w-5" />
            <DynamicPhoneNumber asLink={false} />
          </a>
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="w-full sm:w-auto justify-center bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:text-white hover:border-white/30"
          asChild
        >
          <Link to="/book-online" className="flex items-center justify-center">
            <Calendar className="mr-2 h-5 w-5" />
            Book Online
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCtaSection;
