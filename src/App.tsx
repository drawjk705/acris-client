import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PropertyResultContainer } from './pages/Results/PropertyResult/PropertyResultContainer';
import { SearchBar } from './pages/Search/SearchBar/SearchBar';
import { RouteProps, Routes } from './routes';
import { withQueryParamProps } from './utils/withQueryParamProps';

const renderRoutes = (routes: { [key: string]: RouteProps }) =>
    Object.values(routes).map(({ path, component, exact }) => (
        <Route
            key={`route_${path}`}
            exact={!!exact}
            path={path}
            component={withQueryParamProps(component)}
        />
    ));

export const App = () => <Switch>{renderRoutes(Routes)}</Switch>;
