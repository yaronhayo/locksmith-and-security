
import { Route } from 'react-router-dom';
import { Fragment, Suspense } from 'react';
import { RouteConfig } from '@/types/routes';
import PageLoading from '@/components/layouts/PageLoading';

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
            <Suspense fallback={<PageLoading type="skeleton" />}>
              {element}
            </Suspense>
          }
        />
      ))}
    </Fragment>
  );
};

export default RouteRenderer;
