import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface MapErrorProps {
  error: string;
  onRetry: () => void;
  isRetrying: boolean;
}

const MapError = ({ error, onRetry, isRetrying }: MapErrorProps) => {
  return (
    <Alert variant="destructive" className="mb-4">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription className="flex items-center gap-4">
        {error}
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