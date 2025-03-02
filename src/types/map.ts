
export interface MapLocation {
  id: string | number;
  name: string;
  latitude: number;
  longitude: number;
  slug?: string;
  lat?: number;
  lng?: number;
  title?: string;
}

export interface MapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  markers?: MapLocation[];
  hoveredMarker?: string | null;
}
