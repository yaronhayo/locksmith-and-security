
import { Loader2 } from "lucide-react";

const MapLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[400px] bg-gray-50 rounded-lg">
      <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
      <p className="text-sm text-gray-600">Loading map...</p>
    </div>
  );
};

export default MapLoader;
