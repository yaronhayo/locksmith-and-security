
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import MapError from './MapError';

interface MapErrorBoundaryProps {
  children: React.ReactNode;
}

const MapErrorBoundary = ({ children }: MapErrorBoundaryProps) => {
  const handleError = (error: Error) => {
    console.error('Map Error Boundary caught error:', error);
    // Just log the error, no cache clearing since useMap hook doesn't exist
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
