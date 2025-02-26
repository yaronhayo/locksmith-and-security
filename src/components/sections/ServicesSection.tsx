
import { Lock, Car, Building2, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { 
    icon: Lock, 
    title: "Emergency Locksmith", 
    description: "24/7 emergency locksmith services for cars, homes, and businesses. Fast response times and professional service.", 
    link: "/services/emergency-locksmith",
    highlight: "Available 24/7",
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
    highlight: "Home Security",
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
    highlight: "Business Security",
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
    highlight: "Mobile Service",
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
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Professional Locksmith Services
          </h2>
          <p className="text-xl text-muted-foreground">
            Expert security solutions for all your residential, commercial, and automotive needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative h-full overflow-hidden group border-0 bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="p-6 pb-4">
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {service.highlight}
                      </span>
                    </div>
                    
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                  </div>

                  <div className="bg-gray-50 p-6 pt-4">
                    <div className="space-y-2 mb-6">
                      {service.subServices.map((subService, subIndex) => (
                        <Link 
                          key={subIndex}
                          to={subService.link}
                          className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors py-1.5 relative group"
                        >
                          <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                          <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full">
                            {subService.name}
                          </span>
                        </Link>
                      ))}
                    </div>

                    <Link
                      to={service.link}
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-semibold group/link"
                    >
                      Explore All Services
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
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
