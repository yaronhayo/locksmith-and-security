
import PageLayout from "@/components/layouts/PageLayout";
import { motion } from "framer-motion";
import { Clock, Shield, Star, ArrowRight } from "lucide-react";
import BookingForm from "@/components/BookingForm";

const BookOnlinePage = () => {
  return (
    <PageLayout
      title="Book Online | Professional Locksmith Services"
      description="Book your locksmith service online. Available 24/7 for residential, commercial, and automotive locksmith needs in North Bergen and surrounding areas."
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Book Online - Professional Locksmith Services",
        "description": "Book your locksmith service online. Available 24/7 for residential, commercial, and automotive locksmith needs in North Bergen and surrounding areas.",
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

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Why Book Online?</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">Instant Confirmation</h3>
                <p className="text-gray-600">Receive immediate confirmation of your booking</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">Choose Your Time</h3>
                <p className="text-gray-600">Select a time that works best for you</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">Secure Booking</h3>
                <p className="text-gray-600">Your information is protected and secure</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">Easy Process</h3>
                <p className="text-gray-600">Simple, straightforward booking steps</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-primary/5 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-lg mb-6">
              For emergency service or immediate assistance, call us directly:
            </p>
            <a 
              href="tel:2017482070" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors text-lg"
            >
              Call (201) 748-2070
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BookOnlinePage;
