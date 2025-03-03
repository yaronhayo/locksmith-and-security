
import React from 'react';
import { CheckCircle } from 'lucide-react';

const ThankYouMessage = () => {
  return (
    <div className="text-center py-8">
      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <CheckCircle className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Request Received!</h3>
      <p className="text-gray-600 max-w-sm mx-auto">
        Thank you for contacting us. A member of our team will get back to you shortly.
      </p>
    </div>
  );
};

export default ThankYouMessage;
