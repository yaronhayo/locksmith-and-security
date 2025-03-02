
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { AddressAutocomplete } from "@/components/ui/address-autocomplete";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import GoogleMapsProvider from "@/components/providers/GoogleMapsProvider";

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

  const handleBlur = () => {
    setIsDirty(true);
  };

  // Create a handler that extracts the value from either a string or an event
  const handleAddressChange = (addressOrEvent: string | React.ChangeEvent<HTMLInputElement>) => {
    if (typeof addressOrEvent === 'string') {
      onChange(addressOrEvent);
    } else {
      // It's an event
      onChange(addressOrEvent.target.value);
    }
    if (!isDirty) setIsDirty(true);
  };

  // Dedicated handler for address selection from autocomplete
  const handleAddressSelect = (selectedAddress: string) => {
    console.log("Address selected in AddressField:", selectedAddress);
    onChange(selectedAddress);
    if (!isDirty) setIsDirty(true);
  };

  // Show external error (from form submission) or internal error (from validation)
  const displayError = error || (isDirty ? localError : null);

  return (
    <div>
      <Label htmlFor="address" className="block text-sm font-medium mb-2">
        Address
      </Label>
      <div className="relative">
        <GoogleMapsProvider>
          <AddressAutocomplete
            value={value}
            onChange={handleAddressChange}
            onAddressSelect={handleAddressSelect}
            id="address"
            disabled={isSubmitting}
            placeholder="Enter your address"
            aria-invalid={!!displayError}
            aria-describedby={displayError ? "address-error" : undefined}
            onBlur={handleBlur}
            error={!!displayError}
          />
        </GoogleMapsProvider>
      </div>
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
