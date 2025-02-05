import { useEffect, useRef, useState } from "react";
import { Input } from "./input";
import { useMapConfig } from "../map/useMapConfig";
import { LoadScript } from "@react-google-maps/api";

interface AddressAutocompleteProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (value: string) => void;
}

const AddressAutocomplete = ({
  value,
  onChange,
  className,
  disabled,
  ...props
}: AddressAutocompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const { apiKey } = useMapConfig();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded || !inputRef.current) return;

    const options = {
      componentRestrictions: { country: "us" },
      fields: ["address_components", "formatted_address", "geometry"],
    };

    autocompleteRef.current = new google.maps.places.Autocomplete(
      inputRef.current,
      options
    );

    const listener = autocompleteRef.current.addListener(
      "place_changed",
      () => {
        const place = autocompleteRef.current?.getPlace();
        if (place?.formatted_address) {
          onChange(place.formatted_address);
        }
      }
    );

    return () => {
      google.maps.event.removeListener(listener);
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, [isLoaded, onChange]);

  if (!apiKey) return null;

  return (
    <LoadScript 
      googleMapsApiKey={apiKey} 
      libraries={["places"]}
      onLoad={() => setIsLoaded(true)}
    >
      <Input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={className}
        disabled={disabled}
        {...props}
      />
    </LoadScript>
  );
};

export default AddressAutocomplete;