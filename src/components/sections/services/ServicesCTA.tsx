import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const ServicesCTA = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Emergency Locksmith Service?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our professional locksmiths are available 24/7 to help you with any lock-related emergency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="border border-white text-white bg-transparent hover:bg-white/10"
            >
              <a href="tel:5513037874" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call (551) 303-7874
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild className="text-primary hover:text-black">
              <a href="/book-online" className="flex items-center">
                Book Online
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;