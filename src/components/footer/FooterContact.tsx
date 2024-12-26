import { Phone, Mail, MapPin } from 'lucide-react';

const FooterContact = () => {
  return (
    <div className="mt-12 md:mt-0">
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Contact Us</h3>
      <ul role="list" className="mt-4 space-y-4">
        <li>
          <a 
            href="tel:5513037874" 
            className="flex items-center text-base text-gray-300 hover:text-white transition-colors"
            aria-label="Call us at (551) 303-7874"
          >
            <Phone className="h-5 w-5 mr-2" />
            (551) 303-7874
          </a>
        </li>
        <li>
          <a 
            href="mailto:info@247locksmithandsecurity.com" 
            className="flex items-center text-base text-gray-300 hover:text-white transition-colors"
            aria-label="Email us at info@247locksmithandsecurity.com"
          >
            <Mail className="h-5 w-5 mr-2" />
            info@247locksmithandsecurity.com
          </a>
        </li>
        <li>
          <div className="flex items-center text-base text-gray-300">
            <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
            <span>North Bergen, NJ 07047</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;