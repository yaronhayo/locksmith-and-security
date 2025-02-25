
import ServiceLayout from "@/components/layouts/ServiceLayout";
import EmergencyCallout from "@/components/services/car-lockout/EmergencyCallout";
import RealWorldExamples from "@/components/services/car-lockout/RealWorldExamples";
import ServiceDescription from "@/components/services/car-lockout/ServiceDescription";
import ServiceTrustIndicators from "@/components/services/shared/ServiceTrustIndicators";
import ServiceSchema from "@/components/services/shared/ServiceSchema";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { Car } from "lucide-react";
import { motion } from "framer-motion";

const CarLockoutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <ServiceSchema
        name="Car Lockout Service"
        description="24/7 car lockout assistance. Our automotive locksmiths provide fast, professional service to get you back in your vehicle quickly and safely."
        serviceType="Automotive Locksmith"
        price={{ amount: 75, currency: "USD" }}
        estimatedTime="24/7 Emergency Service"
      />
      <ServiceLayout
        title="Car Lockout Service"
        description="Locked out of your car? Our professional auto locksmiths provide fast, reliable service to get you back on the road quickly."
        icon={Car}
        service="car-lockout"
        callToAction="Get Back in Your Car"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ServiceTrustIndicators
            rating="5.0"
            certifications={["Licensed", "Insured", "Auto Security Expert"]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <EmergencyCallout />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm p-8"
        >
          <ServiceDescription />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="my-12"
        >
          <RealWorldExamples />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Customer Experiences</h2>
          <ReviewsSection category="car" />
        </motion.div>
      </ServiceLayout>
    </div>
  );
};

export default CarLockoutPage;
