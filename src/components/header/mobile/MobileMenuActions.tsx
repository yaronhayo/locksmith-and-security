
import { ChevronRight, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const MobileMenuActions = () => {
  const navigate = useNavigate();
  
  return (
    <motion.div 
      className="mt-4 pt-4 border-t border-gray-700"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
      <div className="space-y-4">
        <Button 
          variant="ghost" 
          className="text-primary bg-primary/10 w-full justify-start font-medium"
          onClick={() => window.location.href = "tel:2017482070"}
        >
          <PhoneCall className="mr-2 h-4 w-4" />
          <span>(201) 748-2070</span>
        </Button>
        
        <Button 
          className="w-full bg-secondary hover:bg-secondary-hover" 
          onClick={() => {
            navigate("/book-online");
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span>Book Online</span>
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
};

export default MobileMenuActions;
