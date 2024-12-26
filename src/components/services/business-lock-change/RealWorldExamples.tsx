import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Shield, Lock } from "lucide-react";

const examples = [
  {
    icon: Building2,
    title: "Retail Chain Security",
    description: "A retail chain needed to upgrade their storefront locks after a security incident. We installed high-security locks across multiple locations while maintaining master key access."
  },
  {
    icon: Shield,
    title: "Office Complex Upgrade",
    description: "An office complex required standardization of their locking system. We implemented a comprehensive master key system for efficient access management."
  },
  {
    icon: Lock,
    title: "Security Enhancement",
    description: "A growing business needed to integrate traditional locks with modern access control. We designed and implemented a hybrid solution for maximum security."
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