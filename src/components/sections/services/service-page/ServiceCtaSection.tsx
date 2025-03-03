
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCtaSectionProps {
  serviceName: string;
  title: string;
  description: string;
}

const ServiceCtaSection: React.FC<ServiceCtaSectionProps> = ({ 
  serviceName, 
  title, 
  description 
}) => {
  return (
    <div className="my-16 p-8 rounded-xl bg-gradient-to-r from-secondary/20 to-primary/20 text-center">
      <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">{title}</h2>
      <p className="text-gray-700 mb-8 max-w-3xl mx-auto">{description}</p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary-hover transition-colors flex-1"
          asChild
        >
          <a href="tel:2017482070" className="flex items-center justify-center">
            <Phone className="mr-2 h-5 w-5" />
            (201) 748-2070
          </a>
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="bg-white border-primary text-primary hover:bg-primary/5 flex-1"
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
