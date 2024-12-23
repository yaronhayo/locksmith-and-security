import { ArrowRight, Lock, Car, Building2, Key } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { 
    icon: Lock, 
    title: "House Lockout", 
    description: "Locked out of your home? Our residential lockout service provides fast, professional access restoration 24/7. We help homeowners and tenants quickly regain entry to their properties with minimal disruption. Our experienced locksmiths use advanced techniques to ensure safe, damage-free entry while maintaining your home's security.", 
    link: "/services/house-lockout", 
    cta: "Unlock Your Home" 
  },
  { 
    icon: Car, 
    title: "Car Lockout", 
    description: "When you're locked out of your vehicle, our automotive specialists are here to help. We provide rapid assistance for all car makes and models, whether you're at home, work, or on the road. Our professional locksmiths use specialized tools to safely unlock your vehicle without causing damage.", 
    link: "/services/car-lockout", 
    cta: "Unlock Your Car" 
  },
  { 
    icon: Building2, 
    title: "Business Lockout", 
    description: "Don't let a lockout disrupt your business operations. Our commercial lockout service provides quick, professional assistance to business owners and employees. We understand that time is critical for businesses, so we prioritize fast response times while maintaining the highest security standards.", 
    link: "/services/business-lockout", 
    cta: "Unlock Your Business" 
  },
  { 
    icon: Key, 
    title: "Lock Change", 
    description: "Upgrade your security with our professional lock change service. Whether you're moving into a new home or want to enhance your security, we install high-quality locks that provide superior protection. Perfect for homeowners, landlords, and property managers looking to improve their property's security.", 
    link: "/services/lock-change", 
    cta: "Change Your Locks" 
  },
  { 
    icon: Key, 
    title: "Lock Rekey", 
    description: "Keep your existing locks while getting new keys with our professional rekeying service. We modify your current locks to work with new keys while invalidating old ones. This cost-effective solution is ideal for landlords, property managers, or anyone who wants to ensure old keys no longer work.", 
    link: "/services/lock-rekey", 
    cta: "Rekey Your Locks" 
  },
  { 
    icon: Building2, 
    title: "Business Lock Change", 
    description: "Secure your commercial property with our professional lock change service. We specialize in installing high-security commercial grade locks and master key systems. Our solutions are perfect for retail stores, offices, and industrial facilities requiring enhanced security measures.", 
    link: "/services/business-lock-change", 
    cta: "Secure Your Business" 
  },
  { 
    icon: Car, 
    title: "New Car Key", 
    description: "Lost or damaged your car key? We provide comprehensive car key replacement services for all vehicle makes and models. Our service includes cutting and programming transponder keys, smart keys, and traditional keys. We use state-of-the-art equipment to ensure your new key works perfectly.", 
    link: "/services/new-car-key", 
    cta: "Get a New Car Key" 
  },
  { 
    icon: Car, 
    title: "Car Key Program", 
    description: "Need a car key programmed? Our professional programming service covers all types of electronic car keys. We work with transponders, proximity keys, and smart keys for all major vehicle brands. Our technicians use advanced diagnostic equipment to ensure proper programming.", 
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