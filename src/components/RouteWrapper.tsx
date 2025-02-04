import { Suspense } from 'react';
import { Route } from 'react-router-dom';
import LoadingSpinner from "./LoadingSpinner";

interface RouteWrapperProps {
  path: string;
  element: React.ReactNode;
  isHome?: boolean;
}

const RouteWrapper = ({ path, element, isHome = false }: RouteWrapperProps) => (
  <Route
    key={path}
    path={path}
    element={
      isHome ? (
        element
      ) : (
        <Suspense fallback={<LoadingSpinner />}>
          {element}
        </Suspense>
      )
    }
  />
);

export default RouteWrapper;