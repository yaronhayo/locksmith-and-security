
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
    let enterListener: ((e: KeyboardEvent) => void) | undefined;

    const initializeAutocomplete = () => {
      if (!inputRef.current || !window.google?.maps?.places || isInitialized) return;

      try {
        const options: google.maps.places.AutocompleteOptions = {
          componentRestrictions: { country: "us" },
          fields: ["address_components", "formatted_address", "geometry", "place_id"],
          types: ["address"]
        };

        // Initialize autocomplete
        autocompleteRef.current = new window.google.maps.places.Autocomplete(
          inputRef.current,
          options
        );

        // Add place changed listener
        const placeChangedListener = autocompleteRef.current.addListener(
          "place_changed",
          () => {
            const place = autocompleteRef.current?.getPlace();
            if (place?.formatted_address) {
              onChange(place.formatted_address);
            }
          }
        );

        // Prevent form submission on enter
        enterListener = (e: KeyboardEvent) => {
          if (e.key === 'Enter') {
            e.preventDefault();
          }
        };
        inputRef.current.addEventListener('keydown', enterListener);

        setIsInitialized(true);

        // Setup cleanup function
        cleanup = () => {
          if (placeChangedListener) {
            google.maps.event.removeListener(placeChangedListener);
          }
          if (autocompleteRef.current) {
            google.maps.event.clearInstanceListeners(autocompleteRef.current);
          }
          if (enterListener && inputRef.current) {
            inputRef.current.removeEventListener('keydown', enterListener);
          }
        };
      } catch (err) {
        console.error('Error initializing autocomplete:', err);
        setError(err instanceof Error ? err.message : 'Failed to initialize address autocomplete');
      }
    };

    // Only try to initialize if we have an API key and haven't initialized yet
    if (apiKey && !isInitialized) {
      let initInterval: NodeJS.Timeout;
      let timeoutId: NodeJS.Timeout;

      // Check for Google Maps initialization
      initInterval = setInterval(() => {
        if (window.google?.maps?.places) {
          clearInterval(initInterval);
          initializeAutocomplete();
        }
      }, 100);

      // Set timeout to prevent infinite checking
      timeoutId = setTimeout(() => {
        clearInterval(initInterval);
        if (!window.google?.maps?.places) {
          setError('Google Maps failed to load. Please refresh the page.');
        }
      }, 10000);

      // Return cleanup function
      return () => {
        clearInterval(initInterval);
        clearTimeout(timeoutId);
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
