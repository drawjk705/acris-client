import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BoroughBlockLotSearch } from './components/SearchSection/BoroughBlockLotSearch/BoroughBlockLotSearch';
import { Result } from './components/Result/Result';

export const App = () => (
    <Result />
    // <Switch>
    //     <Route exact path='/' component={BoroughBlockLotSearch} />
    //     <Route exact path='/result' component={Result} />
    // </Switch>
);
