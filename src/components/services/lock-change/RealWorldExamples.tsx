import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Building, Shield } from "lucide-react";

const examples = [
  {
    icon: Home,
    title: "New Homeowner Security",
    description: "A family moving into their new home wanted to ensure their security. We replaced all exterior locks with high-security grade 1 deadbolts and created a convenient master key system for them."
  },
  {
    icon: Building,
    title: "Rental Property Update",
    description: "A property manager needed to change locks between tenants. We installed a new keyway system that prevented previous keys from working while maintaining master key access."
  },
  {
    icon: Shield,
    title: "Security Upgrade",
    description: "A homeowner wanted to upgrade their outdated locks. We installed new smart locks with keypad access and smartphone control, significantly improving their home security."
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
        Real-World Examples
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