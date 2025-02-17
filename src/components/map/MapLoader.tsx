
import { Loader2 } from "lucide-react";

const MapLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[400px] bg-gray-50 rounded-lg border border-gray-200">
      <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
      <p className="text-sm text-gray-600 mb-2">Loading map...</p>
      <p className="text-xs text-gray-500">This may take a few moments</p>
    </div>
  );
};

export default MapLoader;
