import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Breadcrumbs from "@/components/Breadcrumbs";
import { mainRoutes } from "./routes/mainRoutes";
import { serviceRoutes } from "./routes/serviceRoutes";
import { serviceAreaRoutes } from "./routes/serviceAreaRoutes";
import { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

const Routes = () => {
  return (
    <>
      <Breadcrumbs />
      <RouterRoutes>
        {mainRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              path === "/" ? (
                element
              ) : (
                <Suspense fallback={<LoadingSpinner />}>
                  {element}
                </Suspense>
              )
            }
          />
        ))}
        
        {serviceRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<LoadingSpinner />}>
                {element}
              </Suspense>
            }
          />
        ))}
        
        {serviceAreaRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<LoadingSpinner />}>
                {element}
              </Suspense>
            }
          />
        ))}
      </RouterRoutes>
    </>
  );
};

export default Routes;