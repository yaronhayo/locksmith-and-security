import { Input } from "@/components/ui/input";
import { useEffect, useRef } from "react";
import { useLoadScript } from "@react-google-maps/api";

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
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBWC79s2TOCQPRUKSlG8J-yYfQqeKsPuVk",
    libraries: ["places"],
  });

  useEffect(() => {
    if (!isLoaded || !inputRef.current) return;

    const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: "us" },
      fields: ["formatted_address"],
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place.formatted_address) {
        onChange(place.formatted_address);
      }
    });

    return () => {
      google.maps.event.clearInstanceListeners(autocomplete);
    };
  }, [isLoaded, onChange]);

  return (
    <Input
      ref={inputRef}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      id={id}
      name={name}
      aria-describedby={ariaDescribedby}
    />
  );
};

export default AddressAutocomplete;