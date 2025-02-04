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
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    }
  ]
};

export const getMarkerIcon = (isHovered: boolean) => ({
  path: google.maps.SymbolPath.CIRCLE,
  fillColor: isHovered ? '#2563EB' : '#1E3A8A',
  fillOpacity: 1,
  strokeWeight: isHovered ? 2 : 0,
  strokeColor: '#ffffff',
  scale: isHovered ? 12 : 10
});