
import { ErrorBoundary } from "react-error-boundary";
import { Button } from "@/components/ui/button";
import { Home, RefreshCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error.message}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={resetErrorBoundary} className="flex items-center gap-2">
              <RefreshCcw className="w-4 h-4" />
              Try again
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Go to homepage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RouteErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset the state of your app here
        window.location.reload();
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
