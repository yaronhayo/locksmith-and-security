
import { Lock, Car, Building2, Key, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { 
    icon: Lock, 
    title: "Emergency Locksmith", 
    description: "24/7 emergency locksmith services for cars, homes, and businesses. Fast response times and professional service.", 
    link: "/services/emergency-locksmith",
    subServices: [
      { name: "Car Lockout", link: "/services/emergency-locksmith/car-lockout" },
      { name: "House Lockout", link: "/services/emergency-locksmith/house-lockout" },
      { name: "Business Lockout", link: "/services/emergency-locksmith/business-lockout" },
      { name: "Storage Unit Lockout", link: "/services/emergency-locksmith/storage-unit-lockout" }
    ]
  },
  { 
    icon: Building2, 
    title: "Residential Locksmith", 
    description: "Complete residential locksmith services including lock replacement, rekeying, repairs, and security upgrades.", 
    link: "/services/residential-locksmith",
    subServices: [
      { name: "Lock Replacement", link: "/services/residential-locksmith/lock-replacement" },
      { name: "Lock Rekey", link: "/services/residential-locksmith/lock-rekey" },
      { name: "Lock Repair", link: "/services/residential-locksmith/lock-repair" },
      { name: "Gate Locks", link: "/services/residential-locksmith/gate-locks" }
    ]
  },
  { 
    icon: Building2, 
    title: "Commercial Locksmith", 
    description: "Professional commercial locksmith solutions for businesses, including access control and master key systems.", 
    link: "/services/commercial-locksmith",
    subServices: [
      { name: "Lock Replacement", link: "/services/commercial-locksmith/lock-replacement" },
      { name: "Master Key Systems", link: "/services/commercial-locksmith/master-key" },
      { name: "Access Control", link: "/services/commercial-locksmith/access-control" },
      { name: "Emergency Exit Devices", link: "/services/commercial-locksmith/emergency-exit-device" }
    ]
  },
  { 
    icon: Car, 
    title: "Auto Locksmith", 
    description: "Comprehensive auto locksmith services including car key replacement, programming, and ignition repair.", 
    link: "/services/auto-locksmith",
    subServices: [
      { name: "Car Key Replacement", link: "/services/auto-locksmith/car-key-replacement" },
      { name: "Key Fob Programming", link: "/services/auto-locksmith/key-fob-programming" },
      { name: "Car Key Duplicate", link: "/services/auto-locksmith/car-key-duplicate" },
      { name: "Ignition Repair", link: "/services/auto-locksmith/ignition-lock-cylinder" }
    ]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Professional Locksmith Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Expert security solutions for all your residential, commercial, and automotive needs
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
              <Card className="h-full hover:shadow-lg transition-all duration-300 group bg-white border-gray-100">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {service.subServices.map((subService, subIndex) => (
                      <Link 
                        key={subIndex}
                        to={subService.link}
                        className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors py-1"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {subService.name}
                      </Link>
                    ))}
                  </div>

                  <Link
                    to={service.link}
                    className="mt-6 inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    View All Services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
