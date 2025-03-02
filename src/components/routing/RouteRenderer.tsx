
import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import { RouteConfig } from '@/types/routes';

interface RouteRendererProps {
  routes: RouteConfig[];
}

const RouteRenderer = ({ routes }: RouteRendererProps) => {
  return (
    <Fragment>
      {routes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={element}
        />
      ))}
    </Fragment>
  );
};

export default RouteRenderer;
