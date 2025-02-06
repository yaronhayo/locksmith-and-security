import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface MapErrorProps {
  error: string;
  onRetry: () => void;
  isRetrying: boolean;
  retryCount?: number;
}

const MapError = ({ error, onRetry, isRetrying, retryCount = 0 }: MapErrorProps) => {
  return (
    <Alert variant="destructive" className="mb-4">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="font-medium">{error}</p>
          {retryCount > 0 && (
            <p className="text-sm mt-1">
              Attempt {retryCount}/3
            </p>
          )}
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onRetry}
          disabled={isRetrying}
        >
          {isRetrying ? "Retrying..." : "Retry"}
        </Button>
      </AlertDescription>
    </Alert>
  );
};

export default MapError;