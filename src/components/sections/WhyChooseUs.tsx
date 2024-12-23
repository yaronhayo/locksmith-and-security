import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Fast and Efficient Service",
    description: "15-30 minute response time in North Bergen area. We understand that being locked out is stressful and arrive quickly to help."
  },
  {
    title: "Affordable and Transparent Pricing",
    description: "No hidden fees or surprise charges. We provide upfront pricing before starting any work, with competitive rates."
  },
  {
    title: "Experienced and Trustworthy",
    description: "Licensed, bonded, and insured professionals with years of experience. Background-checked technicians you can trust."
  },
  {
    title: "Available 24/7",
    description: "Round-the-clock emergency service, including weekends and holidays. We're here whenever you need us."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Locksmith & Security LLC for Your House Lockout Needs?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing fast, reliable, and professional locksmith services you can count on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-primary text-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-white/90">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;