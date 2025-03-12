
import React from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { ScriptType } from "./ScriptError";

interface ScriptLoadingProps {
  type: ScriptType;
}

export const ScriptLoading = ({ type }: ScriptLoadingProps) => {
  return (
    <div className="flex items-center justify-center p-4">
      <LoadingSpinner size="sm" />
      <span className="ml-2 text-sm text-gray-500">
        {`Loading ${type === 'maps' ? 'Google Maps' : 'reCAPTCHA'}...`}
      </span>
    </div>
  );
};
