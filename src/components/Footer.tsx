import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/8df28e35-4d5c-4015-bf99-2eb36af674c5.png" 
                alt="Locksmith & Security LLC Logo" 
                className="h-20 w-auto mx-auto md:mx-0"
              />
            </div>
            <p className="text-gray-300 mb-4 text-center md:text-left">Professional locksmith services available 24/7 in North Bergen and surrounding areas.</p>
            <p className="text-gray-300 mb-4 text-center md:text-left">NJ DCA License #13VH13153100</p>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="hover:text-secondary transition-colors relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                  Services
                </a>
              </li>
              <li>
                <a href="/service-areas" className="hover:text-secondary transition-colors relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-secondary transition-colors relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-secondary transition-colors relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-2 group">
                <Phone className="w-5 h-5 group-hover:animate-bounce text-secondary" />
                <div>
                  <a href="tel:5513037874" className="hover:text-secondary transition-colors">(551) 303-7874</a>
                  <p className="text-sm text-red-400">24/7 Emergency Service</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 group">
                <MapPin className="w-5 h-5 group-hover:animate-bounce text-secondary" />
                <span>North Bergen, NJ</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 group">
                <Mail className="w-5 h-5 group-hover:animate-bounce text-secondary" />
                <a href="mailto:support@247locksmithandsecurity.com" className="hover:text-secondary transition-colors break-all">
                  support@247locksmithandsecurity.com
                </a>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Clock className="w-5 h-5 text-secondary" />
                <div>
                  <p className="font-semibold">Emergency Service</p>
                  <p>24 Hours / 7 Days</p>
                </div>
              </div>
              <div className="mt-2">
                <p className="font-semibold">Regular Office Hours:</p>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Locksmith & Security LLC. All rights reserved.</p>
            <p className="mt-2 space-x-4">
              <a href="/privacy-policy" className="hover:text-secondary transition-colors relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                Privacy Policy
              </a>
              <span>&middot;</span>
              <a href="/terms-conditions" className="hover:text-secondary transition-colors relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                Terms & Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;