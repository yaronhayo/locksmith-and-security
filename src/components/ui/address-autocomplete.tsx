
import { useEffect, useRef, useState } from "react";
import { Input } from "./input";
import { useMapConfig } from "@/hooks/useMap";
import { InputHTMLAttributes } from "react";
import Script from 'next/script'

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
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize autocomplete once script is loaded
  const initializeAutocomplete = () => {
    if (!inputRef.current || !window.google?.maps?.places || isInitialized) return;

    try {
      // Create autocomplete instance with specific options
      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          componentRestrictions: { country: "us" },
          fields: ["address_components", "formatted_address", "geometry", "place_id"],
          types: ["address"]
        }
      );

      // Add place_changed listener
      const placeChangedListener = autocompleteRef.current.addListener(
        "place_changed",
        () => {
          const place = autocompleteRef.current?.getPlace();
          if (place?.formatted_address) {
            onChange(place.formatted_address);
          }
        }
      );

      setIsInitialized(true);

      // Return cleanup function
      return () => {
        if (placeChangedListener) {
          google.maps.event.removeListener(placeChangedListener);
        }
        if (autocompleteRef.current) {
          google.maps.event.clearInstanceListeners(autocompleteRef.current);
        }
      };
    } catch (err) {
      console.error('Error initializing autocomplete:', err);
      setError(err instanceof Error ? err.message : 'Failed to initialize address autocomplete');
    }
  };

  // Load Google Maps script
  useEffect(() => {
    if (apiKey && !isScriptLoaded) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        setIsScriptLoaded(true);
        initializeAutocomplete();
      };

      script.onerror = () => {
        setError('Failed to load Google Maps script');
      };

      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [apiKey, isScriptLoaded]);

  // Prevent form submission on Enter key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && autocompleteRef.current) {
        e.preventDefault();
      }
    };

    inputRef.current?.addEventListener('keydown', handleKeyDown);
    return () => {
      inputRef.current?.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
