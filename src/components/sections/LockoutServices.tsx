import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Wrench, Key } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "24/7 Emergency Lockout Assistance",
    description: "Available around the clock for immediate response to your lockout emergency. Our team arrives within 15-30 minutes in North Bergen area."
  },
  {
    icon: Shield,
    title: "Non-Destructive Entry Solutions",
    description: "We use advanced techniques to unlock your door without causing any damage to your locks or property, saving you money on repairs."
  },
  {
    icon: Wrench,
    title: "Lock Rekeying and Replacement",
    description: "Professional lock rekeying and replacement services to ensure your home's security after regaining access."
  },
  {
    icon: Key,
    title: "Smart Lock Troubleshooting",
    description: "Expert assistance with smart lock systems, including reprogramming, battery replacement, and system resets."
  }
];

const LockoutServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">House Lockout Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional locksmith services tailored to your emergency needs, delivered with expertise and care.
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