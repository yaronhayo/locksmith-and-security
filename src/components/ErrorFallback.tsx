import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  const { toast } = useToast();

  const handleReset = () => {
    // Log the error for tracking
    console.error('Application error:', error);
    
    // Show toast notification
    toast({
      title: "Attempting to recover",
      description: "We're trying to restore the application state.",
      variant: "default",
    });
    
    resetErrorBoundary();
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      role="alert"
      aria-live="assertive"
    >
      <div className="text-center max-w-md">
        <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
        <p className="text-gray-600 mb-4">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <div className="space-y-4">
          <Button 
            onClick={handleReset}
            className="w-full"
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