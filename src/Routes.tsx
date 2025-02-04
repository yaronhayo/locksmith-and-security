import { Routes as RouterRoutes } from 'react-router-dom';
import Breadcrumbs from "@/components/Breadcrumbs";
import RouteWrapper from "@/components/RouteWrapper";
import { mainRoutes } from "./routes/mainRoutes";
import { serviceRoutes } from "./routes/serviceRoutes";
import { serviceAreaRoutes } from "./routes/serviceAreaRoutes";

const Routes = () => {
  return (
    <>
      <Breadcrumbs />
      <RouterRoutes>
        {mainRoutes.map(({ path, element }) => (
          <RouteWrapper
            key={path}
            path={path}
            element={element}
            isHome={path === "/"}
          />
        ))}
        
        {serviceRoutes.map(({ path, element }) => (
          <RouteWrapper
            key={path}
            path={path}
            element={element}
          />
        ))}
        
        {serviceAreaRoutes.map(({ path, element }) => (
          <RouteWrapper
            key={path}
            path={path}
            element={element}
          />
        ))}
      </RouterRoutes>
    </>
  );
};

export default Routes;