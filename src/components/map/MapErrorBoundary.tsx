
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import MapError from './MapError';
import { clearMapConfigCache } from '@/hooks/useMap';

interface MapErrorBoundaryProps {
  children: React.ReactNode;
}

const MapErrorBoundary = ({ children }: MapErrorBoundaryProps) => {
  const handleError = (error: Error) => {
    console.error('Map Error Boundary caught error:', error);
    // Clear cache on error to allow fresh reload
    clearMapConfigCache();
  };

  return (
    <ErrorBoundary
      FallbackComponent={({ error }) => <MapError error={error.message} />}
      onError={handleError}
      onReset={() => window.location.reload()}
    >
      {children}
    </ErrorBoundary>
  );
};

export default MapErrorBoundary;
