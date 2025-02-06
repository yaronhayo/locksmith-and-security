import { useEffect, useRef, useState } from "react";
import { Input } from "./input";
import { useMapConfig } from "../map/useMapConfig";
import { LoadScript } from "@react-google-maps/api";
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
  ...props
}: AddressAutocompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const { apiKey } = useMapConfig();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoaded || !inputRef.current) return;

    try {
      const options = {
        componentRestrictions: { country: "us" },
        fields: ["address_components", "formatted_address", "geometry"],
      };

      autocompleteRef.current = new google.maps.places.Autocomplete(
        inputRef.current,
        options
      );

      console.log('Autocomplete initialized successfully');

      const listener = autocompleteRef.current.addListener(
        "place_changed",
        () => {
          const place = autocompleteRef.current?.getPlace();
          if (place?.formatted_address) {
            console.log('Place selected:', place.formatted_address);
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
    } catch (err) {
      console.error('Error initializing autocomplete:', err);
      setError(err instanceof Error ? err.message : 'Failed to initialize address autocomplete');
    }
  }, [isLoaded, onChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  if (!apiKey) {
    console.error('No Google Maps API key available');
    return null;
  }

  if (error) {
    console.error('Autocomplete error:', error);
  }

  return (
    <LoadScript 
      googleMapsApiKey={apiKey} 
      libraries={["places"]}
      onLoad={() => {
        console.log('Google Maps Places script loaded successfully');
        setIsLoaded(true);
      }}
      onError={(err) => {
        console.error('Error loading Google Maps Places script:', err);
        setError('Failed to load Google Maps Places');
      }}
    >
      <Input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        className={`${className} ${error ? 'border-red-500' : ''}`}
        disabled={disabled}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </LoadScript>
  );
};

export default AddressAutocomplete;