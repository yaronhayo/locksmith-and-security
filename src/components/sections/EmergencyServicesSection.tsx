
import { Shield, Clock, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const EmergencyServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">24/7 Emergency Locksmith Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We understand that locksmith emergencies can happen at any time. That's why we're available 24/7 to help you with any lock-related issues.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
            <p className="text-gray-600">Professional service backed by full insurance coverage</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Response Time</h3>
            <p className="text-gray-600">Emergency response available 24/7</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
            <p className="text-gray-600">100% satisfaction guarantee on all services</p>
          </div>
        </div>
        
        <div className="text-center">
          <Button asChild size="lg">
            <a href="tel:2017482070">Call Now for Emergency Service</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmergencyServicesSection;
