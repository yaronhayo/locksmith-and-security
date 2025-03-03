
import { ReactNode } from "react";
import PageLayout from "./PageLayout";
import { motion } from "framer-motion";
import BookingForm from "@/components/BookingForm";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { Clock, Shield, Phone } from "lucide-react";

interface ServiceAreaLayoutProps {
  title: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  schema: object;
  location: string;
  children: ReactNode;
}

const features = [
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Available around the clock for all your locksmith needs."
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured professional locksmith services."
  },
  {
    icon: Phone,
    title: "Fast Response",
    description: "15-30 minute response time throughout the area."
  }
];

const ServiceAreaLayout = ({
  title,
  description,
  heroTitle,
  heroDescription,
  schema,
  location,
  children
}: ServiceAreaLayoutProps) => {
  return (
    <PageLayout
      title={title}
      description={description}
      schema={schema}
      heroTitle={heroTitle}
      heroDescription={heroDescription}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {children}
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Request Service</h2>
                <BookingForm />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <ReviewsSection location={location} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm"
              >
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default ServiceAreaLayout;
