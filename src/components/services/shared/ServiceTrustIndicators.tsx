
import { Shield, Clock, Star, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceTrustIndicatorsProps {
  responseTime?: string;
  rating?: string;
  certifications?: string[];
}

const ServiceTrustIndicators = ({
  responseTime = "15-30 Min",
  rating = "5.0",
  certifications = ["Licensed", "Insured", "Certified"]
}: ServiceTrustIndicatorsProps) => {
  return (
    <div className="grid md:grid-cols-4 gap-4 p-6 bg-gray-50 rounded-lg mb-8">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
      >
        <Clock className="h-6 w-6 text-primary" />
        <div>
          <p className="font-semibold">{responseTime}</p>
          <p className="text-sm text-gray-600">Response Time</p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
      >
        <Star className="h-6 w-6 text-primary" />
        <div>
          <p className="font-semibold">{rating}/5.0</p>
          <p className="text-sm text-gray-600">Customer Rating</p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
      >
        <Shield className="h-6 w-6 text-primary" />
        <div>
          <p className="font-semibold">Protected</p>
          <p className="text-sm text-gray-600">Licensed & Insured</p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
      >
        <BadgeCheck className="h-6 w-6 text-primary" />
        <div>
          <p className="font-semibold">Verified Pro</p>
          <p className="text-sm text-gray-600">Background Checked</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceTrustIndicators;
