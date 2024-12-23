import { ArrowRight, Lock, Car, Building2, Key } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { 
    icon: Lock, 
    title: "House Lockout", 
    description: "Lost your house keys or locked yourself out? Our residential lockout service provides quick, reliable access restoration to your home 24/7. Perfect for homeowners and tenants who need immediate assistance getting back into their property.", 
    link: "/services/house-lockout", 
    cta: "Unlock Your Home" 
  },
  { 
    icon: Car, 
    title: "Car Lockout", 
    description: "Locked your keys in the car? Our automotive lockout specialists can quickly get you back on the road. We handle all vehicle makes and models, providing fast assistance whether you're at home, work, or stranded somewhere.", 
    link: "/services/car-lockout", 
    cta: "Unlock Your Car" 
  },
  { 
    icon: Building2, 
    title: "Business Lockout", 
    description: "Time is money when you're locked out of your business. Our commercial lockout service helps business owners, managers, and employees regain access quickly and securely, minimizing disruption to your operations.", 
    link: "/services/business-lockout", 
    cta: "Unlock Your Business" 
  },
  { 
    icon: Key, 
    title: "Lock Change", 
    description: "Moving into a new home or concerned about security? Our lock change service replaces your existing locks with new, high-security options. Ideal for new homeowners, landlords, or anyone wanting to upgrade their security.", 
    link: "/services/lock-change", 
    cta: "Change Your Locks" 
  },
  { 
    icon: Key, 
    title: "Lock Rekey", 
    description: "Need to maintain your existing locks but want new keys? Our rekeying service modifies your current locks to work with new keys, invalidating old ones. Perfect for landlords, property managers, or after losing keys.", 
    link: "/services/lock-rekey", 
    cta: "Rekey Your Locks" 
  },
  { 
    icon: Building2, 
    title: "Business Lock Change", 
    description: "Enhance your commercial property security with our business lock change service. We install high-security commercial grade locks and master key systems, ideal for retail stores, offices, and industrial facilities.", 
    link: "/services/business-lock-change", 
    cta: "Secure Your Business" 
  },
  { 
    icon: Car, 
    title: "New Car Key", 
    description: "Lost or damaged your car key? We create and program new car keys for all vehicle makes and models. Our service includes transponder keys, smart keys, and traditional keys, getting you back on the road quickly.", 
    link: "/services/new-car-key", 
    cta: "Get a New Car Key" 
  },
  { 
    icon: Car, 
    title: "Car Key Program", 
    description: "Need a new key programmed to your vehicle? Our professional programming service handles all types of electronic car keys, including transponders, proximity keys, and smart keys for all major vehicle brands.", 
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