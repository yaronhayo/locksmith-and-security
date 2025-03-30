
import { Route, Routes } from 'react-router-dom';
import { Fragment, Suspense } from 'react';
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
          element={
            <Suspense fallback={<div className="p-4">Loading...</div>}>
              {element}
            </Suspense>
          }
        />
      ))}
    </Fragment>
  );
};

export default RouteRenderer;
