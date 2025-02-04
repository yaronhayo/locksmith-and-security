import { MarkerF } from '@react-google-maps/api';
import { memo } from 'react';

interface MapMarkerProps {
  lat: number;
  lng: number;
  title?: string;
  slug?: string;
  isHovered: boolean;
  onClick: () => void;
  getMarkerIcon: (isHovered: boolean) => google.maps.Symbol;
}

const MapMarker = memo(({ 
  lat, 
  lng, 
  title, 
  slug, 
  isHovered, 
  onClick, 
  getMarkerIcon 
}: MapMarkerProps) => {
  return (
    <MarkerF
      position={{ lat, lng }}
      icon={getMarkerIcon(isHovered)}
      title={title}
      onClick={onClick}
      animation={isHovered ? google.maps.Animation.BOUNCE : undefined}
    />
  );
});

MapMarker.displayName = 'MapMarker';

export default MapMarker;