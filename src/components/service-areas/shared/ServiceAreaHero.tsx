
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import BookingForm from "@/components/BookingForm";
import { memo } from "react";
import DynamicPhoneNumber from "@/components/common/DynamicPhoneNumber";
import { usePhoneNumber } from "@/utils/phoneUtils";

interface ServiceAreaHeroProps {
  areaName: string;
  isLoading?: boolean;
}

const ServiceAreaHero = ({ areaName, isLoading = false }: ServiceAreaHeroProps) => {
  const { phoneHref } = usePhoneNumber();
  
  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-6 rounded" />
          <Skeleton className="h-8 w-48" />
        </div>
        <Skeleton className="h-24 w-full" />
        <div className="flex flex-col sm:flex-row gap-4">
          <Skeleton className="h-10 w-full sm:w-32" />
          <Skeleton className="h-10 w-full sm:w-32" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 w-full lg:w-1/2"
      >
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Serving {areaName}, NJ</h1>
        </div>
        <p className="text-base sm:text-lg text-gray-700 md:text-xl">
          At Locksmith & Security LLC, we provide comprehensive locksmith services throughout {areaName}. 
          Our team of experienced professionals is available 24/7 to handle all your residential, 
          commercial, and automotive locksmith needs with professional and reliable service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
            <a href={phoneHref}>
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
            <Link to="/book-online">
              Book Online
            </Link>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-xl shadow-sm p-4 sm:p-6 w-full lg:w-1/2 overflow-hidden"
      >
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-primary">Book Your Locksmith Service</h2>
        <BookingForm />
      </motion.div>
    </div>
  );
};

export default memo(ServiceAreaHero);
