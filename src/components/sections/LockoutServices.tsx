import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Car, Key } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "24/7 Emergency Car Lockout",
    description: "Available around the clock for immediate response to your car lockout emergency. Our team arrives within 15-30 minutes in North Bergen area."
  },
  {
    icon: Shield,
    title: "Damage-Free Entry",
    description: "We use advanced techniques to unlock your car without causing any damage to your locks or vehicle, protecting your investment."
  },
  {
    icon: Car,
    title: "All Vehicle Types",
    description: "Professional service for all car makes and models, including luxury vehicles and modern cars with advanced security systems."
  },
  {
    icon: Key,
    title: "Key Programming",
    description: "Expert key programming services for transponder keys, smart keys, and remote fobs to get you back on the road."
  }
];

const LockoutServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Car Lockout Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional auto locksmith services tailored to your emergency needs, delivered with expertise and care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
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

export default LockoutServices;