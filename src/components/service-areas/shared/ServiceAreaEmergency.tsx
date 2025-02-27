
import { AlertCircle, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceAreaEmergencyProps {
  locationName: string;
}

const ServiceAreaEmergency = ({ locationName }: ServiceAreaEmergencyProps) => {
  return (
    <section className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
      <div className="bg-gradient-to-br from-secondary/20 via-secondary/10 to-white p-8 md:p-12 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full -ml-12 -mb-12"></div>
        
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-secondary text-white p-2 rounded-full">
              <AlertCircle className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">24/7 Emergency Locksmith in {locationName}</h2>
          </div>
          
          <p className="text-lg text-gray-700 mb-8">
            Locked out of your home, business, or vehicle in {locationName}? Our emergency locksmith team is available day and night to help you regain access quickly and safely.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-secondary">
              <Clock className="h-8 w-8 text-secondary mb-3" />
              <h3 className="font-semibold text-lg mb-2">24/7 Service</h3>
              <p className="text-gray-600">Available holidays, weekends, and nights</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-secondary">
              <MapPin className="h-8 w-8 text-secondary mb-3" />
              <h3 className="font-semibold text-lg mb-2">Local Experts</h3>
              <p className="text-gray-600">Based in {locationName} for fast response</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-secondary">
              <Phone className="h-8 w-8 text-secondary mb-3" />
              <h3 className="font-semibold text-lg mb-2">Call Anytime</h3>
              <p className="text-gray-600">Speak directly with a technician</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2 bg-secondary hover:bg-secondary/90 text-white" asChild>
              <a href="tel:2017482070">
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10" asChild>
              <a href="#contact-form">
                Request Service
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaEmergency;
