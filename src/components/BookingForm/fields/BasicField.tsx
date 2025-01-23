import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface BasicFieldProps {
  id: string;
  label: string;
  type?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const BasicField = ({
  id,
  label,
  type = "text",
  error,
  disabled,
  required,
  className,
}: BasicFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        type={type}
        aria-describedby={`${id}-error`}
        className={`h-10 text-base ${error ? 'border-red-500' : ''} ${className}`}
        disabled={disabled}
        required={required}
      />
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default BasicField;