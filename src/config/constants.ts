// Use environment variable or fallback to a default key
export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

export const serviceAreaLocations = [
  { lat: 40.7828, lng: -74.0297, title: "North Bergen", slug: "north-bergen" },
  { lat: 40.7282, lng: -74.0776, title: "Jersey City", slug: "jersey-city" },
  { lat: 40.7795, lng: -74.0246, title: "Union City", slug: "union-city" },
  { lat: 40.7857, lng: -74.0143, title: "West New York", slug: "west-new-york" },
  { lat: 40.7799, lng: -74.0566, title: "Secaucus", slug: "secaucus" },
  { lat: 40.7684, lng: -74.0287, title: "Weehawken", slug: "weehawken" },
  { lat: 40.7453, lng: -74.0279, title: "Hoboken", slug: "hoboken" },
  { lat: 40.7920, lng: -74.0037, title: "Guttenberg", slug: "guttenberg" }
] as const;

export const defaultMapCenter = { lat: 40.7828, lng: -74.0297 };
export const defaultMapZoom = 12;

export const mapStyles = [
  {
    featureType: "all",
    elementType: "geometry",
    stylers: [{ visibility: "on" }]
  },
  {
    featureType: "all",
    elementType: "labels",
    stylers: [{ visibility: "on" }]
  }
];