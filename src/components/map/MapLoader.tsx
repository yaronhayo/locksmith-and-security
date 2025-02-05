import { Loader2 } from "lucide-react";

const MapLoader = () => {
  return (
    <div className="w-full h-[600px] flex items-center justify-center bg-gray-50 rounded-lg">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
};

export default MapLoader;