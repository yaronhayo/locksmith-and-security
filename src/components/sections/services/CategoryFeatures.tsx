
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

interface CategoryFeaturesProps {
  category: string;
  description: string;
  services: Service[];
}

const CategoryFeatures: React.FC<CategoryFeaturesProps> = ({
  category,
  description,
  services
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our {category} Locksmith Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-5">{service.description}</p>
              
              <Button 
                variant="ghost" 
                className="p-0 h-auto text-primary hover:text-primary-dark hover:bg-transparent"
                asChild
              >
                <Link to={service.link} className="flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFeatures;
