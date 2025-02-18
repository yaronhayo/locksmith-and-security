
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceLayoutProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  icon?: LucideIcon;
  benefits?: string[];
  features?: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  process?: {
    step: number;
    title: string;
    description: string;
  }[];
  service?: string;
  callToAction?: string;
}

const ServiceLayout = ({ 
  title, 
  description, 
  children, 
  icon: Icon, 
  benefits,
  features,
  process 
}: ServiceLayoutProps) => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                {Icon && <Icon className="h-8 w-8 text-primary" />}
                <h1 className="text-4xl font-bold">{title}</h1>
              </div>
              <p className="text-lg text-gray-600 mb-8">{description}</p>
            </motion.div>

            {benefits && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-semibold mb-4">Service Benefits</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {features && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-semibold mb-6">Service Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {features.map((feature, index) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                      >
                        <FeatureIcon className="h-8 w-8 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {process && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-semibold mb-6">Our Process</h2>
                <div className="space-y-6">
                  {process.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex gap-6 items-start bg-gray-50 p-6 rounded-lg"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {children}
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-5 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">Book Now</h2>
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
