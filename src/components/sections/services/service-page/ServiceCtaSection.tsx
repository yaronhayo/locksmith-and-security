
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCtaSectionProps {
  serviceName: string;
}

const ServiceCtaSection: React.FC<ServiceCtaSectionProps> = ({ serviceName }) => {
  return (
    <section className="my-12 bg-primary-50 p-8 rounded-xl text-center">
      <h2 className="text-2xl font-bold mb-4">Ready for Professional {serviceName} Service?</h2>
      <p className="text-gray-700 mb-6 max-w-xl mx-auto">
        Our expert locksmiths are ready to help with your {serviceName.toLowerCase()} needs. 
        Contact us today for fast, reliable service at competitive rates.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild className="flex items-center gap-2">
          <Link to="/book-online">
            <Calendar className="w-5 h-5" />
            Schedule Service
          </Link>
        </Button>
        
        <Button variant="outline" asChild className="flex items-center gap-2">
          <a href="tel:(201) 748-2070">
            <PhoneCall className="w-5 h-5" />
            (201) 748-2070
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ServiceCtaSection;
