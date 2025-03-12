
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import DynamicPhoneNumber from '@/components/common/DynamicPhoneNumber';

const FooterContact = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="text-center md:text-left order-1 md:order-none">
      <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-center md:justify-start space-x-2 group">
          <Phone className="w-5 h-5 group-hover:animate-bounce text-secondary" />
          <div>
            <DynamicPhoneNumber className="hover:text-secondary transition-colors" aria-label="Call our 24/7 emergency service" />
            <p className="text-sm text-[#90EE90]">24/7 Emergency Service</p>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start space-x-2 group">
          <MapPin className="w-5 h-5 group-hover:animate-bounce text-secondary" />
          <Link 
            to="/service-areas" 
            className="hover:text-secondary transition-colors" 
            aria-label="View our service areas"
            onClick={handleClick}
          >
            Serving North Bergen, NJ and surrounding areas
          </Link>
        </div>
        <div className="flex items-center justify-center md:justify-start space-x-2 group">
          <Mail className="w-5 h-5 group-hover:animate-bounce text-secondary" />
          <a 
            href="mailto:info@247locksmithandsecurity.com" 
            className="hover:text-secondary transition-colors break-all" 
            aria-label="Email our support team"
          >
            info@247locksmithandsecurity.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
