
import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

type NavigationContextType = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  selectedPath: string;
  setSelectedPath: (path: string) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState('');
  const location = useLocation();
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const prevPathRef = useRef(location.pathname);
  
  // Clean up timeouts when the component unmounts
  useEffect(() => {
    return () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
        navigationTimeoutRef.current = null;
      }
    };
  }, []);
  
  // Update the selected path when the location changes
  useEffect(() => {
    // Add debouncing to prevent rapid navigation changes
    if (prevPathRef.current === location.pathname) {
      return; // Skip if the path hasn't actually changed
    }
    
    console.log(`NavigationContext: Path changed from ${prevPathRef.current} to ${location.pathname}`);
    prevPathRef.current = location.pathname;
    
    // Clear any existing timeout
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }
    
    // Set a timeout to update the selected path
    navigationTimeoutRef.current = setTimeout(() => {
      setSelectedPath(location.pathname);
      setIsMobileMenuOpen(false); // Close mobile menu on navigation
      navigationTimeoutRef.current = null;
    }, 50);
  }, [location.pathname]);

  return (
    <NavigationContext.Provider
      value={{
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        selectedPath,
        setSelectedPath,
      }}
    >
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
