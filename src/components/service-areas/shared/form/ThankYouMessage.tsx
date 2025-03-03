
import React from 'react';
import { CheckCircle } from 'lucide-react';

const ThankYouMessage: React.FC = () => {
  return (
    <div className="text-center py-8 px-4 max-w-md mx-auto">
      <div className="flex justify-center mb-4">
        <div className="bg-green-100 p-3 rounded-full">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
      <p className="mb-4">
        Your request has been submitted successfully. One of our experts will contact you shortly.
      </p>
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-left mb-6">
        <h3 className="font-semibold text-gray-700 mb-2">What happens next?</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="bg-primary/10 text-primary p-1 rounded-full flex-shrink-0 mt-0.5">
              <CheckCircle className="h-3 w-3" />
            </span>
            <span>You'll receive a confirmation SMS shortly.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-primary/10 text-primary p-1 rounded-full flex-shrink-0 mt-0.5">
              <CheckCircle className="h-3 w-3" />
            </span>
            <span>A locksmith expert will call to confirm details and provide an estimated arrival time.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-primary/10 text-primary p-1 rounded-full flex-shrink-0 mt-0.5">
              <CheckCircle className="h-3 w-3" />
            </span>
            <span>Our professional will arrive at your location with all necessary equipment.</span>
          </li>
        </ul>
      </div>
      <p className="text-sm text-gray-500">
        If you need immediate assistance, please call us directly at <a href="tel:+12017482070" className="text-primary font-medium">(201) 748-2070</a>
      </p>
    </div>
  );
};

export default ThankYouMessage;
