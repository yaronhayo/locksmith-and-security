
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
  const { apiKey, loadError } = useMapConfig();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let listener: google.maps.MapsEventListener | null = null;

    const initializeAutocomplete = () => {
      if (!inputRef.current || !window.google?.maps?.places) return;

      try {
        const options: google.maps.places.AutocompleteOptions = {
          componentRestrictions: { country: "us" },
          fields: ["address_components", "formatted_address", "geometry", "place_id"],
          types: ["address"]
        };

        autocompleteRef.current = new google.maps.places.Autocomplete(
          inputRef.current,
          options
        );

        listener = autocompleteRef.current.addListener(
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
      } catch (err) {
        console.error('Error initializing autocomplete:', err);
        setError(err instanceof Error ? err.message : 'Failed to initialize address autocomplete');
      }
    };

    if (apiKey) {
      // Check periodically for Google Maps initialization
      const interval = setInterval(() => {
        if (window.google?.maps?.places) {
          clearInterval(interval);
          initializeAutocomplete();
        }
      }, 100);

      // Cleanup after 10 seconds if Google Maps hasn't loaded
      const timeout = setTimeout(() => {
        clearInterval(interval);
        if (!window.google?.maps?.places) {
          setError('Google Maps failed to load. Please refresh the page.');
        }
      }, 10000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
        if (listener) {
          google.maps.event.removeListener(listener);
        }
        if (autocompleteRef.current) {
          google.maps.event.clearInstanceListeners(autocompleteRef.current);
        }
      };
    }
  }, [apiKey, onChange]);

  useEffect(() => {
    if (loadError) {
      setError(loadError);
    }
  }, [loadError]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setError(null);
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
