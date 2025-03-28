
import { useEffect, useRef, useState } from "react";
import { Input } from "./input";
import { InputHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { useScripts, ScriptError, ScriptLoading } from "@/components/providers/ScriptsProvider";
import { MapLoader } from "@/utils/mapLoader";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const autocompleteRef = useRef<HTMLElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [initializationAttempted, setInitializationAttempted] = useState(false);
  const { googleMapsLoaded, isLoadingMaps, mapsError } = useScripts();
  const [showFallbackInput, setShowFallbackInput] = useState(false);

  // Initialize autocomplete
  useEffect(() => {
    // Only try to initialize if:
    // 1. We have the container element ref
    // 2. Google Maps API is available
    // 3. We haven't already attempted initialization
    if (!containerRef.current || !googleMapsLoaded || initializationAttempted) return;

    try {
      console.log('Initializing address autocomplete with PlaceAutocompleteElement');
      setInitializationAttempted(true);

      // Clear existing element before creating new one
      if (autocompleteRef.current) {
        containerRef.current.removeChild(autocompleteRef.current);
        autocompleteRef.current = null;
      }

      // Wait for the MapLoader to be ready
      MapLoader.onLoad(() => {
        try {
          if (!containerRef.current) return;
          
          // Create the new recommended PlaceAutocompleteElement
          if (!window.google?.maps?.places?.Place) {
            console.error('Google Maps Place API not available');
            setError('Google Maps Places API not loaded correctly');
            setShowFallbackInput(true);
            return;
          }
          
          // Create and configure the autocomplete element
          const autocomplete = new window.google.maps.places.Place.PlaceAutocompleteElement({
            types: ['address'],
            componentRestrictions: { country: 'us' },
            fields: ['formatted_address', 'address_components', 'geometry', 'place_id']
          });
          
          // Set initial value if available
          if (value) {
            autocomplete.value = value;
          }
          
          // Style the element to match the site's design
          autocomplete.style.width = '100%';
          autocomplete.style.height = '40px';
          autocomplete.style.padding = '8px 12px';
          autocomplete.style.borderRadius = '0.375rem';
          autocomplete.style.border = '1px solid rgb(226, 232, 240)';
          autocomplete.style.fontSize = '0.875rem';
          autocomplete.className = cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
          );
          
          if (disabled) {
            autocomplete.disabled = true;
          }
          
          if (placeholder) {
            autocomplete.placeholder = placeholder;
          }
          
          // Add accessibility attributes
          Object.entries(props).forEach(([key, value]) => {
            if (key.startsWith('aria-') || key === 'role' || key === 'id') {
              autocomplete.setAttribute(key, value as string);
            }
          });
          
          // Add the element to the DOM
          containerRef.current.appendChild(autocomplete);
          autocompleteRef.current = autocomplete;
          
          // Add event listener for place selection
          autocomplete.addEventListener('place_changed', (event) => {
            const place = event.place;
            if (place?.formattedAddress) {
              onChange(place.formattedAddress);
              setError(null);
            }
          });
          
          // Handle input changes to sync with parent component
          autocomplete.addEventListener('input', () => {
            onChange(autocomplete.value);
          });
          
        } catch (err) {
          console.error('Error initializing PlaceAutocompleteElement:', err);
          setError('Failed to initialize address autocomplete. Using fallback input instead.');
          setShowFallbackInput(true);
        }
      });
    } catch (err) {
      console.error('Error setting up address autocomplete:', err);
      setError(err instanceof Error ? err.message : 'Failed to initialize address autocomplete');
      setShowFallbackInput(true);
    }
    
    return () => {
      if (autocompleteRef.current && containerRef.current) {
        try {
          containerRef.current.removeChild(autocompleteRef.current);
        } catch (e) {
          console.error('Error cleaning up autocomplete element:', e);
        }
        autocompleteRef.current = null;
      }
    };
  }, [onChange, googleMapsLoaded, initializationAttempted, className, disabled, placeholder, value, props]);

  // Reset initialization attempted state when Google Maps loads
  useEffect(() => {
    if (googleMapsLoaded) {
      setInitializationAttempted(false);
    }
  }, [googleMapsLoaded]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setError(null);
  };

  const displayError = error || mapsError;

  return (
    <div className="relative w-full space-y-2">
      {isLoadingMaps && <ScriptLoading type="maps" />}
      
      {mapsError && <ScriptError type="maps" error={mapsError} />}
      
      <div ref={containerRef} className="relative w-full">
        {/* Fallback input for when PlaceAutocompleteElement fails or isn't available */}
        {showFallbackInput && (
          <Input
            ref={inputRef}
            type="text"
            value={value}
            onChange={handleInputChange}
            className={cn(className, "w-full", displayError ? 'border-red-500' : '')}
            disabled={disabled || isLoadingMaps || !!mapsError}
            placeholder={placeholder}
            aria-invalid={displayError ? "true" : "false"}
            aria-describedby={displayError ? "address-error" : undefined}
            {...props}
          />
        )}
        
        {isLoadingMaps && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
          </div>
        )}
      </div>
      
      {error && !mapsError && (
        <Alert variant="destructive">
          <AlertDescription id="address-error">
            {error}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default AddressAutocomplete;
