
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import AddressAutocomplete from "@/components/ui/address-autocomplete";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface AddressFieldProps {
  value: string;
  onChange: (value: string) => void;
  isSubmitting: boolean;
  error?: string;
}

const AddressField = ({ value, onChange, isSubmitting, error }: AddressFieldProps) => {
  const [localError, setLocalError] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);
  
  useEffect(() => {
    if (isDirty && !value.trim()) {
      setLocalError("Please enter your address");
    } else {
      setLocalError(null);
    }
  }, [value, isDirty]);

  const handleChange = (newValue: string) => {
    onChange(newValue);
    if (!isDirty) setIsDirty(true);
  };

  const handleBlur = () => {
    setIsDirty(true);
  };

  // Show external error (from form submission) or internal error (from validation)
  const displayError = error || (isDirty ? localError : null);

  return (
    <div>
      <Label htmlFor="address" className="block text-sm font-medium mb-2">
        Address
      </Label>
      <AddressAutocomplete
        value={value}
        onChange={handleChange}
        id="address"
        disabled={isSubmitting}
        placeholder="Enter your address"
        aria-invalid={!!displayError}
        aria-describedby={displayError ? "address-error" : undefined}
        onBlur={handleBlur}
      />
      {displayError && (
        <Alert variant="destructive" className="mt-1 py-2">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription id="address-error">{displayError}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default AddressField;
