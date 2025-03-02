
import { AlertCircle, RefreshCw } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
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
    </div>
  );
};

export default MapError;
