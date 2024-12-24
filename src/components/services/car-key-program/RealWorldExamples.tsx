import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Key, Cpu, Car } from "lucide-react";

const examples = [
  {
    icon: Key,
    title: "Lost Smart Key",
    description: "Customer lost their only smart key for a 2022 Toyota RAV4. We programmed a new smart key and had them back on the road within an hour."
  },
  {
    icon: Cpu,
    title: "Faulty Transponder",
    description: "A client's transponder key stopped working after battery replacement. We reprogrammed the transponder chip and restored full functionality."
  },
  {
    icon: Car,
    title: "Key Fob Upgrade",
    description: "Helped a customer upgrade from a basic key to a modern key fob system, programming new remotes for their vehicle."
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