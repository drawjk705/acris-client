import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes, IRoutes } from './routes';
import { withQueryParamProps } from '../client/utils/withQueryParamProps';

const renderRoutes = (routes: IRoutes) =>
    Object.values(routes).map(({ path, component, exact }) => (
        <Route
            key={`route_${path}`}
            exact={!!exact}
            path={path}
            component={withQueryParamProps(component)}
        />
    ));

export const App = () => <Switch>{renderRoutes(Routes)}</Switch>;
