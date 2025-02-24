
import { Clock } from 'lucide-react';

const FooterHours = () => {
  return (
    <div className="text-center md:text-left order-2 md:order-none">
      <h3 className="text-xl font-bold mb-4 text-white">Business Hours</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-center md:justify-start space-x-2">
          <Clock className="w-5 h-5 text-secondary" />
          <div>
            <p className="font-semibold">Emergency Service</p>
            <p>24 Hours / 7 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterHours;
