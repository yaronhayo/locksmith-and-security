import { Link } from 'react-router-dom';

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Services</h3>
        <ul role="list" className="mt-4 space-y-4">
          <li>
            <Link to="/services/car-lockout" className="text-base text-gray-300 hover:text-white transition-colors">
              Car Lockout
            </Link>
          </li>
          <li>
            <Link to="/services/house-lockout" className="text-base text-gray-300 hover:text-white transition-colors">
              House Lockout
            </Link>
          </li>
          <li>
            <Link to="/services/business-lockout" className="text-base text-gray-300 hover:text-white transition-colors">
              Business Lockout
            </Link>
          </li>
          <li>
            <Link to="/services/lock-change" className="text-base text-gray-300 hover:text-white transition-colors">
              Lock Change
            </Link>
          </li>
          <li>
            <Link to="/services/lock-rekey" className="text-base text-gray-300 hover:text-white transition-colors">
              Lock Rekey
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Service Areas</h3>
        <ul role="list" className="mt-4 space-y-4">
          <li>
            <Link to="/service-areas/north-bergen" className="text-base text-gray-300 hover:text-white transition-colors">
              North Bergen
            </Link>
          </li>
          <li>
            <Link to="/service-areas/jersey-city" className="text-base text-gray-300 hover:text-white transition-colors">
              Jersey City
            </Link>
          </li>
          <li>
            <Link to="/service-areas/union-city" className="text-base text-gray-300 hover:text-white transition-colors">
              Union City
            </Link>
          </li>
          <li>
            <Link to="/service-areas/west-new-york" className="text-base text-gray-300 hover:text-white transition-colors">
              West New York
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Company</h3>
        <ul role="list" className="mt-4 space-y-4">
          <li>
            <Link to="/about" className="text-base text-gray-300 hover:text-white transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-base text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/reviews" className="text-base text-gray-300 hover:text-white transition-colors">
              Reviews
            </Link>
          </li>
          <li>
            <Link to="/faq" className="text-base text-gray-300 hover:text-white transition-colors">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;