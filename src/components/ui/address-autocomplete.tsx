
import { useEffect, useRef, useState } from "react";
import { Input } from "./input";
import { useMapConfig } from "@/hooks/useMap";
import { InputHTMLAttributes } from "react";

type AddressAutocompleteProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  value: string;
  onChange: (value: string) => void;
};

const AddressAutocomplete = ({
  value,
  onChange,
  className,
  disabled,
  placeholder,
  ...props
}: AddressAutocompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const { apiKey } = useMapConfig();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!apiKey || !inputRef.current || !window.google?.maps?.places) return;

    try {
      // Configure the autocomplete options
      const options: google.maps.places.AutocompleteOptions = {
        componentRestrictions: { country: "us" },
        fields: ["address_components", "formatted_address", "geometry", "place_id"],
        types: ["address"]
      };

      // Initialize the autocomplete instance
      autocompleteRef.current = new google.maps.places.Autocomplete(
        inputRef.current,
        options
      );

      // Add place_changed event listener
      const listener = autocompleteRef.current.addListener(
        "place_changed",
        () => {
          const place = autocompleteRef.current?.getPlace();
          
          if (place?.formatted_address) {
            onChange(place.formatted_address);
          }
        }
      );

      // Prevent form submission on enter
      inputRef.current.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      });

      // Cleanup function
      return () => {
        if (listener) {
          google.maps.event.removeListener(listener);
        }
        if (autocompleteRef.current) {
          google.maps.event.clearInstanceListeners(autocompleteRef.current);
        }
      };
    } catch (err) {
      console.error('Error initializing autocomplete:', err);
      setError(err instanceof Error ? err.message : 'Failed to initialize address autocomplete');
    }
  }, [apiKey, onChange]);

  // Handle manual input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setError(null); // Clear any previous errors when user types
  };

  return (
    <div className="relative w-full">
      <Input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        className={`${className} w-full ${error ? 'border-red-500' : ''}`}
        disabled={disabled}
        placeholder={placeholder}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? "address-error" : undefined}
        {...props}
      />
      {error && (
        <p id="address-error" className="text-sm text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default AddressAutocomplete;
