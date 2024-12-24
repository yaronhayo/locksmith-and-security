import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Key, Smartphone } from "lucide-react";

const examples = [
  {
    icon: Key,
    title: "Lost Only Key",
    description: "Customer lost their only Toyota key. We cut and programmed a new key on-site, getting them back on the road within an hour."
  },
  {
    icon: Car,
    title: "Smart Key Replacement",
    description: "Modern vehicle needed a new smart key. We programmed a new key fob with push-to-start functionality, maintaining all original features."
  },
  {
    icon: Smartphone,
    title: "Spare Key Creation",
    description: "Customer wanted a backup key for emergencies. We created an exact duplicate including transponder programming for peace of mind."
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