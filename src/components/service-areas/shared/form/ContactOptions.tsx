
import React from "react";
import { Phone, Mail, Clock } from "lucide-react";
import { getPhoneNumber } from "@/utils/phoneUtils";

const ContactOptions = () => {
  return (
    <div className="mt-8 border-t border-gray-200 pt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Other ways to contact us</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Phone</p>
            <a
              href={`tel:${getPhoneNumber()}`}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              {getPhoneNumber()}
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Email</p>
            <a
              href="mailto:support@247locksmithandsecurity.com"
              className="text-sm text-blue-600 hover:text-blue-800 break-all"
            >
              support@247locksmithandsecurity.com
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Hours</p>
            <p className="text-sm">24/7 Emergency Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOptions;
