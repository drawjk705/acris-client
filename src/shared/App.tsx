import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import { withQueryParamProps } from './withQueryParamProps';
import { GlobalTheme } from './GlobalTheme';

export const App = () => (
    <div>
        <GlobalTheme />
        <Switch>
            {routes.map(({ path, exact, component }) => (
                <Route
                    key={path}
                    path={path}
                    exact={exact}
                    component={withQueryParamProps(component)}
                />
            ))}
        </Switch>
    </div>
);
