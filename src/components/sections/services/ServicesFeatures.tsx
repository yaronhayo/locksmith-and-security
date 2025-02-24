
import { motion } from "framer-motion";
import { Shield, Clock, DollarSign, Wrench, Star, Phone } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Licensed Professionals",
    description: "Our team consists of certified and experienced locksmiths"
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "24/7 emergency response to your location"
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Transparent pricing with no hidden fees"
  },
  {
    icon: Wrench,
    title: "Modern Equipment",
    description: "Latest tools and technology for all services"
  },
  {
    icon: Star,
    title: "5-Star Service",
    description: "Highly rated by our satisfied customers"
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Always available for emergency assistance"
  }
];

const ServicesFeatures = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Experience professional locksmith services backed by years of expertise and customer satisfaction
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesFeatures;
