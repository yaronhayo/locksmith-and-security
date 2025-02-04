import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MapErrorStateProps {
  error: string;
  onRetry: () => void;
}

const MapErrorState = ({ error, onRetry }: MapErrorStateProps) => (
  <div 
    className="w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gray-50 rounded-lg"
    role="alert"
    aria-label="Map error"
  >
    <div className="text-center space-y-4">
      <AlertTriangle className="h-12 w-12 text-red-500 mx-auto" />
      <p className="text-red-500">Error loading map: {error}</p>
      <Button onClick={onRetry}>Retry</Button>
    </div>
  </div>
);

export default MapErrorState;