
import { Mail, MapPin, Phone } from "lucide-react";

const FooterContact = () => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
      <div className="space-y-2">
        <div className="flex items-center text-gray-300 hover:text-white transition-colors">
          <Phone className="h-4 w-4 mr-2 text-secondary" />
          <a href="tel:2017482070">(201) 748-2070</a>
        </div>
        <div className="flex items-center text-gray-300 hover:text-white transition-colors">
          <Mail className="h-4 w-4 mr-2 text-secondary" />
          <a href="mailto:info@247locksmithandsecurity.com">
            info@247locksmithandsecurity.com
          </a>
        </div>
        <div className="flex items-start text-gray-300 hover:text-white transition-colors">
          <MapPin className="h-4 w-4 mr-2 mt-1 text-secondary flex-shrink-0" />
          <a href="https://goo.gl/maps/mJhkEDDyzfZk1JaGA" target="_blank" rel="noopener noreferrer">
            5000 Tonnelle Ave, North Bergen, NJ 07047
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
