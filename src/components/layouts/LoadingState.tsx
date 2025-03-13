
import { Loader2 } from "lucide-react";

export function LoadingState() {
  return (
    <div className="min-h-[200px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-gray-500">Loading...</p>
      </div>
    </div>
  );
}

export function SimpleLoadingState() {
  return (
    <div className="flex items-center justify-center p-4">
      <Loader2 className="h-6 w-6 animate-spin text-primary" />
    </div>
  );
}

export function InlineLoadingState() {
  return (
    <span className="inline-flex items-center">
      <Loader2 className="h-4 w-4 animate-spin mr-2 text-primary" />
      <span className="text-sm">Loading...</span>
    </span>
  );
}
