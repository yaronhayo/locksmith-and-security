import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  "aria-describedby"?: string;
}

const AddressAutocomplete = ({
  value,
  onChange,
  className,
  placeholder = "Enter your address",
  required = false,
  disabled = false,
  id,
  name,
  "aria-describedby": ariaDescribedby,
}: AddressAutocompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey || '',
    libraries: ["places"]
  });

  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const { data, error } = await supabase
          .from('settings')
          .select('value')
          .eq('key', 'GOOGLE_MAPS_API_KEY')
          .single();

        if (error) {
          console.error('Error fetching Google Maps API key:', error);
          return;
        }

        if (data) {
          setApiKey(data.value);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchApiKey();
  }, []);

  useEffect(() => {
    if (!isLoaded || !inputRef.current || isInitialized || !apiKey) return;

    try {
      const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
        componentRestrictions: { country: "us" },
        fields: ["formatted_address", "address_components"],
        types: ["address"]
      });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place.formatted_address) {
          onChange(place.formatted_address);
          console.log('Selected address:', place.formatted_address);
        }
      });

      setIsInitialized(true);

      return () => {
        google.maps.event.clearInstanceListeners(autocomplete);
      };
    } catch (error) {
      console.error('Error initializing Places Autocomplete:', error);
    }
  }, [isLoaded, onChange, isInitialized, apiKey]);

  if (!apiKey) {
    return (
      <div className="relative">
        <Input
          type="text"
          value={value}
          className={className}
          placeholder="Loading..."
          disabled
          id={id}
        />
        <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-gray-400" />
      </div>
    );
  }

  if (loadError) {
    console.error('Google Maps Places API loading error:', loadError);
    return (
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={className}
        placeholder="Enter address manually (Maps API unavailable)"
        required={required}
        disabled={disabled}
        id={id}
        name={name}
        aria-describedby={ariaDescribedby}
      />
    );
  }

  if (!isLoaded) {
    return (
      <div className="relative">
        <Input
          type="text"
          value={value}
          className={className}
          placeholder="Loading..."
          disabled
          id={id}
        />
        <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-gray-400" />
      </div>
    );
  }

  return (
    <Input
      ref={inputRef}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      id={id}
      name={name}
      aria-describedby={ariaDescribedby}
    />
  );
};

export default AddressAutocomplete;