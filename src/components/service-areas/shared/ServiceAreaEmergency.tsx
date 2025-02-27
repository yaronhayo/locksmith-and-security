
import { AlertCircle, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceAreaEmergencyProps {
  locationName: string;
}

const ServiceAreaEmergency = ({ locationName }: ServiceAreaEmergencyProps) => {
  return (
    <section className="bg-primary/5 rounded-xl p-8 md:p-12 relative overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/10 to-transparent -z-10"></div>
      
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-gray-800">24/7 Emergency Locksmith Services in {locationName}</h2>
        </div>
        
        <p className="text-lg text-gray-700 mb-6">
          Locked out of your home, business, or vehicle in {locationName}? Don't panic. Our emergency locksmith team is available day and night to help you regain access quickly and safely.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <Clock className="h-10 w-10 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Available 24/7</h3>
            <p className="text-gray-600">Emergency service available holidays, weekends, and nights</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <MapPin className="h-10 w-10 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">Local Technicians</h3>
            <p className="text-gray-600">Based in {locationName} for fast response times</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <Phone className="h-10 w-10 text-primary mb-3" />
            <h3 className="font-semibold text-lg mb-2">One Call Away</h3>
            <p className="text-gray-600">Speak directly with a locksmith professional</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="gap-2" asChild>
            <a href="tel:2017482070">
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact-form">
              Request Service Online
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaEmergency;
