
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
            Services
          </Link>
        </li>
        <li>
          <Link to="/service-areas" className="text-gray-300 hover:text-white transition-colors">
            Service Areas
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/reviews" className="text-gray-300 hover:text-white transition-colors">
            Reviews
          </Link>
        </li>
        <li>
          <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/sitemap" className="text-gray-300 hover:text-white transition-colors">
            Sitemap
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
