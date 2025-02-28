
import { motion } from "framer-motion";
import { Shield, Award, Users, CheckCircle, Wrench, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Trusted Security Expertise",
    description: "Years of trusted experience in North Bergen, bringing in-depth lock and security expertise to protect what matters most to you.",
  },
  {
    icon: Award,
    title: "Licensed & Certified Professionals",
    description: "Our team consists of licensed, insured, and certified locksmith professionals trained in the latest security technologies.",
  },
  {
    icon: Users,
    title: "Customer Satisfaction Guarantee",
    description: "Committed to exceeding your expectations with personalized security solutions tailored to your specific needs.",
  },
  {
    icon: CheckCircle,
    title: "Quality You Can Count On",
    description: "We use only high-quality, durable products and parts to ensure the longevity and reliability of our security solutions.",
  },
  {
    icon: Wrench,
    title: "Comprehensive Security Solutions",
    description: "From traditional locks to advanced electronic systems, we provide all-inclusive security services for homes, businesses, and vehicles.",
  },
  {
    icon: Clock,
    title: "Available When You Need Us",
    description: "Security concerns can arise at any time, which is why our team is ready to assist you whenever you need professional help.",
  },
];

const CompanyFeatures = () => {
  return (
    <section className="mb-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-primary">
              <CardContent className="p-6">
                <div className="mb-6 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
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
