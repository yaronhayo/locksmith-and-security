
import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface AlertErrorProps {
  id?: string;
  message: string;
}

const AlertError = ({ id, message }: AlertErrorProps) => {
  return (
    <Alert variant="destructive" className="py-2 px-3">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription className="text-xs" id={id}>{message}</AlertDescription>
    </Alert>
  );
};

export default AlertError;
