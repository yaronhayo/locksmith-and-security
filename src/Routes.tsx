
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Suspense, lazy, ReactNode, memo, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { mainRoutes } from "./routes/mainRoutes";
import { serviceRoutes } from "./routes/serviceRoutes";
import { serviceAreaRoutes } from "./routes/serviceAreaRoutes";
import PageLoading from "./components/layouts/PageLoading";
import ErrorFallback from "./components/ErrorFallback";
import { RouteErrorBoundary } from "./components/layouts/RouteErrorBoundary";
import { RouteConfig } from './routes/types';

// Lazy load the 404 page
const NotFound = lazy(() => import('./pages/404'));

/**
 * Wraps a route element in error boundary and suspense
 */
const RouteWrapper = memo(({ element }: { element: ReactNode }) => {
  useEffect(() => {
    console.log('Route element mounted');
  }, []);
  
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<PageLoading type="skeleton" />}>
        {element}
      </Suspense>
    </ErrorBoundary>
  );
});

RouteWrapper.displayName = 'RouteWrapper';

/**
 * Main routing component
 * Renders all application routes with error boundaries and suspense
 */
const Routes = () => {
  useEffect(() => {
    console.log('Routes component mounted');
    try {
      console.log('Available routes:', 
        [...mainRoutes, ...serviceRoutes, ...serviceAreaRoutes].map(r => r.path)
      );
    } catch (error) {
      console.error('Error logging routes:', error);
    }
  }, []);

  // Map route data to Route components with better error handling
  const renderRouteComponents = (routes: RouteConfig[]) => {
    try {
      return routes.map(({ path, element }) => (
        <Route 
          key={path} 
          path={path} 
          element={<RouteWrapper element={element} />} 
        />
      ));
    } catch (error) {
      console.error('Error rendering route components:', error);
      return null;
    }
  };

  return (
    <RouteErrorBoundary>
      <Suspense fallback={<PageLoading type="skeleton" />}>
        <RouterRoutes>
          {/* Render main routes */}
          {renderRouteComponents(mainRoutes)}
          
          {/* Render service routes */}
          {renderRouteComponents(serviceRoutes)}
          
          {/* Render service area routes */}
          {renderRouteComponents(serviceAreaRoutes)}
          
          {/* 404 page */}
          <Route path="*" element={
            <Suspense fallback={<PageLoading type="spinner" />}>
              <NotFound />
            </Suspense>
          } />
        </RouterRoutes>
      </Suspense>
    </RouteErrorBoundary>
  );
};

export default Routes;
