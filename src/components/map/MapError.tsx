
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface MapErrorProps {
  error: string | Error;
}

const MapError = ({ error }: MapErrorProps) => {
  const errorMessage = error instanceof Error ? error.message : error;
  console.error('Map Error:', errorMessage); // Add logging for debugging

  return (
    <Alert variant="destructive" className="mb-4">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>
        {errorMessage}
      </AlertDescription>
    </Alert>
  );
};

export default MapError;
