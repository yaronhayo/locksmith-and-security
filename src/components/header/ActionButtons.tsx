
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActionButtonsProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const ActionButtons = ({ isMenuOpen, setIsMenuOpen }: ActionButtonsProps) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        className="hidden sm:flex gap-2 items-center"
        asChild
      >
        <a href="tel:2017482070">
          <Phone className="h-4 w-4" />
          <span className="hidden md:inline">(201) 748-2070</span>
          <span className="md:hidden">Call Now</span>
        </a>
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
