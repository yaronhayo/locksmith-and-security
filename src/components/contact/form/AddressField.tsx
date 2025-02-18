
import AddressAutocomplete from "@/components/ui/address-autocomplete";
import GoogleMapsProvider from "@/components/providers/GoogleMapsProvider";

interface AddressFieldProps {
  value: string;
  onChange: (value: string) => void;
  isSubmitting: boolean;
}

const AddressField = ({ value, onChange, isSubmitting }: AddressFieldProps) => {
  return (
    <div>
      <label htmlFor="address" className="block text-sm font-medium mb-2">
        Service Address
      </label>
      <GoogleMapsProvider>
        <AddressAutocomplete
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
