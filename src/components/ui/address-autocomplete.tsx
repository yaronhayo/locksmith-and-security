
import { useEffect, useRef, useState } from "react";
import { Input } from "./input";
import { useMapConfig } from "../map/useMapConfig";
import { LoadScript } from "@react-google-maps/api";
import { InputHTMLAttributes } from "react";
import { Skeleton } from "./skeleton";

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
  const { apiKey, isLoading } = useMapConfig();
  const [isLoadingScript, setIsLoadingScript] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!apiKey || !inputRef.current || isLoading || isLoadingScript) return;

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
  }, [apiKey, onChange, isLoading, isLoadingScript]);

  // Handle manual input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  if (isLoading) {
    return <Skeleton className="h-10 w-full" />;
  }

  if (!apiKey) {
    return (
      <Input
        type="text"
        value={value}
        onChange={handleInputChange}
        className={className}
        disabled={disabled}
        {...props}
      />
    );
  }

  return (
    <LoadScript 
      googleMapsApiKey={apiKey} 
      libraries={["places"]}
      onLoad={() => {
        setIsLoadingScript(false);
      }}
      onError={(err) => {
        console.error('Error loading Google Maps Places script:', err);
        setError('Failed to load Google Maps Places');
        setIsLoadingScript(false);
      }}
    >
      <div className="relative">
        <Input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          className={`${className} ${error ? 'border-red-500' : ''}`}
          disabled={disabled || isLoadingScript}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500 mt-1">{error}</p>
        )}
      </div>
    </LoadScript>
  );
};

export default AddressAutocomplete;
