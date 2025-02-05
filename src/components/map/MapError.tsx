import { AlertCircle, Loader2 } from "lucide-react";

interface MapErrorProps {
  error: string;
  onRetry: () => void;
  isRetrying: boolean;
}

const MapError = ({ error, onRetry, isRetrying }: MapErrorProps) => {
  return (
    <div className="w-full h-[600px] flex items-center justify-center bg-gray-50 rounded-lg">
      <div className="text-center space-y-4">
        <AlertCircle className="h-12 w-12 text-red-500 mx-auto" />
        <p className="text-red-500 font-medium">{error}</p>
        <button 
          onClick={onRetry}
          disabled={isRetrying}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isRetrying ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Retrying...
            </span>
          ) : (
            'Try again'
          )}
        </button>
      </div>
    </div>
  );
};

export default MapError;