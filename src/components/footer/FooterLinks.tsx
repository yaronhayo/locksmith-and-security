import { Wrench, Map, Info, MessageSquare, HelpCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterLinks = () => {
  return (
    <div className="text-center md:text-left order-3 md:order-none">
      <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <Link 
            to="/services" 
            className="hover:text-secondary transition-colors flex items-center gap-2" 
            aria-label="View our locksmith services"
          >
            <Wrench className="w-4 h-4 text-secondary" />
            Services
          </Link>
        </li>
        <li>
          <Link 
            to="/service-areas" 
            className="hover:text-secondary transition-colors flex items-center gap-2" 
            aria-label="Check our service coverage areas"
          >
            <Map className="w-4 h-4 text-secondary" />
            Service Areas
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className="hover:text-secondary transition-colors flex items-center gap-2" 
            aria-label="Learn more about our company"
          >
            <Info className="w-4 h-4 text-secondary" />
            About Us
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className="hover:text-secondary transition-colors flex items-center gap-2" 
            aria-label="Contact our team"
          >
            <MessageSquare className="w-4 h-4 text-secondary" />
            Contact
          </Link>
        </li>
        <li>
          <Link 
            to="/faq" 
            className="hover:text-secondary transition-colors flex items-center gap-2" 
            aria-label="View frequently asked questions"
          >
            <HelpCircle className="w-4 h-4 text-secondary" />
            FAQ
          </Link>
        </li>
        <li>
          <Link 
            to="/reviews" 
            className="hover:text-secondary transition-colors flex items-center gap-2" 
            aria-label="Read customer reviews"
          >
            <Star className="w-4 h-4 text-secondary" />
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;