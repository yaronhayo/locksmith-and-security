
import { ArrowRight, Lock, Car, Building2, Key } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { 
    icon: Lock, 
    title: "House Lockout", 
    description: "Expert locksmith service for residential lockouts. Available 24/7 with fast response times for homeowners and renters.", 
    link: "/services/house-lockout", 
    cta: "Unlock Your Home" 
  },
  { 
    icon: Car, 
    title: "Car Lockout", 
    description: "Professional automotive lockout service available 24/7. We come to your location and safely unlock any vehicle make or model.", 
    link: "/services/car-lockout", 
    cta: "Unlock Your Car" 
  },
  { 
    icon: Building2, 
    title: "Business Lockout", 
    description: "Commercial lockout solutions for all business types. Fast response service available 24/7 to get you back to work quickly.", 
    link: "/services/business-lockout", 
    cta: "Unlock Your Business" 
  },
  { 
    icon: Key, 
    title: "Lock Change", 
    description: "Professional lock replacement service with high-security options. Ideal for new homeowners or upgrading existing security.", 
    link: "/services/lock-change", 
    cta: "Change Your Locks" 
  },
  { 
    icon: Key, 
    title: "Lock Rekey", 
    description: "Expert lock rekeying service to maintain security with new keys. Perfect solution for landlords and new property owners.", 
    link: "/services/lock-rekey", 
    cta: "Rekey Your Locks" 
  },
  { 
    icon: Building2, 
    title: "Business Lock Change", 
    description: "Commercial-grade lock installation and security upgrades. Specialized solutions for offices, retail stores, and facilities.", 
    link: "/services/business-lock-change", 
    cta: "Secure Your Business" 
  },
  { 
    icon: Car, 
    title: "New Car Key", 
    description: "Professional car key cutting and programming service. We create keys for all vehicle types using advanced equipment.", 
    link: "/services/new-car-key", 
    cta: "Get a New Car Key" 
  },
  { 
    icon: Car, 
    title: "Car Key Program", 
    description: "Expert programming for all types of car keys and fobs. Professional service compatible with all major vehicle brands.", 
    link: "/services/car-key-program", 
    cta: "Program Your Car Key" 
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="transition-shadow duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <Button asChild variant="secondary" className="group mt-auto">
                  <a href={service.link} className="inline-flex items-center">
                    {service.cta}
                    <ArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
