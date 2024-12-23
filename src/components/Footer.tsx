import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/9b00adf3-451e-4d1c-a118-6a6f06293ec0.png" 
                alt="Locksmith & Security LLC Logo" 
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4">Professional locksmith services available 24/7 in North Bergen and surrounding areas.</p>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <a href="tel:5513037874" className="hover:text-secondary transition-colors">(551) 303-7874</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="/service-areas" className="hover:text-secondary transition-colors">Service Areas</a></li>
              <li><a href="/about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>North Bergen, NJ</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@locksmithandsecurity.com" className="hover:text-secondary transition-colors">
                  info@locksmithandsecurity.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Locksmith & Security LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
