import { Link } from 'react-router-dom';

const FooterBottom = () => {
  return (
    <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
      <div className="flex space-x-6 md:order-2">
        <Link 
          to="/privacy-policy" 
          className="text-gray-400 hover:text-gray-300 transition-colors"
          aria-label="Read our privacy policy"
        >
          Privacy Policy
        </Link>
        <Link 
          to="/terms-conditions" 
          className="text-gray-400 hover:text-gray-300 transition-colors"
          aria-label="Read our terms and conditions"
        >
          Terms & Conditions
        </Link>
      </div>
      <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
        © {new Date().getFullYear()} Locksmith & Security LLC. All rights reserved. NJ DCA License #13VH13153100
      </p>
    </div>
  );
};

export default FooterBottom;