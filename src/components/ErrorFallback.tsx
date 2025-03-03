
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { useEffect, useRef } from "react";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary?: () => void;
}

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  // Log the error to console for debugging
  console.error("Caught error:", error);
  
  // Ref to track cleanup state
  const hasCleanedUp = useRef(false);
  
  // Clean up any hanging resources when an error occurs
  useEffect(() => {
    // Prevent multiple cleanups
    if (hasCleanedUp.current) return;
    hasCleanedUp.current = true;
    
    // Clean up any DOM resources that might be causing issues
    const cleanupDom = () => {
      try {
        // Target specific elements that might cause issues
        
        // 1. Clean up iframes safely
        const problematicIframes = document.querySelectorAll('iframe');
        problematicIframes.forEach(iframe => {
          try {
            // Just clear the src instead of removing
            if (iframe && iframe.src && iframe.src !== 'about:blank') {
              iframe.src = 'about:blank';
            }
          } catch (e) {
            console.debug("Error cleaning up iframe:", e);
          }
        });
        
        // 2. Clean up Google Maps scripts
        if (window.google && window.google.maps) {
          // Try to clean up any Google Maps instances
          try {
            // @ts-ignore - Remove the API
            if (window.google._maps_) {
              // @ts-ignore
              delete window.google._maps_;
            }
          } catch (e) {
            console.debug("Error cleaning up Google Maps:", e);
          }
        }
        
        // 3. Clean up global callbacks
        if (window.initGoogleMaps) {
          // @ts-ignore
          window.initGoogleMaps = undefined;
        }
        
        // 4. Remove any dangling event listeners on body
        try {
          const newBody = document.body.cloneNode(true);
          const oldBody = document.body;
          if (oldBody.parentNode) {
            oldBody.parentNode.replaceChild(newBody, oldBody);
          }
        } catch (e) {
          console.debug("Error replacing body:", e);
        }
      } catch (e) {
        console.error("Error during DOM cleanup:", e);
      }
    };
    
    // Execute cleanup
    cleanupDom();
    
    return () => {
      // Additional cleanup when error boundary unmounts
      try {
        if (window.initGoogleMaps) {
          // @ts-ignore
          window.initGoogleMaps = undefined;
        }
      } catch (e) {
        console.debug("Error during unmount cleanup:", e);
      }
    };
  }, []);

  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center p-8 text-center">
      <div className="mb-4 rounded-full bg-red-100 p-3">
        <AlertTriangle className="h-8 w-8 text-red-600" />
      </div>
      <h2 className="mb-2 text-2xl font-bold">Something went wrong</h2>
      <p className="mb-6 max-w-md text-gray-600">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      {resetErrorBoundary && (
        <Button 
          onClick={() => {
            // Do some cleanup before resetting
            try {
              // Clear any class on body that might be causing issues
              document.body.classList.remove('loading');
              
              // Reset error state
              hasCleanedUp.current = false;
              
              // Then reset the error boundary
              resetErrorBoundary();
            } catch (e) {
              console.error("Error during reset:", e);
              // If reset fails, try reloading the page
              window.location.reload();
            }
          }}
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" /> Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorFallback;
