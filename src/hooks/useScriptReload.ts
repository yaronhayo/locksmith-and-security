
import { useEffect } from 'react';

export const useScriptReload = (
  setGoogleMapsLoaded: (loaded: boolean) => void,
  setRecaptchaLoaded: (loaded: boolean) => void
) => {
  useEffect(() => {
    const handleMapsReload = () => {
      setGoogleMapsLoaded(false);
      const script = document.getElementById('google-maps-script');
      if (script) script.remove();
    };

    const handleRecaptchaReload = () => {
      setRecaptchaLoaded(false);
      const script = document.getElementById('recaptcha-script');
      if (script) script.remove();
    };

    document.addEventListener('reload-google-maps', handleMapsReload);
    document.addEventListener('reload-recaptcha', handleRecaptchaReload);

    return () => {
      document.removeEventListener('reload-google-maps', handleMapsReload);
      document.removeEventListener('reload-recaptcha', handleRecaptchaReload);
    };
  }, [setGoogleMapsLoaded, setRecaptchaLoaded]);
};
