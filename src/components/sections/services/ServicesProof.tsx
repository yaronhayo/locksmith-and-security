
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Clock, BadgeCheck, ThumbsUp, Users } from "lucide-react";

const proofElements = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your complete peace of mind"
  },
  {
    icon: Award,
    title: "5-Star Rated",
    description: "Consistently rated 5 stars by our satisfied customers across all service areas"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Emergency service available 24 hours a day, 7 days a week, 365 days a year"
  },
  {
    icon: BadgeCheck,
    title: "Certified Experts",
    description: "Professional locksmiths with extensive training and certification"
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "Our work is backed by a 100% satisfaction guarantee"
  },
  {
    icon: Users,
    title: "Trusted by Thousands",
    description: "Serving the community with reliable locksmith services since 2010"
  }
];

const ServicesProof = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trust in our expertise and commitment to providing reliable, professional locksmith services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proofElements.map((element, index) => {
            const Icon = element.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{element.title}</h3>
                    <p className="text-gray-600">{element.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500">
            Member of the Associated Locksmiths of America (ALOA) and the Safe & Vault Technicians Association (SAVTA)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesProof;
