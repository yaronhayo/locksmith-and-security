export const defaultMapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  scrollwheel: true,
  mapTypeControl: true,
  streetViewControl: true,
  fullscreenControl: true,
  mapTypeId: 'roadmap',
  styles: [
    {
      featureType: "all",
      elementType: "geometry",
      stylers: [{ visibility: "on" }]
    },
    {
      featureType: "all",
      elementType: "labels",
      stylers: [{ visibility: "on" }]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ visibility: "on" }]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ visibility: "on" }]
    }
  ]
};