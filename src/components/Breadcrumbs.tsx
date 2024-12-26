import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on homepage
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav 
      className="flex px-4 py-2 bg-gray-50 border-b" 
      aria-label="Breadcrumb"
    >
      <ol className="container mx-auto flex items-center space-x-2 text-sm">
        <li>
          <Link 
            to="/" 
            className="text-primary hover:text-primary-hover flex items-center"
            aria-label="Home"
          >
            <Home className="h-4 w-4" />
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const formattedName = name.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ');

          return (
            <li key={name} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-gray-400 mx-1" aria-hidden="true" />
              {isLast ? (
                <span className="text-gray-700" aria-current="page">
                  {formattedName}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-primary hover:text-primary-hover"
                >
                  {formattedName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;