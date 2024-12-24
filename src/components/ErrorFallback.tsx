import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center space-y-4">
        <AlertTriangle className="w-16 h-16 text-red-500 mx-auto" />
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          We apologize for the inconvenience. Please try again or contact support if the problem persists.
        </p>
        <div className="space-x-4">
          <Button onClick={resetErrorBoundary}>Try again</Button>
          <Button variant="outline" asChild>
            <a href="/">Go to homepage</a>
          </Button>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <pre className="mt-4 p-4 bg-gray-100 rounded-lg text-left text-sm overflow-auto">
            {error.message}
          </pre>
        )}
      </div>
    </div>
  );
};

export default ErrorFallback;