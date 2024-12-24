import { Loader2 } from "lucide-react";

export const FormLoadingOverlay = () => (
  <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-50">
    <Loader2 className="w-8 h-8 animate-spin text-primary" />
  </div>
);

export const ButtonLoadingState = () => (
  <>
    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
    Submitting...
  </>
);