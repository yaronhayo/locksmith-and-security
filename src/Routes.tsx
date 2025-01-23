import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import LoadingSpinner from "@/components/LoadingSpinner";
import { mainRoutes } from "./routes/mainRoutes";
import { serviceRoutes } from "./routes/serviceRoutes";
import { serviceAreaRoutes } from "./routes/serviceAreaRoutes";
import Breadcrumbs from "@/components/Breadcrumbs";

const SuspenseRoute = ({ element }: { element: React.ReactNode }) => (
  <Suspense fallback={<LoadingSpinner />}>{element}</Suspense>
);

const Routes = () => {
  return (
    <>
      <Breadcrumbs />
      <RouterRoutes>
        {/* Root route */}
        <Route
          path="/"
          element={mainRoutes.find(route => route.path === "/")?.element}
        />
        
        {/* Main routes excluding root */}
        {mainRoutes
          .filter(route => route.path !== "/")
          .map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<SuspenseRoute element={element} />}
            />
          ))}
        
        {/* Service routes */}
        {serviceRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<SuspenseRoute element={element} />}
          />
        ))}
        
        {/* Service area routes */}
        {serviceAreaRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<SuspenseRoute element={element} />}
          />
        ))}
      </RouterRoutes>
    </>
  );
};

export default Routes;