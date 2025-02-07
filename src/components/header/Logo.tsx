
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-3 group no-underline"
      aria-label="Locksmith & Security LLC - Go to homepage"
    >
      <div className="flex items-center gap-4">
        <img 
          src="/lovable-uploads/950b5c4c-f0b8-4d22-beb0-66a7d7554476.png" 
          alt="Locksmith & Security LLC Logo"
          className="h-8 md:h-16 w-auto transform transition-transform duration-300 group-hover:scale-105"
          style={{
            objectFit: 'contain',
            maxWidth: 'none'
          }}
          width="400"
          height="80"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </Link>
  );
};

export default Logo;
