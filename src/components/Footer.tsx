import { Phone, Mail, MapPin, Clock, Shield, Wrench, Map, HelpCircle, Star, Info, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <a href="/" aria-label="Go to homepage">
                <img 
                  src="/lovable-uploads/8df28e35-4d5c-4015-bf99-2eb36af674c5.png" 
                  alt="Locksmith & Security LLC Logo" 
                  className="h-20 w-auto mx-auto md:mx-0"
                  loading="lazy"
                />
              </a>
            </div>
            <p className="text-gray-300 mb-4 text-center md:text-left">Professional locksmith services available 24/7 in North Bergen and surrounding areas.</p>
            <p className="text-gray-300 mb-4 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
              <Shield className="w-4 h-4 text-secondary" />
              NJ DCA License #13VH13153100
            </p>
          </div>
          
          <div className="text-center md:text-left order-1 md:order-none">
            <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-2 group">
                <Phone className="w-5 h-5 group-hover:animate-bounce text-secondary" />
                <div>
                  <a 
                    href="tel:5513037874" 
                    className="hover:text-secondary transition-colors" 
                    aria-label="Call our 24/7 emergency service"
                  >
                    (551) 303-7874
                  </a>
                  <p className="text-sm text-[#90EE90]">24/7 Emergency Service</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 group">
                <MapPin className="w-5 h-5 group-hover:animate-bounce text-secondary" />
                <a 
                  href="/service-areas" 
                  className="hover:text-secondary transition-colors" 
                  aria-label="View our service areas"
                >
                  Serving North Bergen, NJ and surrounding areas
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 group">
                <Mail className="w-5 h-5 group-hover:animate-bounce text-secondary" />
                <a 
                  href="mailto:support@247locksmithandsecurity.com" 
                  className="hover:text-secondary transition-colors break-all" 
                  aria-label="Email our support team"
                >
                  support@247locksmithandsecurity.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-left order-3 md:order-none">
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/services" 
                  className="hover:text-secondary transition-colors flex items-center gap-2" 
                  aria-label="View our locksmith services"
                >
                  <Wrench className="w-4 h-4 text-secondary" />
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="/service-areas" 
                  className="hover:text-secondary transition-colors flex items-center gap-2" 
                  aria-label="Check our service coverage areas"
                >
                  <Map className="w-4 h-4 text-secondary" />
                  Service Areas
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="hover:text-secondary transition-colors flex items-center gap-2" 
                  aria-label="Learn more about our company"
                >
                  <Info className="w-4 h-4 text-secondary" />
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="hover:text-secondary transition-colors flex items-center gap-2" 
                  aria-label="Contact our team"
                >
                  <MessageSquare className="w-4 h-4 text-secondary" />
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="/faq" 
                  className="hover:text-secondary transition-colors flex items-center gap-2" 
                  aria-label="View frequently asked questions"
                >
                  <HelpCircle className="w-4 h-4 text-secondary" />
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="/reviews" 
                  className="hover:text-secondary transition-colors flex items-center gap-2" 
                  aria-label="Read customer reviews"
                >
                  <Star className="w-4 h-4 text-secondary" />
                  Reviews
                </a>
              </li>
            </ul>
          </div>

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
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Locksmith & Security LLC. All rights reserved.</p>
            <p className="mt-2 space-x-4">
              <a 
                href="/privacy-policy" 
                className="hover:text-secondary transition-colors" 
                aria-label="Read our privacy policy"
              >
                Privacy Policy
              </a>
              <span>&middot;</span>
              <a 
                href="/terms-conditions" 
                className="hover:text-secondary transition-colors" 
                aria-label="View our terms and conditions"
              >
                Terms & Conditions
              </a>
            </p>
            <p className="mt-4">
              Designed with ❤️ by{' '}
              <a 
                href="https://gettmarketing.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-secondary transition-colors"
                aria-label="Visit Gett Marketing website"
              >
                Gett Marketing
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;