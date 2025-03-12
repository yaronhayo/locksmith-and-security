
import { Menu, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ActionButtonsProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const ActionButtons = ({ isMenuOpen, setIsMenuOpen }: ActionButtonsProps) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        variant="secondary"
        className="flex gap-2 items-center group transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
        asChild
      >
        <a href="tel:2017482070">
          <Phone className="h-4 w-4 animate-phone-ring group-hover:text-black transition-transform duration-300" />
          <span className="hidden md:inline group-hover:text-black transition-colors duration-300">(201) 748-2070</span>
        </a>
      </Button>

      <Button
        size="sm"
        variant="default"
        className="flex gap-2 items-center group transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
        asChild
      >
        <Link to="/book-online">
          <Calendar className="h-4 w-4 group-hover:text-secondary transition-colors duration-300" />
          <span className="hidden md:inline group-hover:text-secondary transition-colors duration-300">Book Service</span>
        </Link>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <Menu className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ActionButtons;
