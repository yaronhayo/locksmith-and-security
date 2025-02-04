import { Loader2 } from "lucide-react";

const MapLoadingState = () => (
  <div 
    className="w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gray-50 rounded-lg"
    role="status"
    aria-label="Loading map"
  >
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
  </div>
);

export default MapLoadingState;