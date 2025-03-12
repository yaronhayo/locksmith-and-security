
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRight, PhoneCall } from "lucide-react";

const HeroActions = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Link
          to="/book-online"
          className={cn(
            buttonVariants({ size: "lg" }),
            "font-semibold bg-secondary hover:bg-secondary-hover/90 text-white"
          )}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Book Online
          <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <a
          href="tel:2017482070"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "font-semibold border-white/20 text-white hover:bg-white/10"
          )}
        >
          <PhoneCall className="mr-2 h-4 w-4" />
          (201) 748-2070
        </a>
      </motion.div>
    </div>
  );
};

export default HeroActions;
