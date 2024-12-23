import { ArrowRight, Lock, Car, Building2, Key } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { 
    icon: Lock, 
    title: "House Lockout", 
    description: "Locked out of your home? We'll get you back inside quickly and safely. Our expert locksmiths help homeowners and renters regain access to their properties 24/7. We use professional tools to unlock your door without causing any damage, ensuring your home stays secure.", 
    link: "/services/house-lockout", 
    cta: "Unlock Your Home" 
  },
  { 
    icon: Car, 
    title: "Car Lockout", 
    description: "Can't get into your car? Whether you've lost your keys or locked them inside, we're here to help. Our mobile locksmiths come to your location and unlock your vehicle safely, getting you back on the road fast. Available 24/7 for all car makes and models.", 
    link: "/services/car-lockout", 
    cta: "Unlock Your Car" 
  },
  { 
    icon: Building2, 
    title: "Business Lockout", 
    description: "Locked out of your business? Our commercial lockout service gets you back to work quickly. We help business owners and employees regain access to offices, stores, and warehouses. Fast response times and professional service to minimize business disruption.", 
    link: "/services/business-lockout", 
    cta: "Unlock Your Business" 
  },
  { 
    icon: Key, 
    title: "Lock Change", 
    description: "Need new locks? We install high-quality locks for better security. Perfect for new homeowners, after tenant changes, or when upgrading old locks. We work with all major lock brands and can recommend the best options for your property.", 
    link: "/services/lock-change", 
    cta: "Change Your Locks" 
  },
  { 
    icon: Key, 
    title: "Lock Rekey", 
    description: "Want to keep your locks but need new keys? Rekeying is a cost-effective way to ensure old keys won't work anymore. Ideal for landlords, new homeowners, or after losing keys. We rekey all types of locks while maintaining your security.", 
    link: "/services/lock-rekey", 
    cta: "Rekey Your Locks" 
  },
  { 
    icon: Building2, 
    title: "Business Lock Change", 
    description: "Upgrade your business security with new locks. We install commercial-grade locks and master key systems for offices, stores, and warehouses. Our solutions protect your business assets while making access easy for authorized personnel.", 
    link: "/services/business-lock-change", 
    cta: "Secure Your Business" 
  },
  { 
    icon: Car, 
    title: "New Car Key", 
    description: "Lost your car key? We make new keys for all vehicle types. Our service includes cutting and programming transponder keys and smart keys. We use advanced equipment to ensure your new key works perfectly with your car.", 
    link: "/services/new-car-key", 
    cta: "Get a New Car Key" 
  },
  { 
    icon: Car, 
    title: "Car Key Program", 
    description: "Need a car key programmed? We program all types of electronic car keys, including transponders and smart keys. Our technicians use professional equipment to ensure your key works correctly with your vehicle's security system.", 
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
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button asChild variant="secondary">
                  <a href={service.link}>{service.cta} <ArrowRight className="ml-2" /></a>
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