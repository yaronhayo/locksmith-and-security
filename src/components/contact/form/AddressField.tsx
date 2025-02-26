
import AddressAutocomplete from "@/components/ui/address-autocomplete";
import GoogleMapsProvider from "@/components/providers/GoogleMapsProvider";
import { Label } from "@/components/ui/label";

interface AddressFieldProps {
  value: string;
  onChange: (value: string) => void;
  isSubmitting: boolean;
}

const AddressField = ({ value, onChange, isSubmitting }: AddressFieldProps) => {
  const addressId = "contact-address";
  return (
    <div>
      <Label htmlFor={addressId} className="block text-sm font-medium mb-2">
        Service Address
      </Label>
      <GoogleMapsProvider>
        <AddressAutocomplete
          id={addressId}
          value={value}
          onChange={onChange}
          placeholder="123 Main St, North Bergen, NJ"
          disabled={isSubmitting}
          required
        />
      </GoogleMapsProvider>
    </div>
  );
};

export default AddressField;
