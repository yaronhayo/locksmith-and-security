import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import LoadingSpinner from "@/components/LoadingSpinner";
import { mainRoutes } from "./routes/mainRoutes";
import { serviceRoutes } from "./routes/serviceRoutes";
import { serviceAreaRoutes } from "./routes/serviceAreaRoutes";

const Routes = () => {
  return (
    <RouterRoutes>
      {mainRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={path === "/" ? element : <Suspense fallback={<LoadingSpinner />}>{element}</Suspense>}
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
  );
};

export default Routes;