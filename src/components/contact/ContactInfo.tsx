
import React from "react";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Our Contact Information</h2>
      <div className="space-y-6">
        <div className="flex items-start">
          <Phone className="text-primary w-5 h-5 mt-1 mr-4" />
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-gray-700">
              <a href="tel:2017482070" className="hover:text-primary transition-colors">
                (201) 748-2070
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-1">Available 24/7 for emergencies</p>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="text-primary w-5 h-5 mt-1 mr-4" />
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-gray-700">
              <a href="https://maps.google.com/?q=5000+Tonnelle+Ave,+North+Bergen,+NJ+07047" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                5000 Tonnelle Ave, North Bergen, NJ 07047
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="text-primary w-5 h-5 mt-1 mr-4" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-700">
              <a href="mailto:info@247locksmithandsecurity.com" className="hover:text-primary transition-colors">
                info@247locksmithandsecurity.com
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-1">We'll respond as soon as possible</p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="text-primary w-5 h-5 mt-1 mr-4" />
          <div>
            <h3 className="font-semibold">Business Hours</h3>
            <p className="text-gray-700">24/7 Emergency Service</p>
            <p className="text-gray-700">Regular Hours: Mon-Fri 8AM-8PM</p>
            <p className="text-gray-700">Weekends: 9AM-5PM</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-center mb-2">License & Insurance</h3>
        <p className="text-center text-gray-700">
          NJ License #13VH13153100 | Fully Insured
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
