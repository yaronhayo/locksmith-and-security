import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const getErrorMessage = (error: Error) => {
  if (error.message.includes("network")) {
    return "Network error: Please check your internet connection";
  }
  if (error.message.includes("timeout")) {
    return "Request timeout: The server took too long to respond";
  }
  if (error.message.includes("404")) {
    return "Resource not found: The requested data is unavailable";
  }
  if (error.message.includes("Route")) {
    return "Navigation error: The requested page could not be loaded";
  }
  return error.message || "An unexpected error occurred. Please try again.";
};

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  const { toast } = useToast();

  const handleReset = () => {
    console.error('Application error:', {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    });
    
    toast({
      title: "Attempting to recover",
      description: "We're trying to restore the application state.",
      variant: "default",
    });
    
    resetErrorBoundary();
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-gray-50"
      role="alert"
      aria-live="assertive"
    >
      <div className="text-center max-w-md bg-white p-8 rounded-lg shadow-lg">
        <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" aria-hidden="true" />
        <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
        <p className="text-gray-600 mb-6">
          {getErrorMessage(error)}
        </p>
        <div className="space-y-4">
          <Button 
            onClick={handleReset}
            className="w-full"
            aria-label="Try again"
          >
            Try again
          </Button>
          <p className="text-sm text-gray-500">
            If the problem persists, please contact support or refresh the page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;