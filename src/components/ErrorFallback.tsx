
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { useEffect, useRef, useCallback } from "react";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary?: () => void;
}

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  // Log the error to console for debugging
  console.error("Caught error in ErrorFallback:", error);
  
  // Refs to track component state
  const hasCleanedUp = useRef(false);
  const isMounted = useRef(true);
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const recoveryAttemptCountRef = useRef(0);
  
  // Safer cleanup function
  const cleanupTimeouts = useCallback(() => {
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
    }
  }, []);
  
  // Safer DOM manipulation function
  const safelyCleanupDOM = useCallback(() => {
    if (!isMounted.current) return;
    
    try {
      // Remove the error UI if it exists
      const errorUI = document.querySelector('.error-fallback');
      if (errorUI && errorUI.parentNode) {
        errorUI.parentNode.removeChild(errorUI);
      }
      
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
        try {
          // @ts-ignore
          window.initGoogleMaps = undefined;
        } catch (e) {
          console.debug("Error cleaning up initGoogleMaps:", e);
        }
      }
      
      // 4. Use a safer approach for event listeners
      try {
        // Instead of replacing the body (which is risky),
        // remove any problematic event listeners by name
        const knownEventNames = [
          'resize', 'error', 'unhandledrejection', 
          'load', 'DOMContentLoaded', 'click'
        ];
        
        knownEventNames.forEach(eventName => {
          // Use a safer method that doesn't require rebuilding the DOM
          const noopHandler = () => {}; 
          window.removeEventListener(eventName, noopHandler);
        });
      } catch (e) {
        console.debug("Error safely cleaning up event listeners:", e);
      }
    } catch (e) {
      console.error("Error during DOM cleanup:", e);
    }
  }, []);
  
  // Clean up any hanging resources when an error occurs
  useEffect(() => {
    // Set mounted flag
    isMounted.current = true;
    
    // Prevent multiple cleanups
    if (hasCleanedUp.current) return;
    hasCleanedUp.current = true;
    
    // Execute cleanup
    safelyCleanupDOM();
    
    // Auto-recovery for timeout errors after 5 seconds
    if (error.message?.includes('Timeout') && resetErrorBoundary && recoveryAttemptCountRef.current < 3) {
      console.log(`Auto-recovery attempt ${recoveryAttemptCountRef.current + 1} for timeout error...`);
      
      resetTimeoutRef.current = setTimeout(() => {
        if (isMounted.current && resetErrorBoundary) {
          recoveryAttemptCountRef.current += 1;
          resetErrorBoundary();
        }
      }, 5000);
    }
    
    return () => {
      // Mark component as unmounted
      isMounted.current = false;
      
      // Clean up any timeouts
      cleanupTimeouts();
      
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
  }, [safelyCleanupDOM, cleanupTimeouts, error.message, resetErrorBoundary]);

  // Safely handle reset with debounce
  const handleReset = useCallback(() => {
    if (!isMounted.current || !resetErrorBoundary) return;
    
    // Debounce reset attempts
    cleanupTimeouts();
    
    // Do some cleanup before resetting
    try {
      // Clear any class on body that might be causing issues
      document.body.classList.remove('loading');
      
      // Reset error state
      hasCleanedUp.current = false;
      
      // Use timeout to avoid potential race conditions
      resetTimeoutRef.current = setTimeout(() => {
        if (isMounted.current && resetErrorBoundary) {
          console.log("User triggered error boundary reset");
          resetErrorBoundary();
        }
        resetTimeoutRef.current = null;
      }, 200);
    } catch (e) {
      console.error("Error during reset:", e);
      // If reset fails, try reloading the page
      try {
        window.location.reload();
      } catch (reloadError) {
        console.error("Error during page reload:", reloadError);
      }
    }
  }, [resetErrorBoundary, cleanupTimeouts]);

  // If the error is a timeout, show a more informative message
  const displayError = error.message?.includes('Timeout') 
    ? "The application is taking too long to load. This might be due to a slow network connection or temporary server issues."
    : (error.message || "An unexpected error occurred. Please try again.");

  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center p-8 text-center">
      <div className="mb-4 rounded-full bg-red-100 p-3">
        <AlertTriangle className="h-8 w-8 text-red-600" />
      </div>
      <h2 className="mb-2 text-2xl font-bold">Something went wrong</h2>
      <p className="mb-6 max-w-md text-gray-600">
        {displayError}
      </p>
      {resetErrorBoundary && (
        <Button 
          onClick={handleReset}
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" /> Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorFallback;
