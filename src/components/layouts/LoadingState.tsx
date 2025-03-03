
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';

interface LoadingStateProps {
  message?: string;
  timeoutMs?: number;
  fallback?: React.ReactNode;
}

const LoadingState: React.FC<LoadingStateProps> = ({ 
  message = 'Loading...', 
  timeoutMs = 0,
  fallback = null 
}) => {
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    let timeoutId: number | null = null;
    
    if (timeoutMs > 0) {
      timeoutId = window.setTimeout(() => {
        console.log(`Loading timed out after ${timeoutMs}ms`);
        setTimedOut(true);
      }, timeoutMs);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutMs]);

  if (timedOut && fallback) {
    return <>{fallback}</>;
  }

  return (
    <div className="flex items-center justify-center p-8 min-h-[200px]">
      <LoadingSpinner text={message} />
    </div>
  );
};

export default LoadingState;
