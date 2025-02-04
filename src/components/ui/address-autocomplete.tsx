import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
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

declare global {
  interface Window {
    google: {
      maps: {
        places: {
          Autocomplete: new (
            input: HTMLInputElement,
            options?: google.maps.places.AutocompleteOptions
          ) => google.maps.places.Autocomplete;
        };
      };
    };
  }
}

const AddressAutocomplete = ({
  value,
  onChange,
  className,
  placeholder = "Enter your address",
  required,
  disabled,
  id,
  name,
  "aria-describedby": ariaDescribedby,
}: AddressAutocompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBWC79s2TOCQPRUKSlG8J-yYfQqeKsPuVk",
    libraries: ["places"],
  });

  useEffect(() => {
    if (!isLoaded || !inputRef.current || isInitialized || !window.google?.maps?.places) {
      return;
    }

    try {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
        componentRestrictions: { country: "us" },
        fields: ["formatted_address"],
      });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place.formatted_address) {
          onChange(place.formatted_address);
          setError(null);
        }
      });

      setIsInitialized(true);
      
      return () => {
        if (window.google?.maps?.event) {
          window.google.maps.event.clearInstanceListeners(autocomplete);
        }
      };
    } catch (error) {
      console.error("Error initializing Google Maps Autocomplete:", error);
      setError("Failed to initialize address autocomplete");
    }
  }, [isLoaded, onChange, isInitialized]);

  if (loadError || error) {
    console.error("Error loading Google Maps API:", loadError || error);
    return (
      <Input
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
  }

  return (
    <Input
      ref={inputRef}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
      placeholder={isLoaded ? placeholder : "Loading address autocomplete..."}
      required={required}
      disabled={disabled || !isLoaded}
      id={id}
      name={name}
      aria-describedby={ariaDescribedby}
    />
  );
};

export default AddressAutocomplete;