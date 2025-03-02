
import { } from 'googlemaps';

declare global {
  interface Window {
    google: typeof google;
    initGoogleMaps: () => void;
  }
}

export {};
