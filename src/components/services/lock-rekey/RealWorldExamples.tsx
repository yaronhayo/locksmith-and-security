import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Building, Key } from "lucide-react";

const examples = [
  {
    icon: Home,
    title: "New Home Security",
    description: "New homeowners wanted to ensure previous owners couldn't access their property. We rekeyed all exterior locks, providing them with new keys while keeping the existing hardware."
  },
  {
    icon: Building,
    title: "Apartment Complex Update",
    description: "A property manager needed to secure multiple units after key loss. We rekeyed all affected locks and created a new master key system for efficient property management."
  },
  {
    icon: Key,
    title: "Lost Key Solution",
    description: "A homeowner lost their keys while traveling. We rekeyed their locks upon return, ensuring any found keys would no longer work, providing peace of mind."
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