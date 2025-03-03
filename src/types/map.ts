
export interface MapLocation {
  lat: number;
  lng: number;
  title?: string;
  slug?: string;
}

export interface MapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  markers?: MapLocation[];
  hoveredMarker?: string | null;
}
