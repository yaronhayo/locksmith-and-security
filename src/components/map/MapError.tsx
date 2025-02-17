
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface MapErrorProps {
  error: string;
}

const MapError = ({ error }: MapErrorProps) => {
  console.error('Map Error:', error); // Add logging for debugging

  return (
    <Alert variant="destructive" className="mb-4">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>
        {error}
      </AlertDescription>
    </Alert>
  );
};

export default MapError;
