
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";

interface ServiceCtaSectionProps {
  title?: string;
  description?: string;
}

const ServiceCtaSection: React.FC<ServiceCtaSectionProps> = ({ 
  title = "Ready for Professional Service?",
  description = "Contact our team for fast, reliable service from licensed professionals."
}) => {
  return (
    <div className="bg-primary/5 py-16 px-8 rounded-lg mt-16 text-center">
      <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
      <p className="text-gray-700 mb-8 max-w-2xl mx-auto">{description}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" asChild>
          <a href="tel:2017482070" className="flex items-center">
            <PhoneCall className="mr-2 h-5 w-5" />
            (201) 748-2070
          </a>
        </Button>
        
        <Button variant="outline" size="lg" asChild>
          <Link to="/book-online">Book Online</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCtaSection;
