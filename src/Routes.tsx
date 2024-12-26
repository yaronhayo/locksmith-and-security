import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { ErrorBoundary } from "react-error-boundary";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorFallback from "@/components/ErrorFallback";
import { mainRoutes } from "./routes/mainRoutes";
import { serviceRoutes } from "./routes/serviceRoutes";
import { serviceAreaRoutes } from "./routes/serviceAreaRoutes";
import Breadcrumbs from "@/components/Breadcrumbs";

const Routes = () => {
  return (
    <>
      <Breadcrumbs />
      <RouterRoutes>
        {mainRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                {path === "/" ? (
                  element
                ) : (
                  <Suspense fallback={<LoadingSpinner />}>{element}</Suspense>
                )}
              </ErrorBoundary>
            }
          />
        ))}
        
        {serviceRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Suspense fallback={<LoadingSpinner />}>{element}</Suspense>
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
                <Suspense fallback={<LoadingSpinner />}>{element}</Suspense>
              </ErrorBoundary>
            }
          />
        ))}
      </RouterRoutes>
    </>
  );
};

export default Routes;