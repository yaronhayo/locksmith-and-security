
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { mainRoutes } from "./routes/mainRoutes";
import { serviceRoutes } from "./routes/serviceRoutes";
import { serviceAreaRoutes } from "./routes/serviceAreaRoutes";
import PageLoading from "./components/layouts/PageLoading";
import ErrorFallback from "./components/ErrorFallback";

// Lazy load the 404 page
const NotFound = lazy(() => import('./pages/404'));

const Routes = () => {
  console.log("Rendering Routes component");
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<PageLoading type="skeleton" />}>
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
          
          {/* 404 page */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Routes;
