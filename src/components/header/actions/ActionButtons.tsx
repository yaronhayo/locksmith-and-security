
import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ActionButtons = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex items-center gap-2 lg:gap-3">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <a 
          href="tel:2017482070"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "text-primary hover:bg-primary/5 hidden md:flex"
          )}
        >
          <PhoneCall className="mr-2 h-4 w-4" />
          (201) 748-2070
        </a>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Button 
          size="sm"
          className="bg-secondary hover:bg-secondary-hover"
          onClick={() => {
            navigate("/book-online");
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Book Online
        </Button>
      </motion.div>
    </div>
  );
};

export default ActionButtons;
