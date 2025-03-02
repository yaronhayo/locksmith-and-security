
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
      <Suspense fallback={<LoadingSpinner />}>
        <RouterRoutes>
          {/* Render main routes */}
          {mainRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          
          {/* Render service routes */}
          {serviceRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          
          {/* Render service area routes */}
          {serviceAreaRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </RouterRoutes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Routes;
