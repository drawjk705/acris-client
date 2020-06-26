import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import { withQueryParamProps } from './withQueryParamProps';
import { GlobalTheme } from './GlobalTheme';
import { SearchHeader } from '../client/components/SearchHeader/SearchHeader';

export const App = () => (
    <div>
        <GlobalTheme />
        <SearchHeader />
        <div style={{ transform: 'translate(-8px, 67px)' }}>
            <Switch>
                {routes.map(({ path, exact, component }) => (
                    <Route
                        key={path}
                        path={path}
                        exact={exact}
                        component={withQueryParamProps(path, component)}
                    />
                ))}
            </Switch>
        </div>
    </div>
);
