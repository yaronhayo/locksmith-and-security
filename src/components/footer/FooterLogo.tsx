import { Shield } from 'lucide-react';

const FooterLogo = () => {
  return (
    <div>
      <div className="mb-6">
        <a href="/" aria-label="Go to homepage">
          <img 
            src="/lovable-uploads/8df28e35-4d5c-4015-bf99-2eb36af674c5.png" 
            alt="Locksmith & Security LLC Logo" 
            className="h-20 w-auto mx-auto md:mx-0"
            loading="lazy"
          />
        </a>
      </div>
      <p className="text-gray-300 mb-4 text-center md:text-left">
        Professional locksmith services available 24/7 in North Bergen and surrounding areas.
      </p>
      <p className="text-gray-300 mb-4 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
        <Shield className="w-4 h-4 text-secondary" />
        NJ DCA License #13VH13153100
      </p>
      <p className="text-xs text-gray-400 text-center md:text-left">
        This site is protected by reCAPTCHA and the Google{' '}
        <a 
          href="https://policies.google.com/privacy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-secondary hover:text-secondary-hover"
        >
          Privacy Policy
        </a>{' '}
        and{' '}
        <a 
          href="https://policies.google.com/terms" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-secondary hover:text-secondary-hover"
        >
          Terms of Service
        </a>{' '}
        apply.
      </p>
    </div>
  );
};

export default FooterLogo;