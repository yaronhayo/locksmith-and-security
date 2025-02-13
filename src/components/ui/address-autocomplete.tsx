
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
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const initializeAutocomplete = () => {
      if (!inputRef.current || !window.google?.maps?.places || isInitialized) return;

      try {
        const options: google.maps.places.AutocompleteOptions = {
          componentRestrictions: { country: "us" },
          fields: ["address_components", "formatted_address", "geometry", "place_id"],
          types: ["address"]
        };

        autocompleteRef.current = new window.google.maps.places.Autocomplete(
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

        const enterListener = (e: KeyboardEvent) => {
          if (e.key === 'Enter') {
            e.preventDefault();
          }
        };

        inputRef.current.addEventListener('keydown', enterListener);
        setIsInitialized(true);

        cleanup = () => {
          if (listener) {
            google.maps.event.removeListener(listener);
          }
          if (autocompleteRef.current) {
            google.maps.event.clearInstanceListeners(autocompleteRef.current);
          }
          inputRef.current?.removeEventListener('keydown', enterListener);
        };
      } catch (err) {
        console.error('Error initializing autocomplete:', err);
        setError(err instanceof Error ? err.message : 'Failed to initialize address autocomplete');
      }
    };

    if (apiKey && !isInitialized) {
      const interval = setInterval(() => {
        if (window.google?.maps?.places) {
          clearInterval(interval);
          initializeAutocomplete();
        }
      }, 100);

      const timeout = setTimeout(() => {
        clearInterval(interval);
        if (!window.google?.maps?.places) {
          setError('Google Maps failed to load. Please refresh the page.');
        }
      }, 10000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
        if (cleanup) cleanup();
      };
    }

    return cleanup;
  }, [apiKey, onChange, isInitialized]);

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
