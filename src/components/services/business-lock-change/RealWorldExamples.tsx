import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Shield, Lock } from "lucide-react";

const examples = [
  {
    icon: Building2,
    title: "Office Complex Security",
    description: "Implemented a master key system for a 20-story office building, improving access control while maintaining security protocols."
  },
  {
    icon: Shield,
    title: "Retail Chain Upgrade",
    description: "Upgraded locks across multiple retail locations with high-security cylinders and restricted key systems."
  },
  {
    icon: Lock,
    title: "Industrial Facility",
    description: "Installed heavy-duty commercial locks and electronic access control systems for a manufacturing plant."
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
        Recent Projects
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