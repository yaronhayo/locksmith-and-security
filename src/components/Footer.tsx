import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block">
              <img src="/logo.png" alt="Locksmith & Security LLC" className="h-12 mx-auto md:mx-0" />
            </Link>
            <p className="mt-4 text-white/90">
              Professional locksmith services available 24/7 in North Bergen and surrounding areas.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-secondary transition-colors relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-secondary transition-colors relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-2 group">
                <Phone className="w-5 h-5 group-hover:animate-bounce text-secondary" />
                <div>
                  <a href="tel:5513037874" className="hover:text-secondary transition-colors">(551) 303-7874</a>
                  <p className="text-sm text-success">24/7 Emergency Service</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 group">
                <MapPin className="w-5 h-5 text-secondary" />
                <address className="not-italic">
                  North Bergen, NJ 07047
                </address>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 group">
                <Mail className="w-5 h-5 text-secondary" />
                <a href="mailto:info@247locksmithandsecurity.com" className="hover:text-secondary transition-colors">
                  info@247locksmithandsecurity.com
                </a>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-white">Business Hours</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Clock className="w-5 h-5 text-secondary" />
                <div>
                  <p>Monday - Sunday</p>
                  <p className="text-white/90">Open 24 Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Locksmith & Security LLC. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-secondary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;