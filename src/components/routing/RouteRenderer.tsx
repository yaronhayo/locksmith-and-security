
import { Route } from 'react-router-dom';
import { RouteConfig } from '@/types/routes';

interface RouteRendererProps {
  routes: RouteConfig[];
}

const RouteRenderer = ({ routes }: RouteRendererProps) => {
  return (
    <>
      {routes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={element}
        />
      ))}
    </>
  );
};

export default RouteRenderer;
