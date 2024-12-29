import { Loader2 } from "lucide-react";

export const LoadingSpinner = () => (
  <div className="flex justify-center items-center p-4">
    <Loader2 className="w-6 h-6 animate-spin text-primary" />
  </div>
);

export const LoadingOverlay = () => (
  <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
    <LoadingSpinner />
  </div>
);