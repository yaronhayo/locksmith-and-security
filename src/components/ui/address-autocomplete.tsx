
import { useEffect, useRef, useState } from "react";
import { Input } from "./input";
import { useMapConfig } from "@/hooks/useMap";
import { InputHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

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
  const { data: apiKey, error: apiKeyError, isLoading } = useMapConfig();
  const [error, setError] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Only initialize if Google Maps API is loaded
    if (!inputRef.current || !window.google?.maps?.places || !apiKey) {
      console.log("Not initializing autocomplete - dependencies not ready", {
        inputRef: !!inputRef.current,
        googleMapsPlaces: !!window.google?.maps?.places,
        apiKey: !!apiKey
      });
      return;
    }

    try {
      console.log("Initializing address autocomplete");
      
      // Clear existing listeners before creating new autocomplete instance
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
        autocompleteRef.current = null;
      }

      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          componentRestrictions: { country: "us" },
          fields: ["address_components", "formatted_address", "geometry", "place_id"],
          types: ["address"]
        }
      );

      const listener = autocompleteRef.current.addListener(
        "place_changed",
        () => {
          const place = autocompleteRef.current?.getPlace();
          if (place?.formatted_address) {
            onChange(place.formatted_address);
            console.log("Selected address:", place.formatted_address);
          }
        }
      );

      setIsInitialized(true);
      setError(null);
      
      return () => {
        // Only attempt cleanup if Google Maps is still available
        if (window.google?.maps?.event && listener) {
          console.log("Removing place_changed listener");
          listener.remove();
        }
        if (window.google?.maps?.event && autocompleteRef.current) {
          console.log("Clearing instance listeners");
          google.maps.event.clearInstanceListeners(autocompleteRef.current);
          autocompleteRef.current = null;
        }
      };
    } catch (err) {
      console.error('Error initializing address autocomplete:', err);
      setError(err instanceof Error ? err.message : 'Failed to initialize address autocomplete');
      setIsInitialized(false);
    }
  }, [onChange, apiKey]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && autocompleteRef.current) {
        e.preventDefault();
      }
    };

    const input = inputRef.current;
    if (input) {
      input.addEventListener('keydown', handleKeyDown);
      return () => {
        input.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    if (error) setError(null);
  };

  const displayError = error || (apiKeyError?.message ?? null);
  const isAddressAutocompleteLoading = isLoading || (!window.google?.maps?.places && !displayError);

  return (
    <div className="relative w-full space-y-2">
      <div className="relative">
        <Input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          className={`${className} w-full ${displayError ? 'border-red-500' : ''}`}
          disabled={disabled || isAddressAutocompleteLoading}
          placeholder={isAddressAutocompleteLoading ? "Loading address search..." : placeholder}
          aria-invalid={displayError ? "true" : "false"}
          aria-describedby={displayError ? "address-error" : undefined}
          {...props}
        />
        {isAddressAutocompleteLoading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
          </div>
        )}
      </div>
      
      {displayError && (
        <Alert variant="destructive">
          <AlertDescription id="address-error">
            {displayError}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default AddressAutocomplete;
