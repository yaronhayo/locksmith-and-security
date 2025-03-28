
interface Window {
  initMap: () => void;
  onRecaptchaLoaded: () => void;
  google?: {
    maps?: any;
    grecaptcha?: any;
  };
}
