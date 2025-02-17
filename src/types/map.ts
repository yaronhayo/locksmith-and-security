
export interface MapLocation {
  lat: number;
  lng: number;
  title?: string;
  slug?: string;
}

export interface MapProps {
  markers?: MapLocation[];
  highlightedMarker?: string | null;
  showAllMarkers?: boolean;
  zoom?: number;
  center?: { lat: number; lng: number };
  onClick?: (e: google.maps.MapMouseEvent) => void;
}
