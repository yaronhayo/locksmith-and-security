
import { ReactNode } from 'react';
import LoadingSpinner from '../LoadingSpinner';

interface MapLoaderProps {
  children?: ReactNode;
}

const MapLoader = ({ children }: MapLoaderProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <LoadingSpinner />
        <p className="mt-2 text-sm text-gray-500">Loading map...</p>
        {children}
      </div>
    </div>
  );
};

export default MapLoader;
