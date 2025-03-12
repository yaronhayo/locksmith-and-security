
import React from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";

const ContactOptions = () => {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
          <Phone className="h-5 w-5 text-secondary" />
        </div>
        <h3 className="text-lg font-medium mb-1">Call Us</h3>
        <a href="tel:2017482070" className="text-secondary hover:underline">(201) 748-2070</a>
      </div>
      
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
          <Mail className="h-5 w-5 text-secondary" />
        </div>
        <h3 className="text-lg font-medium mb-1">Email Us</h3>
        <a href="mailto:info@247locksmithandsecurity.com" className="text-secondary hover:underline text-sm sm:text-base">info@247locksmithandsecurity.com</a>
      </div>
      
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
          <MessageSquare className="h-5 w-5 text-secondary" />
        </div>
        <h3 className="text-lg font-medium mb-1">Emergency Service</h3>
        <p className="text-gray-700">Available 24/7 for urgent assistance</p>
      </div>
    </div>
  );
};

export default ContactOptions;
