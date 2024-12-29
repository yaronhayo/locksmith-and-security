import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Car, Building2, Key } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const services = [
  { 
    icon: Lock, 
    title: "House Lockout", 
    description: "Locked out of your home? Our expert locksmiths will help you regain access quickly and safely, without damaging your locks.", 
    link: "/services/house-lockout", 
    cta: "Unlock Your Home" 
  },
  { 
    icon: Car, 
    title: "Car Lockout", 
    description: "Lost your car keys or locked them inside? Our mobile locksmiths come to your location and safely unlock your vehicle.", 
    link: "/services/car-lockout", 
    cta: "Unlock Your Car" 
  },
  { 
    icon: Building2, 
    title: "Business Lockout", 
    description: "Can't access your business? We provide fast commercial lockout service to get you back to work quickly.", 
    link: "/services/business-lockout", 
    cta: "Unlock Your Business" 
  },
  { 
    icon: Key, 
    title: "Lock Change", 
    description: "Need new locks? We install high-quality locks for better security. Perfect for new homeowners or when upgrading old locks.", 
    link: "/services/lock-change", 
    cta: "Change Your Locks" 
  },
  { 
    icon: Key, 
    title: "Lock Rekey", 
    description: "Want to keep your locks but need new keys? We'll rekey your existing locks to work with new keys.", 
    link: "/services/lock-rekey", 
    cta: "Rekey Your Locks" 
  },
  { 
    icon: Building2, 
    title: "Business Lock Change", 
    description: "Upgrade your business security with new commercial-grade locks. We install master key systems and high-security locks.", 
    link: "/services/business-lock-change", 
    cta: "Secure Your Business" 
  },
  { 
    icon: Car, 
    title: "New Car Key", 
    description: "Lost your car key? We make and program new keys for all vehicle types, including transponder and smart keys.", 
    link: "/services/new-car-key", 
    cta: "Get a New Car Key" 
  },
  { 
    icon: Car, 
    title: "Car Key Program", 
    description: "Need a car key programmed? We program all types of electronic car keys and key fobs.", 
    link: "/services/car-key-program", 
    cta: "Program Your Car Key" 
  }
];

const ServicesGrid = () => {
  const { toast } = useToast();

  const handleServiceClick = (serviceName: string) => {
    console.log(`Service clicked: ${serviceName}`);
    toast({
      title: "Service Selected",
      description: `You've selected our ${serviceName} service. Redirecting you to more information.`,
    });
  };

  return (
    <section className="py-12 lg:py-20 bg-gray-50" aria-labelledby="services-title">
      <div className="container mx-auto px-4">
        <motion.h2 
          id="services-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 lg:mb-12"
        >
          Our Professional Services
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <Icon className="w-12 h-12 text-primary group-hover:text-secondary transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {service.description}
                    </p>
                    <Button 
                      asChild 
                      variant="secondary" 
                      className="w-full group mt-auto"
                      onClick={() => handleServiceClick(service.title)}
                    >
                      <Link 
                        to={service.link} 
                        className="inline-flex items-center justify-center"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        {service.cta}
                        <ArrowRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;