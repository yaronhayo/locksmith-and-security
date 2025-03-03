
import { AlertCircle, RefreshCw } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

interface MapErrorProps {
  error: string;
  resetErrorBoundary?: () => void;
}

const MapError = ({ error, resetErrorBoundary }: MapErrorProps) => {
  const hasLogged = useRef(false);
  
  // Log error only once
  useEffect(() => {
    if (!hasLogged.current) {
      console.error('Map Error:', error);
      hasLogged.current = true;
    }
    
    // Cleanup function - helps with safer component unmounting
    return () => {
      hasLogged.current = false;
    };
  }, [error]);

  // Safely handle retry
  const handleRetry = () => {
    try {
      if (resetErrorBoundary) {
        resetErrorBoundary();
      }
    } catch (e) {
      console.error("Error during map reset:", e);
    }
  };

  return (
    <div className="p-4 w-full">
      <Alert variant="destructive" className="mb-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Map loading error</AlertTitle>
        <AlertDescription>
          {error}
        </AlertDescription>
      </Alert>
      
      {resetErrorBoundary && (
        <div className="flex justify-center mt-2">
          <Button 
            onClick={handleRetry}
            variant="outline" 
            size="sm"
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" /> Retry Loading Map
          </Button>
        </div>
      )}

      <div className="mt-4 text-xs text-gray-500">
        <p>If this problem persists, please check:</p>
        <ul className="list-disc pl-5 mt-1">
          <li>Your internet connection is working</li>
          <li>No content blockers are preventing Google Maps from loading</li>
          <li>Try refreshing the page</li>
        </ul>
      </div>
    </div>
  );
};

export default MapError;
