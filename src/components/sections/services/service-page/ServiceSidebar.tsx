
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ChevronRight, Star, Shield, CalendarCheck, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  return (
    <div className="space-y-6">
      {/* Contact Card */}
      <Card>
        <CardHeader className="bg-primary text-white">
          <CardTitle className="text-xl">Need {serviceName} Service?</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-primary" />
              <span>Licensed & Insured Locksmiths</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="h-5 w-5 text-primary" />
              <span>Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center gap-3">
              <CalendarCheck className="h-5 w-5 text-primary" />
              <span>Same-Day Appointments</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button className="w-full" asChild>
            <Link to="/book-online">Book Online</Link>
          </Button>
          <Button variant="outline" className="w-full flex items-center justify-center gap-2" asChild>
            <a href="tel:(201) 748-2070">
              <PhoneCall className="h-4 w-4" />
              Call (201) 748-2070
            </a>
          </Button>
        </CardFooter>
      </Card>
      
      {/* Related Services */}
      {relatedServices.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Related Services</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="space-y-4">
              {relatedServices.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.path}
                  className="flex items-start p-3 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <div>
                    <h3 className="font-medium text-primary">{service.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 ml-auto flex-shrink-0" />
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
      
      {/* Testimonial */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-1 mb-3">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          </div>
          <blockquote className="text-gray-700 italic">
            "Excellent service! The locksmith arrived promptly and completed the job professionally.
            Very satisfied with the quality and price."
          </blockquote>
          <div className="mt-3 text-sm font-medium">
            - Sarah L., North Bergen
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceSidebar;
