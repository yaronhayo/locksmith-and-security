
interface Window {
  initMap: () => void;
  onRecaptchaLoaded: () => void;
  google?: {
    maps?: {
      places?: {
        Autocomplete?: any;
        Place?: {
          PlaceAutocompleteElement?: any;
          Autocomplete?: any;
        };
      };
      Map?: any;
    };
    grecaptcha?: any;
  };
}
