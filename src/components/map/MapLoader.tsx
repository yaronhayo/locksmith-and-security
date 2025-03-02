
import { ReactNode } from 'react';
import LoadingSpinner from '../LoadingSpinner';

interface MapLoaderProps {
  children?: ReactNode;
  text?: string;
}

const MapLoader = ({ children, text = "Loading map..." }: MapLoaderProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
      <div className="text-center">
        <LoadingSpinner />
        <p className="mt-2 text-sm text-gray-500">{text}</p>
        {children}
      </div>
    </div>
  );
};

export default MapLoader;
