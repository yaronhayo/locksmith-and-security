import { Marker } from '@react-google-maps/api';

interface MapMarkerProps {
  lat: number;
  lng: number;
  title?: string;
  slug?: string;
  isHovered: boolean;
  onClick: () => void;
}

const MapMarker = ({ lat, lng, title, slug, isHovered, onClick }: MapMarkerProps) => {
  const getMarkerIcon = (isHovered: boolean) => ({
    path: window.google?.maps?.SymbolPath?.CIRCLE || 0,
    fillColor: isHovered ? '#2563EB' : '#1E3A8A',
    fillOpacity: 1,
    strokeWeight: isHovered ? 2 : 0,
    strokeColor: '#ffffff',
    scale: isHovered ? 12 : 10
  });

  return (
    <Marker
      position={{ lat, lng }}
      icon={getMarkerIcon(isHovered)}
      title={title}
      onClick={onClick}
      cursor="pointer"
      animation={isHovered ? google.maps.Animation.BOUNCE : undefined}
    />
  );
};

export default MapMarker;