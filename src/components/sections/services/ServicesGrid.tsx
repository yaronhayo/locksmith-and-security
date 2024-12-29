import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Car, Building2, Key } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleCardClick = (link: string) => {
    navigate(link);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive locksmith solutions for all your security needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer"
                onClick={() => handleCardClick(service.link)}
              >
                <CardContent className="p-6">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button asChild variant="secondary" className="w-full group">
                    <Link to={service.link} className="flex items-center justify-center">
                      {service.cta}
                      <ArrowRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;