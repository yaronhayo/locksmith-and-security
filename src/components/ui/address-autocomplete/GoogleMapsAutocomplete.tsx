
import React, { forwardRef } from "react";
import { AddressAutocomplete, AddressAutocompleteProps } from "../address-autocomplete";
import GoogleMapsProvider from "@/components/providers/GoogleMapsProvider";

const GoogleMapsAutocomplete = forwardRef<HTMLInputElement, AddressAutocompleteProps>(
  (props, ref) => {
    return (
      <GoogleMapsProvider>
        <AddressAutocomplete {...props} ref={ref} />
      </GoogleMapsProvider>
    );
  }
);

GoogleMapsAutocomplete.displayName = "GoogleMapsAutocomplete";

export { GoogleMapsAutocomplete };
