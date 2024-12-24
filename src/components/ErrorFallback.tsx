import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useEffect } from "react";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const getErrorMessage = (error: Error): string => {
  if (error.message.includes("NetworkError")) {
    return "Unable to connect to the server. Please check your internet connection.";
  }
  if (error.message.includes("TypeError")) {
    return "Something went wrong with the application. Please try again.";
  }
  if (error.message.includes("ChunkLoadError")) {
    return "Failed to load some resources. Please refresh the page.";
  }
  return error.message || "An unexpected error occurred. Please try again.";
};

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  useEffect(() => {
    // Log error to your preferred error tracking service
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-md w-full">
        <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Oops! Something went wrong</h2>
        <p className="text-gray-600 mb-6">
          {getErrorMessage(error)}
        </p>
        <div className="space-y-4">
          <Button 
            onClick={resetErrorBoundary}
            className="w-full"
          >
            Try again
          </Button>
          <Button 
            onClick={() => window.location.reload()}
            variant="outline"
            className="w-full"
          >
            Refresh page
          </Button>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          If the problem persists, please contact support.
        </p>
      </div>
    </div>
  );
};

export default ErrorFallback;