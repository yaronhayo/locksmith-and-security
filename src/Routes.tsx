
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { mainRoutes } from "./routes/mainRoutes";
import { serviceRoutes } from "./routes/serviceRoutes";
import { serviceAreaRoutes } from "./routes/serviceAreaRoutes";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorFallback from "./components/ErrorFallback";

const Routes = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RouterRoutes>
        {mainRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              path === "/" ? (
                element
              ) : (
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Suspense fallback={<LoadingSpinner />}>
                    {element}
                  </Suspense>
                </ErrorBoundary>
              )
            }
          />
        ))}
        
        {serviceRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Suspense fallback={<LoadingSpinner />}>
                  {element}
                </Suspense>
              </ErrorBoundary>
            }
          />
        ))}
        
        {serviceAreaRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Suspense fallback={<LoadingSpinner />}>
                  {element}
                </Suspense>
              </ErrorBoundary>
            }
          />
        ))}
      </RouterRoutes>
    </ErrorBoundary>
  );
};

export default Routes;
