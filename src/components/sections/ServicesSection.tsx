import { ArrowRight, Lock, Car, Building2, Key } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const services = [
  { 
    icon: Lock, 
    title: "House Lockout", 
    description: "Locked out of your home? Our expert locksmiths will help you regain access quickly and safely, without damaging your locks. Available 24/7 for homeowners and renters.", 
    link: "/services/house-lockout", 
    cta: "Unlock Your Home" 
  },
  { 
    icon: Car, 
    title: "Car Lockout", 
    description: "Lost your car keys or locked them inside? Our mobile locksmiths come to your location and safely unlock your vehicle. Available 24/7 for all car makes and models.", 
    link: "/services/car-lockout", 
    cta: "Unlock Your Car" 
  },
  { 
    icon: Building2, 
    title: "Business Lockout", 
    description: "Can't access your business? We provide fast commercial lockout service to get you back to work quickly. Available for offices, stores, and warehouses.", 
    link: "/services/business-lockout", 
    cta: "Unlock Your Business" 
  },
  { 
    icon: Key, 
    title: "Lock Change", 
    description: "Need new locks? We install high-quality locks for better security. Perfect for new homeowners or when upgrading old locks. We work with all major brands.", 
    link: "/services/lock-change", 
    cta: "Change Your Locks" 
  },
  { 
    icon: Key, 
    title: "Lock Rekey", 
    description: "Want to keep your locks but need new keys? We'll rekey your existing locks to work with new keys, making old ones useless. Ideal for landlords and new homeowners.", 
    link: "/services/lock-rekey", 
    cta: "Rekey Your Locks" 
  },
  { 
    icon: Building2, 
    title: "Business Lock Change", 
    description: "Upgrade your business security with new commercial-grade locks. We install master key systems and high-security locks for offices, stores, and warehouses.", 
    link: "/services/business-lock-change", 
    cta: "Secure Your Business" 
  },
  { 
    icon: Car, 
    title: "New Car Key", 
    description: "Lost your car key? We make and program new keys for all vehicle types, including transponder and smart keys. Fast service with professional equipment.", 
    link: "/services/new-car-key", 
    cta: "Get a New Car Key" 
  },
  { 
    icon: Car, 
    title: "Car Key Program", 
    description: "Need a car key programmed? We program all types of electronic car keys and key fobs. Our technicians use professional equipment for all vehicle makes.", 
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
            <Link 
              key={index} 
              to={service.link}
              className="no-underline"
              onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
            >
              <Card className="transition-shadow duration-300 hover:shadow-lg h-full">
                <CardContent className="p-6 text-center">
                  <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="secondary" className="group w-full">
                    <span className="inline-flex items-center justify-center">
                      {service.cta}
                      <ArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;