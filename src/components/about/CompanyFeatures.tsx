
import { motion } from "framer-motion";
import { Shield, Award, Users, CheckCircle, Wrench, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Trusted Security Expertise",
    description: "Years of trusted experience in North Bergen, bringing in-depth lock and security expertise to protect what matters most to you.",
    color: "border-blue-400 bg-blue-50",
    iconColor: "text-blue-500"
  },
  {
    icon: Award,
    title: "Licensed & Certified Professionals",
    description: "Our team consists of licensed, insured, and certified locksmith professionals trained in the latest security technologies.",
    color: "border-purple-400 bg-purple-50",
    iconColor: "text-purple-500"
  },
  {
    icon: Users,
    title: "Customer Satisfaction Guarantee",
    description: "Committed to exceeding your expectations with personalized security solutions tailored to your specific needs.",
    color: "border-green-400 bg-green-50",
    iconColor: "text-green-500"
  },
  {
    icon: CheckCircle,
    title: "Quality You Can Count On",
    description: "We use only high-quality, durable products and parts to ensure the longevity and reliability of our security solutions.",
    color: "border-yellow-400 bg-yellow-50",
    iconColor: "text-yellow-600"
  },
  {
    icon: Wrench,
    title: "Comprehensive Security Solutions",
    description: "From traditional locks to advanced electronic systems, we provide all-inclusive security services for homes, businesses, and vehicles.",
    color: "border-red-400 bg-red-50",
    iconColor: "text-red-500"
  },
  {
    icon: Clock,
    title: "Available When You Need Us",
    description: "Security concerns can arise at any time, which is why our team is ready to assist you whenever you need professional help.",
    color: "border-teal-400 bg-teal-50",
    iconColor: "text-teal-500"
  },
];

const CompanyFeatures = () => {
  return (
    <section className="my-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group h-full"
          >
            <Card className={`h-full rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 ${feature.color}`}>
              <div className="p-6">
                <div className="mb-6 w-16 h-16 rounded-full bg-white flex items-center justify-center border-2 border-gray-100 group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl text-center"
      >
        <h3 className="text-2xl font-bold text-primary mb-4">Professional Security Solutions Since 2010</h3>
        <p className="text-gray-600 max-w-3xl mx-auto">
          With our experienced team and comprehensive range of services, we're equipped to handle all your security needs - from emergency lockouts to advanced security system installations.
        </p>
      </motion.div>
    </section>
  );
};

export default CompanyFeatures;
