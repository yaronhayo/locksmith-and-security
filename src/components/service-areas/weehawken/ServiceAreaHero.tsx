import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceAreaHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-6">
        <MapPin className="h-6 w-6 text-primary" />
        <h2 className="text-2xl md:text-3xl font-bold">Serving Weehawken, NJ</h2>
      </div>
      <p className="text-lg text-gray-700 mb-6">
        At Locksmith & Security LLC, we provide comprehensive locksmith services throughout Weehawken. 
        Our team of experienced professionals is available 24/7 to handle all your residential, 
        commercial, and automotive locksmith needs with prompt and reliable service.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="w-full sm:w-auto" asChild>
          <a href="tel:+12017482070">
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </a>
        </Button>
        <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
          <Link to="/book-online">
            Book Online
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceAreaHero;