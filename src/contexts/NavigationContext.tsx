
import { createContext, useContext, ReactNode, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavigationContextType {
  navigateTo: (path: string) => void;
  currentPath: string;
  isActive: (path: string) => boolean;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navigateTo = useCallback((path: string) => {
    // If we're already on this page, don't trigger unnecessary navigation
    if (location.pathname === path) {
      // Just scroll to top 
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Navigate and scroll to top
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate, location.pathname]);
  
  const isActive = useCallback((path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  }, [location.pathname]);
  
  return (
    <NavigationContext.Provider value={{ 
      navigateTo, 
      currentPath: location.pathname,
      isActive
    }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
