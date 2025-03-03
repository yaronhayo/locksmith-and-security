
import { ReactNode, useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';
import { Button } from '../ui/button';
import { RefreshCw } from 'lucide-react';

interface MapLoaderProps {
  children?: ReactNode;
  text?: string;
}

const MapLoader = ({ children, text = "Loading map..." }: MapLoaderProps) => {
  const [loadTime, setLoadTime] = useState(0);
  const [showRetryButton, setShowRetryButton] = useState(false);
  
  useEffect(() => {
    // Track loading time and offer retry after 10 seconds
    const startTime = Date.now();
    
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setLoadTime(elapsed);
      
      if (elapsed > 10 && !showRetryButton) {
        setShowRetryButton(true);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [showRetryButton]);
  
  const handleRetry = () => {
    // Reload the current window
    window.location.reload();
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
      <div className="text-center p-6">
        <LoadingSpinner />
        <p className="mt-2 text-sm text-gray-500">
          {text} {loadTime > 5 ? `(${loadTime}s)` : ''}
        </p>
        {children}
        
        {showRetryButton && (
          <div className="mt-4">
            <p className="text-sm text-amber-600 mb-2">
              Map is taking longer than expected to load.
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleRetry}
              className="flex items-center gap-1"
            >
              <RefreshCw className="h-3 w-3" /> Retry
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapLoader;
