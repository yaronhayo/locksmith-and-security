
import { useState, useEffect, useCallback } from "react";

interface PlaceSuggestion {
  place_id: string;
  description: string;
}

export const useAddressAutocompletion = (
  setAddress: (address: string) => void,
  setIsAddressLoading: (isLoading: boolean) => void
) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<PlaceSuggestion[]>([]);
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

  const fetchSuggestions = useCallback(async (query: string) => {
    if (!query || query.length < 3) {
      setSuggestions([]);
      return;
    }

    setIsAddressLoading(true);

    try {
      // In a real implementation, this would call a Google Places API endpoint
      // For demo purposes, we'll simulate some suggestions based on the input
      const mockSuggestions: PlaceSuggestion[] = [
        {
          place_id: "1",
          description: `${query} Main Street, North Bergen, NJ`
        },
        {
          place_id: "2",
          description: `${query} Broadway, New York, NY`
        },
        {
          place_id: "3",
          description: `${query} Kennedy Boulevard, Jersey City, NJ`
        }
      ];

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setSuggestions(mockSuggestions);
    } catch (error) {
      console.error("Error fetching address suggestions:", error);
      setSuggestions([]);
    } finally {
      setIsAddressLoading(false);
    }
  }, [setIsAddressLoading]);

  const handleInputChange = useCallback((value: string) => {
    setInputValue(value);
    
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Debounce the API call
    setDebounceTimeout(
      setTimeout(() => {
        fetchSuggestions(value);
      }, 300)
    );
  }, [debounceTimeout, fetchSuggestions]);

  useEffect(() => {
    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [debounceTimeout]);

  return {
    suggestions,
    handleInputChange
  };
};
