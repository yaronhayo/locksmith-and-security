import { Shield, Clock, DollarSign, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import BookingForm from "@/components/BookingForm";

const LockChangeHero = () => {
  return (
    <section className="hero-gradient relative min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Lock Change Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Expert lock replacement services in North Bergen. We install high-security locks 
              to keep your property safe and secure. Available 24/7 with fast response times.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild className="text-lg">
                <a href="tel:5513037874" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  (551) 303-7874
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 text-white hover:bg-white/20">
                Get Free Quote
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-secondary" />
                <span className="text-white">Same-Day Service</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-secondary" />
                <span className="text-white">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-secondary" />
                <span className="text-white">Upfront Pricing</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Schedule Lock Change Service</h2>
                <p className="text-gray-600 mt-2">Professional installation guaranteed</p>
              </div>
              <BookingForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LockChangeHero;