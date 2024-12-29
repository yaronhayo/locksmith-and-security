import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import LoadingSpinner from "@/components/LoadingSpinner";
import { mainRoutes } from "./routes/mainRoutes";
import { serviceRoutes } from "./routes/serviceRoutes";
import { serviceAreaRoutes } from "./routes/serviceAreaRoutes";
import Breadcrumbs from "@/components/Breadcrumbs";

const Routes = () => {
  return (
    <>
      <Breadcrumbs />
      <RouterRoutes>
        {/* Explicitly define the root route first */}
        <Route
          path="/"
          element={mainRoutes.find(route => route.path === "/")?.element}
        />
        
        {/* Then map through the rest of the main routes, excluding the root route */}
        {mainRoutes
          .filter(route => route.path !== "/")
          .map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<Suspense fallback={<LoadingSpinner />}>{element}</Suspense>}
            />
          ))}
        
        {serviceRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<Suspense fallback={<LoadingSpinner />}>{element}</Suspense>}
          />
        ))}
        
        {serviceAreaRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<Suspense fallback={<LoadingSpinner />}>{element}</Suspense>}
          />
        ))}
      </RouterRoutes>
    </>
  );
};

export default Routes;