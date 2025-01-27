import { Link } from 'react-router-dom';

const FooterCopyright = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} Locksmith & Security LLC. All rights reserved.</p>
      <p className="mt-4 space-x-4">
        <Link 
          to="/privacy-policy" 
          className="hover:text-secondary transition-colors" 
          aria-label="Read our privacy policy"
          onClick={handleClick}
        >
          Privacy Policy
        </Link>
        <span>&middot;</span>
        <Link 
          to="/terms-conditions" 
          className="hover:text-secondary transition-colors" 
          aria-label="View our terms and conditions"
          onClick={handleClick}
        >
          Terms & Conditions
        </Link>
      </p>
      <p className="mt-4">
        Designed with ❤️ by{' '}
        <a 
          href="https://gettmarketing.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-secondary transition-colors"
          aria-label="Visit Gett Marketing website"
        >
          Gett Marketing
        </a>
      </p>
    </div>
  );
};

export default FooterCopyright;