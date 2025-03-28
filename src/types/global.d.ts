
interface Window {
  initMap: () => void;
  onRecaptchaLoaded: () => void;
  google?: {
    maps?: {
      places?: {
        Autocomplete?: any;
        Place?: {
          Autocomplete?: any;
        };
      };
      Map?: any;
    };
    grecaptcha?: any;
  };
}
