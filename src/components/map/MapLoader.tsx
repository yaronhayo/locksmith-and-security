
import { Loader2 } from "lucide-react";

const MapLoader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-100/80">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
};

export default MapLoader;
