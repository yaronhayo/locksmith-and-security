
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { useEffect } from "react";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary?: () => void;
}

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  // Log the error to console for debugging
  console.error("Caught error:", error);
  
  // Clean up any hanging resources when an error occurs
  useEffect(() => {
    // Try to prevent iframe-related memory leaks and DOM reference errors
    const cleanupDom = () => {
      try {
        // Clean up any iframes that might be causing issues
        const problematicIframes = document.querySelectorAll('iframe');
        problematicIframes.forEach(iframe => {
          try {
            // Remove event listeners and src to prevent further loading issues
            iframe.src = 'about:blank';
            
            // We do not remove the iframe as that could cause the 'removeChild' error
            // Just clean it up in place
          } catch (e) {
            console.debug("Error cleaning up iframe:", e);
          }
        });
      } catch (e) {
        console.error("Error during DOM cleanup:", e);
      }
    };
    
    // Execute cleanup
    cleanupDom();
    
    return () => {
      // Additional cleanup when error boundary unmounts
      cleanupDom();
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
