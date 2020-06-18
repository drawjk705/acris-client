import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../home';
import { Result } from '../components/Result/Result';

export const Routes: React.FC = () => (
    <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/result'} component={Result} />
    </Switch>
);
