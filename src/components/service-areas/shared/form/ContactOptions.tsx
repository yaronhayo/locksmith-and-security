
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactOptions = () => {
  return (
    <div className="mt-8 border-t border-gray-200 pt-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Other ways to reach us:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a 
          href="tel:2017482070" 
          className="flex items-center p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
        >
          <Phone className="h-5 w-5 text-primary mr-3" />
          <span className="text-gray-700">(201) 748-2070</span>
        </a>
        <a 
          href="mailto:info@locksmithandsecurity.com" 
          className="flex items-center p-3 bg-secondary/5 rounded-lg hover:bg-secondary/10 transition-colors"
        >
          <Mail className="h-5 w-5 text-secondary mr-3" />
          <span className="text-gray-700">info@locksmithandsecurity.com</span>
        </a>
      </div>
    </div>
  );
};

export default ContactOptions;
