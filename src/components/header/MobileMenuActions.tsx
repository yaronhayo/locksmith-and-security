
import { Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MobileMenuActionsProps } from './types/navigation';
import PhoneNumber from "@/components/shared/PhoneNumber";

const MobileMenuActions = ({ isMenuOpen }: MobileMenuActionsProps) => {
  if (!isMenuOpen) return null;

  return (
    <div className="mt-2 space-y-3 w-full px-4">
      <Button 
        asChild 
        variant="secondary" 
        className="w-full max-w-[calc(100%-2rem)] mx-auto bg-secondary hover:bg-secondary-hover text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        <Link to="/book-online" className="inline-flex items-center justify-center gap-2">
          <Calendar className="w-5 h-5" />
          Book Service
        </Link>
      </Button>
      
      <PhoneNumber 
        showIcon={true} 
        iconClassName="w-5 h-5 animate-phone-ring" 
        linkClassName="w-full max-w-[calc(100%-2rem)] mx-auto inline-flex items-center justify-center gap-2 py-3 px-4 bg-white/10 rounded-md text-white text-lg font-bold hover:bg-white/20 transition-all duration-300"
      />
    </div>
  );
};

export default MobileMenuActions;
