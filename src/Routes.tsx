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

const RouteWithSuspense = ({ path, element }: { path: string; element: React.ReactNode }) => (
  <Route
    key={path}
    path={path}
    element={path === "/" ? element : <SuspenseRoute element={element} />}
  />
);

const Routes = () => {
  return (
    <>
      <Breadcrumbs />
      <RouterRoutes>
        {mainRoutes.map(({ path, element }) => (
          <RouteWithSuspense key={path} path={path} element={element} />
        ))}
        
        {serviceRoutes.map(({ path, element }) => (
          <RouteWithSuspense key={path} path={path} element={element} />
        ))}
        
        {serviceAreaRoutes.map(({ path, element }) => (
          <RouteWithSuspense key={path} path={path} element={element} />
        ))}
      </RouterRoutes>
    </>
  );
};

export default Routes;