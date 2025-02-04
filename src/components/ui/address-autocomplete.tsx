import { Input } from "@/components/ui/input";
import { useEffect, useRef } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from "@/config/constants";

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  "aria-describedby"?: string;
}

const AddressAutocomplete = ({
  value,
  onChange,
  className,
  placeholder = "Enter your address",
  required = false,
  disabled = false,
  id,
  name,
  "aria-describedby": ariaDescribedby,
}: AddressAutocompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ["places"]
  });

  useEffect(() => {
    if (!isLoaded || !inputRef.current) return;

    try {
      const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
        componentRestrictions: { country: "us" },
        fields: ["formatted_address"]
      });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place.formatted_address) {
          onChange(place.formatted_address);
          console.log('Selected address:', place.formatted_address);
        }
      });

      return () => {
        google.maps.event.clearInstanceListeners(autocomplete);
      };
    } catch (error) {
      console.error('Error initializing Places Autocomplete:', error);
    }
  }, [isLoaded, onChange]);

  if (loadError) {
    console.error('Google Maps Places API loading error:', loadError);
    return (
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={className}
        placeholder="Enter address manually (Maps API unavailable)"
        required={required}
        disabled={disabled}
        id={id}
        name={name}
        aria-describedby={ariaDescribedby}
      />
    );
  }

  return (
    <Input
      ref={inputRef}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
      placeholder={isLoaded ? placeholder : "Loading..."}
      required={required}
      disabled={disabled || !isLoaded}
      id={id}
      name={name}
      aria-describedby={ariaDescribedby}
    />
  );
};

export default AddressAutocomplete;