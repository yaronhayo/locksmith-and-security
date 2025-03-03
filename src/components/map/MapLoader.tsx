
import { ReactNode, useEffect, useState, useRef } from 'react';
import LoadingSpinner from '../LoadingSpinner';
import { Button } from '../ui/button';
import { RefreshCw } from 'lucide-react';

interface MapLoaderProps {
  children?: ReactNode;
  text?: string;
  timeoutSeconds?: number;
}

const MapLoader = ({ 
  children, 
  text = "Loading map...",
  timeoutSeconds = 15 
}: MapLoaderProps) => {
  const [loadTime, setLoadTime] = useState(0);
  const [showRetryButton, setShowRetryButton] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isMountedRef = useRef(true);
  
  useEffect(() => {
    isMountedRef.current = true;
    const startTime = Date.now();
    
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Track loading time and offer retry after specified seconds
    intervalRef.current = setInterval(() => {
      if (!isMountedRef.current) return;
      
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setLoadTime(elapsed);
      
      if (elapsed > timeoutSeconds && !showRetryButton) {
        setShowRetryButton(true);
      }
    }, 1000);
    
    return () => {
      isMountedRef.current = false;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [showRetryButton, timeoutSeconds]);
  
  const handleRetry = () => {
    // First clear Google Maps state if it exists
    try {
      if (window.google && window.google.maps) {
        // @ts-ignore - Remove the API
        if (window.google._maps_) {
          // @ts-ignore
          delete window.google._maps_;
        }
      }
      
      if (window.initGoogleMaps) {
        // @ts-ignore
        window.initGoogleMaps = undefined;
      }
    } catch (e) {
      console.error("Error cleaning up maps before retry:", e);
    }
    
    // Then reload the window
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
