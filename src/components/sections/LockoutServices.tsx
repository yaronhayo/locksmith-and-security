import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { servicesData } from "@/data/lockoutServicesData";
import { ServiceItem } from "@/types/lockoutServices";

interface LockoutServicesProps {
  title?: string;
  description?: string;
  services?: ServiceItem[];
}

const LockoutServices = ({ title, description, services }: LockoutServicesProps) => {
  const path = window.location.pathname.split('/').pop() || '';
  const defaultContent = servicesData[path] || servicesData['business-lock-change'];

  const displayTitle = title || defaultContent.title;
  const displayDescription = description || defaultContent.description;
  const displayServices = services || defaultContent.services;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{displayTitle}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {displayDescription}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LockoutServices;