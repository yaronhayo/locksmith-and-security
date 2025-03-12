
import { ExternalLink, Mail, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ContactOptions = () => {
  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Other Ways to Reach Us</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-medium">Call us directly</p>
            <a 
              href="tel:2017482070" 
              className="text-primary hover:underline transition-all"
            >
              (201) 748-2070
            </a>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-medium">Email us</p>
            <a 
              href="mailto:info@247locksmithandsecurity.com" 
              className="text-primary hover:underline transition-all"
            >
              info@247locksmithandsecurity.com
            </a>
          </div>
        </div>
      </div>
      
      <Separator className="my-6" />
      
      <div className="flex items-center justify-center">
        <ExternalLink className="h-4 w-4 mr-2 text-gray-500" />
        <a 
          href="/book-online" 
          className="text-primary hover:underline transition-all"
        >
          Or book a service online
        </a>
      </div>
    </div>
  );
};

export default ContactOptions;
