import PageLayout from "@/components/layouts/PageLayout";
import { motion } from "framer-motion";
import { Clock, Shield, CreditCard, Calendar } from "lucide-react";

const BookingPage = () => {
  return (
    <PageLayout
      title="Book Online | Locksmith & Security LLC"
      description="Schedule your locksmith service online. Fast, reliable, and professional service available 24/7 in North Bergen and surrounding areas."
      schema={{
        "@type": "Service",
        "serviceType": "Locksmith",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Locksmith & Security LLC",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "North Bergen",
            "addressRegion": "NJ"
          }
        }
      }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold">Why Book Online?</h2>
              <p className="text-lg text-gray-600">
                Schedule your locksmith service at your convenience. Our online booking system ensures a smooth and efficient process for all your security needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
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
              ].map((feature, index) => (
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

            <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
              <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded mr-3 mt-1">
                    <Shield className="w-4 h-4 text-primary" />
                  </span>
                  <span>Licensed and insured professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded mr-3 mt-1">
                    <Clock className="w-4 h-4 text-primary" />
                  </span>
                  <span>Fast response times</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded mr-3 mt-1">
                    <CreditCard className="w-4 h-4 text-primary" />
                  </span>
                  <span>Competitive and transparent pricing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Book Your Service</h2>
            <iframe 
              src="REPLACE_WITH_YOUR_BOOKING_FORM_URL"
              className="w-full min-h-[600px] border-0"
              title="Booking Form"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BookingPage;