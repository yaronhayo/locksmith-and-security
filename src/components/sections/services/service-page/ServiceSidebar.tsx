
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Calendar, ShieldCheck, Star, Clock, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import DynamicPhoneNumber from "@/components/common/DynamicPhoneNumber";
import { usePhoneNumber } from "@/utils/phoneUtils";

interface RelatedService {
  title: string;
  path: string;
  description: string;
}

interface ServiceSidebarProps {
  serviceName: string;
  relatedServices: RelatedService[];
}

const ServiceSidebar: React.FC<ServiceSidebarProps> = ({ serviceName, relatedServices }) => {
  const { phoneHref } = usePhoneNumber();
  
  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24 space-y-8">
        {/* Contact card */}
        <div className="bg-gradient-to-br from-primary to-primary-hover rounded-xl overflow-hidden shadow-lg text-white">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center text-white">
              <ShieldCheck className="mr-2 h-5 w-5 text-secondary" />
              Need {serviceName} Service?
            </h3>
            <p className="mb-6 text-white/90">
              Our professional team is ready to help. Contact us now for quick assistance.
            </p>
            <div className="space-y-3">
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full justify-center text-primary font-semibold hover:bg-secondary-hover hover:text-primary-dark"
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
                className="w-full justify-center bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:text-white hover:border-white/30"
                asChild
              >
                <Link to="/book-online" className="flex items-center justify-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Online
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Enhanced testimonial card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
          <div className="bg-secondary/10 p-3 border-b border-secondary/20">
            <h3 className="text-xl font-bold text-primary flex items-center">
              <Star className="mr-2 h-5 w-5 text-secondary" />
              Customer Testimonial
            </h3>
          </div>
          <div className="p-6">
            <div className="flex flex-col">
              <div className="mb-4">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="italic text-gray-600 text-sm">"I was locked out of my car in the middle of nowhere. Called these guys and they arrived within 20 minutes. Professional, fast service at a reasonable price. Highly recommend!"</p>
              </div>
              <div className="flex items-center mt-2">
                <div className="bg-secondary/20 text-secondary font-bold h-10 w-10 rounded-full flex items-center justify-center mr-3">
                  {serviceName.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-900">Michael R.</p>
                  <p className="text-sm text-gray-500">Jersey City, NJ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services card */}
        {relatedServices.length > 0 && (
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md border border-secondary/20">
            <div className="bg-secondary/10 p-3 border-b border-secondary/20">
              <h3 className="text-xl font-bold text-primary flex items-center">
                <Star className="mr-2 h-5 w-5 text-secondary" />
                Related Services
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {relatedServices.map((service, index) => (
                  <Link 
                    key={index} 
                    to={service.path}
                    className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300 no-underline border border-gray-100 hover:border-secondary/30"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-gray-900">{service.title}</h4>
                        <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-secondary flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Emergency services hours */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
          <div className="bg-primary/10 p-3 border-b border-primary/20">
            <h3 className="text-xl font-bold text-primary flex items-center">
              <Clock className="mr-2 h-5 w-5 text-primary" />
              Service Hours
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Monday - Friday:</span>
                <span className="text-right">24 Hours</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Saturday:</span>
                <span className="text-right">24 Hours</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sunday:</span>
                <span className="text-right">24 Hours</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Holidays:</span>
                <span className="text-right">24 Hours</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-600">Our emergency {serviceName.toLowerCase()} service is available 24/7, 365 days a year including all holidays.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;
