import { Phone } from 'lucide-react';
import ImageOptimized from '../ui/image-optimized';

const TopBar = () => {
  return (
    <div className="bg-primary text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <a href="tel:+12017482070" className="text-sm hover:underline">
              (201) 748-2070
            </a>
          </div>
          <div className="text-sm">
            24/7 Emergency Service Available
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;