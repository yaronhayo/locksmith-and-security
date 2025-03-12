
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, MapPin, Phone, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ServiceReviewStars from './ServiceReviewStars';

interface ServiceSidebarProps {
  serviceName: string;
  relatedServices: {
    title: string;
    path: string;
    description: string;
  }[];
}

const ServiceSidebar: React.FC<ServiceSidebarProps> = ({ serviceName, relatedServices }) => {
  return (
    <div className="space-y-6">
      {/* Contact Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-primary p-4">
          <h3 className="text-white font-bold text-lg">Need Help?</h3>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-start">
            <Phone className="h-5 w-5 mr-3 text-secondary mt-0.5" />
            <div>
              <h4 className="font-semibold text-gray-900">Call Now</h4>
              <a href="tel:2017482070" className="text-gray-700 hover:text-primary transition-colors">
                (201) 748-2070
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="h-5 w-5 mr-3 text-secondary mt-0.5" />
            <div>
              <h4 className="font-semibold text-gray-900">Hours</h4>
              <p className="text-gray-700">
                24/7 Emergency Service
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="h-5 w-5 mr-3 text-secondary mt-0.5" />
            <div>
              <h4 className="font-semibold text-gray-900">Service Area</h4>
              <p className="text-gray-700">
                North Bergen & Surrounding Areas
              </p>
            </div>
          </div>
          
          <Separator />
          
          <Button className="w-full" asChild>
            <Link to="/book-online">
              <Calendar className="h-4 w-4 mr-2" />
              Book Online
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Credentials Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="p-4">
          <div className="flex items-center mb-3">
            <Shield className="h-5 w-5 text-secondary mr-2" />
            <h3 className="font-bold text-gray-900">Our Credentials</h3>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              <span className="font-semibold mr-2 text-gray-700">License #:</span>
              <span className="text-gray-600">13VH13153100</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2 text-gray-700">Insurance:</span>
              <span className="text-gray-600">Fully Insured</span>
            </div>
            <div className="mt-2">
              <ServiceReviewStars rating={4.9} reviewCount={150} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Services */}
      {relatedServices.length > 0 && (
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div className="bg-gray-50 p-4">
            <h3 className="font-bold text-gray-900">Related Services</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {relatedServices.map((service, index) => (
                <div key={index}>
                  <Link 
                    to={service.path}
                    className="group"
                  >
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                    <div className="flex items-center mt-2 text-secondary text-sm font-medium group-hover:underline">
                      <span>Learn more</span>
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </div>
                  </Link>
                  {index < relatedServices.length - 1 && (
                    <Separator className="my-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceSidebar;
