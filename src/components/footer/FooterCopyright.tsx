import { Link } from "react-router-dom";

const FooterCopyright = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
      <p>© {currentYear} Locksmith & Security LLC. All rights reserved.</p>
      <div className="flex gap-4 mt-2 sm:mt-0">
        <Link to="/privacy-policy" className="hover:text-white transition-colors">
          Privacy Policy
        </Link>
        <Link to="/terms-conditions" className="hover:text-white transition-colors">
          Terms & Conditions
        </Link>
      </div>
    </div>
  );
};

export default FooterCopyright;