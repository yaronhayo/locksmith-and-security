
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Key, Zap } from "lucide-react";

const examples = [
  {
    icon: Clock,
    title: "Late Night Emergency",
    description: "A family returned from vacation at 2 AM to find their house keys missing. Our technician arrived within 20 minutes, verified their identity, and had them safely inside within minutes using non-destructive entry techniques."
  },
  {
    icon: Zap,
    title: "Smart Lock Malfunction",
    description: "A homeowner's smart lock stopped responding after a power outage. We diagnosed the issue, replaced the backup battery, and restored access while also showing them how to manually override the system in future emergencies."
  },
  {
    icon: Key,
    title: "Lost Keys During Move-In",
    description: "New homeowners lost their only set of keys during moving day. We arrived promptly, created new keys, and recommended a master key system to prevent future lockouts."
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
