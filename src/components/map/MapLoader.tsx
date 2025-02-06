import { Loader2 } from "lucide-react";

const MapLoader = () => {
  return (
    <div className="w-full h-[400px] flex items-center justify-center bg-gray-100/80 rounded-lg">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-gray-600">Loading map...</p>
      </div>
    </div>
  );
};

export default MapLoader;