import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Building2, Shield } from "lucide-react";

const examples = [
  {
    icon: Clock,
    title: "After Hours Emergency",
    description: "A retail store manager couldn't access the building before opening hours due to a malfunctioning lock. Our team arrived within 15 minutes, resolved the issue, and the store opened on time."
  },
  {
    icon: Building2,
    title: "Office Complex Access",
    description: "Multiple tenants in an office building were affected by a master key system failure. We quickly restored access and implemented a new, more secure master key system."
  },
  {
    icon: Shield,
    title: "Digital Lock Malfunction",
    description: "A modern office's access control system stopped working after a power outage. We restored access immediately and installed a backup power system to prevent future issues."
  }
];

const RealWorldExamples = () => {
  return (
    <section className="mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-primary"
      >
        Real Business Solutions
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {examples.map((example, index) => {
          const Icon = example.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {example.title}
                  </h3>
                  <p className="text-gray-600">{example.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default RealWorldExamples;