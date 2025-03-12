
import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export type ScriptType = 'maps' | 'recaptcha';

interface ScriptErrorProps {
  type: ScriptType;
  error: string;
}

export const ScriptError = ({ type, error }: ScriptErrorProps) => {
  return (
    <Alert variant="destructive" className="mb-4">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>
        {`Failed to load ${type === 'maps' ? 'Google Maps' : 'reCAPTCHA'}: ${error}`}
      </AlertDescription>
    </Alert>
  );
};
