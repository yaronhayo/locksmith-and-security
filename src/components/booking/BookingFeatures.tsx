import { motion } from "framer-motion";
import { Clock, Shield, CreditCard, Calendar } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Book anytime, day or night, for emergency or scheduled services"
  },
  {
    icon: Shield,
    title: "Secure Booking",
    description: "Your information is protected with advanced encryption"
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "Clear upfront pricing with no hidden fees"
  },
  {
    icon: Calendar,
    title: "Instant Confirmation",
    description: "Receive immediate confirmation of your booking"
  }
];

const BookingFeatures = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <feature.icon className="w-10 h-10 text-primary mb-4" />
          <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default BookingFeatures;