
import { useEffect, useRef, useState } from "react";
import { Input } from "./input";
import { useMapConfig } from "@/hooks/useMap";
import { InputHTMLAttributes } from "react";
import { Loader2, RefreshCw } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

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
  const { data: apiKey, error: apiKeyError, isLoading, refetch } = useMapConfig();
  const [error, setError] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [initAttempts, setInitAttempts] = useState(0);

  // Check if Google Maps API is loaded
  const isGoogleMapsLoaded = () => {
    return typeof window !== 'undefined' && 
           typeof window.google !== 'undefined' && 
           typeof window.google.maps !== 'undefined' &&
           typeof window.google.maps.places !== 'undefined';
  };

  const initializeAutocomplete = () => {
    // Clear any previous errors
    setError(null);
    
    // Don't proceed if dependencies aren't ready
    if (!inputRef.current || !isGoogleMapsLoaded() || !apiKey) {
      console.log("Not initializing autocomplete - dependencies not ready", {
        inputRef: !!inputRef.current,
        googleMapsPlaces: isGoogleMapsLoaded(),
        apiKey: !!apiKey
      });
      return false;
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

      autocompleteRef.current.addListener(
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
      console.log("Address search initialized");
      return true;
    } catch (err) {
      console.error('Error initializing address autocomplete:', err);
      const errMsg = err instanceof Error ? err.message : 'Failed to initialize address autocomplete';
      setError(errMsg);
      console.error(`Address search error: ${errMsg}`);
      setIsInitialized(false);
      return false;
    }
  };

  // Initialize when API key and Google Maps are available
  useEffect(() => {
    if (apiKey && !isInitialized) {
      // Short delay to ensure Google Maps is fully loaded
      const timer = setTimeout(() => {
        if (isGoogleMapsLoaded()) {
          initializeAutocomplete();
        } else {
          console.log("Google Maps Places API not available yet, waiting...");
          setError("Google Maps Places API not loaded yet. Please try again in a moment.");
        }
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [apiKey, isInitialized, initAttempts]);

  // Add check for Google Maps loading after component mounts
  useEffect(() => {
    if (!isInitialized && apiKey) {
      const checkGoogleMapsInterval = setInterval(() => {
        if (isGoogleMapsLoaded()) {
          console.log("Google Maps Places API detected, initializing autocomplete");
          initializeAutocomplete();
          clearInterval(checkGoogleMapsInterval);
        }
      }, 1000);
      
      // Clear interval after 10 seconds if Google Maps isn't loaded
      setTimeout(() => {
        if (!isInitialized) {
          clearInterval(checkGoogleMapsInterval);
          if (!isGoogleMapsLoaded()) {
            setError("Google Maps Places API failed to load. Please refresh the page.");
          }
        }
      }, 10000);
      
      return () => clearInterval(checkGoogleMapsInterval);
    }
  }, [apiKey, isInitialized]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (window.google?.maps?.event && autocompleteRef.current) {
        console.log("Clearing address autocomplete instance listeners");
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
        autocompleteRef.current = null;
      }
    };
  }, []);

  // Prevent form submission on Enter when using autocomplete
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

  const retryInitialization = () => {
    setError(null);
    refetch();
    setInitAttempts(prev => prev + 1);
    console.log("Retrying address search initialization...");
  };

  const displayError = error || (apiKeyError?.message ?? null);
  const isAddressAutocompleteLoading = isLoading || (!isGoogleMapsLoaded() && !displayError);

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
        <div className="space-y-2">
          <Alert variant="destructive">
            <AlertDescription id="address-error">
              {displayError}
            </AlertDescription>
          </Alert>
          <Button 
            onClick={retryInitialization} 
            variant="outline" 
            size="sm"
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" /> Retry
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddressAutocomplete;
