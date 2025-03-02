
import { AlertCircle, RefreshCw } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface MapErrorProps {
  error: string;
  resetErrorBoundary?: () => void;
}

const MapError = ({ error, resetErrorBoundary }: MapErrorProps) => {
  console.error('Map Error:', error); // Add logging for debugging

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
            onClick={resetErrorBoundary}
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
          <li>The API key has proper permissions configured</li>
        </ul>
      </div>
    </div>
  );
};

export default MapError;
