
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Suspense, lazy, ReactNode, memo, useEffect, useRef } from "react";
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
  const isMounted = useRef(true);
  
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  
  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Only execute if still mounted
        if (isMounted.current) {
          // Clear loading state
          document.body.classList.remove('loading');
          
          // Clear any Google Maps callback
          if (window.initGoogleMaps) {
            // @ts-ignore - Clean up callback
            window.initGoogleMaps = undefined;
          }
        }
      }}
    >
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
  const routeMountedRef = useRef(false);
  
  useEffect(() => {
    console.log('Routes mounted - checking for duplicate headers');
    const headers = document.querySelectorAll('header');
    console.log(`Found ${headers.length} header elements in the DOM`);
    
    // Set mounted flag and track initial mount
    if (!routeMountedRef.current) {
      routeMountedRef.current = true;
      
      // Remove loading class on mount
      document.body.classList.remove('loading');
    }
    
    return () => {
      // This shouldn't happen normally, but just in case
      console.log('Routes unmounting');
    };
  }, []);
  
  // Map route data to Route components
  const renderRouteComponents = (routes: RouteConfig[]) => {
    return routes.map(({ path, element }) => (
      <Route 
        key={path} 
        path={path} 
        element={<RouteWrapper element={element} />} 
      />
    ));
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
          <Route path="*" element={<RouteWrapper element={<NotFound />} />} />
        </RouterRoutes>
      </Suspense>
    </RouteErrorBoundary>
  );
};

export default Routes;
