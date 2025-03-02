
import { Routes as RouterRoutes } from 'react-router-dom';
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { mainRoutes } from "./routes/mainRoutes";
import { serviceRoutes } from "./routes/serviceRoutes";
import { serviceAreaRoutes } from "./routes/serviceAreaRoutes";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorFallback from "./components/ErrorFallback";
import RouteRenderer from "./components/routing/RouteRenderer";

const Routes = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingSpinner />}>
        <RouterRoutes>
          <RouteRenderer routes={mainRoutes} />
          <RouteRenderer routes={serviceRoutes} />
          <RouteRenderer routes={serviceAreaRoutes} />
        </RouterRoutes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Routes;
