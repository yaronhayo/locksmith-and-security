
import PageLayout from "@/components/layouts/PageLayout";
import { motion } from "framer-motion";
import { Clock, Shield, Star, ArrowRight } from "lucide-react";
import BookingForm from "@/components/BookingForm";

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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">Book Your Service Online</h1>
            <p className="text-xl text-gray-600 mb-8">
              Schedule your locksmith service quickly and easily. Available 24/7 for all your security needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">24/7 Availability</h3>
                <p className="text-gray-600">Book anytime, day or night</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Professional, trusted service</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">5-Star Service</h3>
                <p className="text-gray-600">Highly rated by customers</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <BookingForm />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BookingPage;
