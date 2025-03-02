
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Suspense, lazy, ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { mainRoutes } from "./routes/mainRoutes";
import { serviceRoutes } from "./routes/serviceRoutes";
import { serviceAreaRoutes } from "./routes/serviceAreaRoutes";
import PageLoading from "./components/layouts/PageLoading";
import ErrorFallback from "./components/ErrorFallback";

// Lazy load the 404 page
const NotFound = lazy(() => import('./pages/404'));

/**
 * Wraps a route element in error boundary and suspense
 */
const RouteWrapper = ({ element }: { element: ReactNode }) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Suspense fallback={<PageLoading type="skeleton" />}>
      {element}
    </Suspense>
  </ErrorBoundary>
);

const Routes = () => {
  const renderRoutes = (routes: { path: string; element: ReactNode }[]) => (
    routes.map(({ path, element }) => (
      <Route 
        key={path} 
        path={path} 
        element={<RouteWrapper element={element} />} 
      />
    ))
  );

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<PageLoading type="skeleton" />}>
        <RouterRoutes>
          {/* Render main routes */}
          {renderRoutes(mainRoutes)}
          
          {/* Render service routes */}
          {renderRoutes(serviceRoutes)}
          
          {/* Render service area routes */}
          {renderRoutes(serviceAreaRoutes)}
          
          {/* 404 page */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Routes;
