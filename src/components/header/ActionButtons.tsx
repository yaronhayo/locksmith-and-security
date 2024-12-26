import { Phone, Calendar, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ActionButtonsProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const ActionButtons = ({ isMenuOpen, setIsMenuOpen }: ActionButtonsProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="hidden md:flex items-center space-x-4">
        <a href="tel:5513037874" className="inline-flex items-center space-x-2 text-xl font-bold text-primary hover:text-secondary transition-all duration-300 group transform hover:scale-105">
          <Phone className="w-6 h-6 animate-phone-ring" />
          <span className="text-2xl transform transition-transform duration-300 group-hover:translate-y-[-2px]">(551) 303-7874</span>
        </a>
        <Button asChild className="bg-secondary hover:bg-secondary-hover text-white text-lg px-6 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          <a href="/booking" className="inline-flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Book Online
          </a>
        </Button>
      </div>
      <div className="flex md:hidden items-center gap-2">
        <Button asChild size="sm" variant="secondary" className="px-3 py-1.5">
          <a href="/booking" className="inline-flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            Book
          </a>
        </Button>
        <Button asChild size="sm" variant="default" className="px-3 py-1.5">
          <a href="tel:5513037874" className="inline-flex items-center">
            <Phone className="h-4 w-4" />
          </a>
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="p-1.5" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;