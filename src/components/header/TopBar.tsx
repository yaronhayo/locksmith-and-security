
import { Phone, Mail, Clock } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-white text-sm py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a 
              href="tel:2017482070" 
              className="flex items-center gap-1 hover:text-secondary transition-colors"
              aria-label="Call our emergency service"
            >
              <Phone className="h-4 w-4" />
              <span>(201) 748-2070</span>
            </a>
            <a 
              href="mailto:info@247locksmithandsecurity.com"
              className="hidden sm:flex items-center gap-1 hover:text-secondary transition-colors"
              aria-label="Email us"
            >
              <Mail className="h-4 w-4" />
              <span>info@247locksmithandsecurity.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-secondary" />
            <span>24/7 Emergency Service</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
