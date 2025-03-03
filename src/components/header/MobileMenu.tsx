
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) => {
  if (!isMenuOpen) return null;
  
  return (
    <div 
      className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 border-b border-white/10 bg-primary/95"
      aria-hidden={!isMenuOpen}
    >
      <span className="text-white text-lg font-semibold">Menu</span>
      <Button 
        variant="ghost" 
        size="icon"
        className="text-white hover:bg-white/10"
        onClick={() => setIsMenuOpen(false)}
        aria-label="Close menu"
      >
        <X className="h-6 w-6 text-white" strokeWidth={2.5} aria-hidden="true" />
      </Button>
    </div>
  );
};

export default MobileMenu;
