
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Suspense, lazy, ReactNode, memo } from "react";
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
const RouteWrapper = memo(({ element }: { element: ReactNode }) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Suspense fallback={<PageLoading type="skeleton" />}>
      {element}
    </Suspense>
  </ErrorBoundary>
));

RouteWrapper.displayName = 'RouteWrapper';

/**
 * Main routing component
 * Renders all application routes with error boundaries and suspense
 */
const Routes = () => {
  // Memoize the route rendering function
  const renderRoutes = memo((routes: { path: string; element: ReactNode }[]) => (
    routes.map(({ path, element }) => (
      <Route 
        key={path} 
        path={path} 
        element={<RouteWrapper element={element} />} 
      />
    ))
  ));
  
  renderRoutes.displayName = 'renderRoutes';

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
