
import { useEffect, useRef, useState } from "react";
import { Input } from "./input";
import { useMapConfig } from "@/hooks/useMap";
import { InputHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LoadScript } from "@react-google-maps/api";

type AddressAutocompleteProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  value: string;
  onChange: (value: string) => void;
};

const libraries: ["places"] = ["places"];

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
  const { apiKey, loadError: apiKeyError } = useMapConfig();
  const [error, setError] = useState<string | null>(null);
  const [isPlacesReady, setIsPlacesReady] = useState(false);

  useEffect(() => {
    if (!inputRef.current || !isPlacesReady) return;

    try {
      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          componentRestrictions: { country: "us" },
          fields: ["address_components", "formatted_address", "geometry", "place_id"],
          types: ["address"]
        }
      );

      const placeChangedListener = autocompleteRef.current.addListener(
        "place_changed",
        () => {
          const place = autocompleteRef.current?.getPlace();
          if (place?.formatted_address) {
            onChange(place.formatted_address);
          }
        }
      );

      return () => {
        if (placeChangedListener) {
          placeChangedListener.remove();
        }
        if (autocompleteRef.current) {
          google.maps.event.clearInstanceListeners(autocompleteRef.current);
        }
      };
    } catch (err) {
      console.error('Error initializing autocomplete:', err);
      setError(err instanceof Error ? err.message : 'Failed to initialize address autocomplete');
    }
  }, [isPlacesReady, onChange]);

  // Prevent form submission on Enter key
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
    setError(null);
  };

  const displayError = error || apiKeyError;
  const isLoading = !apiKey;

  if (!apiKey) {
    return (
      <div className="relative w-full">
        <Input
          type="text"
          value={value}
          onChange={handleInputChange}
          className={className}
          disabled={true}
          placeholder="Loading address lookup..."
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
        </div>
      </div>
    );
  }

  return (
    <LoadScript
      googleMapsApiKey={apiKey}
      libraries={libraries}
      onLoad={() => setIsPlacesReady(true)}
    >
      <div className="relative w-full space-y-2">
        <div className="relative">
          <Input
            ref={inputRef}
            type="text"
            value={value}
            onChange={handleInputChange}
            className={`${className} w-full ${displayError ? 'border-red-500' : ''}`}
            disabled={disabled || isLoading}
            placeholder={placeholder}
            aria-invalid={displayError ? "true" : "false"}
            aria-describedby={displayError ? "address-error" : undefined}
            {...props}
          />
          {isLoading && (
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
    </LoadScript>
  );
};

export default AddressAutocomplete;
