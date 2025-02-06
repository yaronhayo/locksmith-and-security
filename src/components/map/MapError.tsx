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
    <div className="w-full h-[400px] flex items-center justify-center p-4">
      <Alert variant="destructive" className="w-full max-w-md">
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
    </div>
  );
};

export default MapError;