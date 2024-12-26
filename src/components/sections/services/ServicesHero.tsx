import { motion } from "framer-motion";
import { Shield, Clock, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesHero = () => {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-background pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Professional Locksmith Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Expert locksmith solutions for residential, commercial, and automotive needs. 
            Available 24/7 with fast response times and competitive pricing.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            {
              icon: Shield,
              title: "Licensed & Insured",
              description: "Professional service backed by full insurance coverage"
            },
            {
              icon: Clock,
              title: "24/7 Availability",
              description: "Emergency service available around the clock"
            },
            {
              icon: Wrench,
              title: "Expert Solutions",
              description: "Skilled technicians with years of experience"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild>
            <a href="tel:5513037874">Call Now (551) 303-7874</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;