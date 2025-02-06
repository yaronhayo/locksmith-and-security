import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import AddressAutocomplete from "@/components/ui/address-autocomplete";

interface AddressFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  isSubmitting?: boolean;
}

const AddressField = ({ value, onChange, error, isSubmitting }: AddressFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="address">Service Address</Label>
      <AddressAutocomplete
        id="address"
        name="address"
        value={value}
        onChange={onChange}
        aria-describedby="address-error"
        className={`h-10 text-base ${error ? 'border-red-500' : ''}`}
        disabled={isSubmitting}
        placeholder="Enter your service address"
        required
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

export default AddressField;