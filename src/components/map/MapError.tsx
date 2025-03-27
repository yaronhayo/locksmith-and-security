
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface MapErrorProps {
  error: string;
}

const MapError = ({ error }: MapErrorProps) => {
  const isBillingError = error?.toLowerCase().includes('billing') || 
                          error?.toLowerCase().includes('payment');

  const googleConsoleUrl = "https://console.cloud.google.com/project/_/billing/enable";

  return (
    <Alert variant="destructive" className="mb-4">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription className="space-y-2">
        <p>{error}</p>
        {isBillingError && (
          <div className="mt-2 text-sm">
            <p className="font-medium">This appears to be a Google Maps billing issue.</p>
            <p className="mt-1">For this app to function properly, you need to:</p>
            <ol className="list-decimal ml-5 mt-1 space-y-1">
              <li>Enable billing for your Google Cloud Project</li>
              <li>Ensure the Maps JavaScript API and Places API are enabled</li>
            </ol>
            <Button 
              variant="link" 
              className="p-0 h-auto mt-1 text-blue-500 hover:text-blue-700" 
              onClick={() => window.open(googleConsoleUrl, '_blank')}
            >
              Open Google Cloud Console
            </Button>
          </div>
        )}
      </AlertDescription>
    </Alert>
  );
};

export default MapError;
