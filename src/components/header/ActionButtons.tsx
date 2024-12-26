import { Phone, Calendar, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ActionButtonsProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const ActionButtons = ({ isMenuOpen, setIsMenuOpen }: ActionButtonsProps) => {
  return (
    <div className="flex items-center space-x-4">
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
      <div className="flex md:hidden items-center space-x-2">
        <Button asChild size="sm" className="bg-secondary hover:bg-secondary-hover text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          <a href="/booking" className="inline-flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            Book
          </a>
        </Button>
        <a href="tel:5513037874">
          <Button 
            size="icon" 
            variant="default" 
            className="hover:bg-primary-hover transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="h-6 w-6 animate-phone-ring" />
          </Button>
        </a>
        <Button 
          variant="outline" 
          size="icon" 
          className="hover:bg-primary/5 transition-all duration-300 transform hover:scale-105 z-50" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;