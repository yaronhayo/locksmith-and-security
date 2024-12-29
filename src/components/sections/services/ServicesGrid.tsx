import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Car, Building2, Key } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  { 
    icon: Lock, 
    title: "House Lockout", 
    description: "Professional locksmith services for residential lockouts. Available 24/7.", 
    link: "/services/house-lockout" 
  },
  { 
    icon: Car, 
    title: "Car Lockout", 
    description: "Emergency car lockout services for all vehicle makes and models.", 
    link: "/services/car-lockout" 
  },
  { 
    icon: Building2, 
    title: "Business Lockout", 
    description: "Commercial lockout solutions for offices, stores, and warehouses.", 
    link: "/services/business-lockout" 
  },
  { 
    icon: Key, 
    title: "Lock Change", 
    description: "Professional lock replacement services for enhanced security.", 
    link: "/services/lock-change" 
  },
  { 
    icon: Key, 
    title: "Lock Rekey", 
    description: "Rekey your existing locks for improved security.", 
    link: "/services/lock-rekey" 
  },
  { 
    icon: Building2, 
    title: "Business Lock Change", 
    description: "Commercial lock replacement and master key systems.", 
    link: "/services/business-lock-change" 
  },
  { 
    icon: Car, 
    title: "New Car Key", 
    description: "Car key cutting and programming for all vehicle types.", 
    link: "/services/new-car-key" 
  },
  { 
    icon: Car, 
    title: "Car Key Program", 
    description: "Professional car key programming services.", 
    link: "/services/car-key-program" 
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Locksmith Services</h2>
          <p className="text-lg text-gray-600">
            Professional locksmith services for residential, commercial, and automotive needs. 
            Available 24/7 for emergencies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="no-underline"
              onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button variant="secondary" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;