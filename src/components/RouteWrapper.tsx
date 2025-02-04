import { Suspense } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import LoadingSpinner from "./LoadingSpinner";

interface RouteWrapperProps extends Omit<RouteProps, 'element'> {
  path: string;
  element: React.ReactNode;
  isHome?: boolean;
}

const RouteWrapper = ({ path, element, isHome = false, ...props }: RouteWrapperProps) => {
  const wrappedElement = isHome ? element : (
    <Suspense fallback={<LoadingSpinner />}>
      {element}
    </Suspense>
  );

  return (
    <Route
      {...props}
      path={path}
      element={wrappedElement}
    />
  );
};

export default RouteWrapper;