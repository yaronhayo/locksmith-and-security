
import { motion } from "framer-motion";
import { Shield, Award, Users, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Experience You Can Count On",
    description: "Years of trusted experience in North Bergen, bringing in-lock and security expertise to town.",
  },
  {
    icon: Award,
    title: "Fast and Reliable Service",
    description: "Quick response times for emergencies, ensuring you're never left waiting.",
  },
  {
    icon: Users,
    title: "Customer Satisfaction is Our Priority",
    description: "Committed to exceeding your expectations and ensuring your 100% satisfaction.",
  },
  {
    icon: CheckCircle,
    title: "Local Expertise You Can Trust",
    description: "Deep knowledge of the community, rapid availability, and reliable solutions for homes, businesses, and cars.",
  },
];

const CompanyFeatures = () => {
  return (
    <section className="mb-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Why Choose Locksmith & Security LLC
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CompanyFeatures;
